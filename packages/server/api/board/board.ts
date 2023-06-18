import { Router, Request, Response } from 'express'
import { Board, BoardRights, BoardRoles, User } from '../../db/init'
import { API, type TBadRequest } from '../../../shared/API'
import type { TDataToCreateBoard } from '../../../shared/API/types'
import type { TRoleName } from '../../db/models/boardRole'

export const boardRouter = Router()

boardRouter.post(API.Boards.Create, async (req: Request, res: Response) => {
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
        
    return res.send({
      status: 'ok',
      board: board
    })  
})

