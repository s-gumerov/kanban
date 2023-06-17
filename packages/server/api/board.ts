import { Router, Request, Response } from 'express'
import { Board } from '../db/init'
import { API, type TBadRequest } from '../../shared/API'
import { TDataToCreateBoard } from '../../shared/API/types'

export const boardRouter = Router()

boardRouter.post(API.BOARD.CREATE, async (req: Request, res: Response) => {
  const { creator_id, title, description } = req.body as TDataToCreateBoard

  const createdBoard = await Board.create({
    title: title,
    description: description,
    creator_id: creator_id,
  })

  if (createdBoard) {
    const boards = await Board.findAll()
    const result = boards[boards.length - 1].dataValues
    return res.send(result)
  } else {
    const badRequest: TBadRequest = {
      reason: 'Ошибка добавления доски, попробуйте еще раз',
    }
    return res.send(badRequest)
  }
})

