import { Router, Request, Response } from 'express'
import { Board } from '../db/init'
import { API, type TBadRequest } from '../../shared/API'

export const userRouter = Router()

userRouter.post(API.BOARD.CREATE, async (req: Request, res: Response) => {
  const { email, login, full_name, public_name, phone, password, avatar_url } =
    req.body

  const [, created] = await Board.findOrCreate({
    where: {
      login: login,
      email: email,
    },
    defaults: {
      email: email,
      login: login,
      full_name: full_name,
      public_name: public_name,
      phone: phone,
      password: password,
      avatar_url: avatar_url ?? '',
    },
  })

  if (created) {
    const users = await Board.findAll()
    const result = users[users.length - 1].dataValues
    return res.send(result)
  } else {
    const badRequest: TBadRequest = {
      reason: 'Логин уже используется',
    }
    return res.send(badRequest)
  }
})

