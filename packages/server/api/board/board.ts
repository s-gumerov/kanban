import { Router, Request, Response } from 'express'
import { Board, BoardRights, BoardRoles, User } from '../../db/init'
import { API, type TBadRequest } from '../../../shared/API'
import type { TDataToCreateBoard, TDataToDeleteBoard } from '../../../shared/API/types'
import type { TRoleName } from '../../db/models/boardRole'

export const boardRouter = Router()

boardRouter.post(API.Boards.CreateBoard, async (req: Request, res: Response) => {
  const { creator_id, title, description } = req.body as TDataToCreateBoard

  /* сначала добавляем доску в БД, чтобы получить её id и положить его таблицу пользователя */
  const board = await Board.create({
    title: title,
    description: description,
    creator_id: creator_id,
  })

  if (board === null) {
    const badRequest: TBadRequest = {
      reason: 'Ошибка добавления доски, попробуйте еще раз',
    }
    return res.send(badRequest)
  } 
  Board
    const user = await User.findOne({
      where: {
        id: creator_id
      }
    })

    if (user === null) {
      const badRequest: TBadRequest = {
        reason: 'Пользователь не найден',
      }
      return res.send(badRequest)
    } 
    
    await user.update({board_rights_arr: [... board.id]})

      /* найдем id роли в БД, чтобы внести корректную запись в таблицу 'tb_board_roles' */
      const boardRole: TRoleName = 'owner'
      const findRole = await BoardRoles.findOne({
        where: {
          role: boardRole
        }
      })

      if(findRole === null) {
        const badRequest: TBadRequest = {
          reason: `Ошибка, не найдена роль - ${boardRole} в таблице 'tb_board_roles'`,
        }
        return res.send(badRequest)
      } 
      
        await BoardRights.create({
          board_id: board.id,
          collection_id: user.id,
          role_id: findRole.id
        })
        
    return res.send(board)  
})

boardRouter.delete(API.Boards.DeleteBoard, async (req: Request, res: Response) => {
  const { user_id, board_id } = req.body as TDataToDeleteBoard

  const board = await Board.findOne({
    where: {
      id: board_id
    }
  })

  if(board === null) {
    const badRequest: TBadRequest = {
      reason: 'Ошибка, доска не найдена',
    }
    return res.send(badRequest)
  }

  if(board.dataValues.creator_id !== user_id) {
    const badRequest: TBadRequest = {
      reason: 'Ошибка, удаление доски возможно только владельцем доски',
    }
    return res.send(badRequest)

  } else {

  const boardRights = await BoardRights.findAll({
    where: {
      board_id: board_id
    }
  })

  boardRights.forEach( async (entry) => {
    try {
      const user = await User.findOne({
        where: {
          id: entry.dataValues.collection_id
        }
      })
  
      if(user === null || user.dataValues.board_rights_arr.length < 1 ) {
        return
      } else  {
         /* готовим новый массив без удаленного id чтобы обновить запись */
         const updateUserBoardRightsArr = await user.dataValues.board_rights_arr
         .filter((board: number) => board !== board_id)
         user.dataValues.board_rights_arr = updateUserBoardRightsArr
         await user.save()
         return entry.destroy()
      }
    } catch (error) {
      console.log(error)
    } 
  })
  
  const user = await User.findOne({
    where: {
      id: user_id
    }
  })

  return res.send(user)
}
})
