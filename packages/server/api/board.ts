import { Router, Request, Response } from 'express'
import { User } from '../db/init'
import { RoutePaths, type TBadRequest } from '../../shared'

export const userRouter = Router()

userRouter.post(RoutePaths.SIGNUP, async (req: Request, res: Response) => {
  const { email, login, full_name, public_name, phone, password, avatar_url } =
    req.body

  const [, created] = await User.findOrCreate({
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
    const users = await User.findAll()
    const result = users[users.length - 1].dataValues
    return res.send(result)
  } else {
    const badRequest: TBadRequest = {
      reason: 'Логин уже используется',
    }
    return res.send(badRequest)
  }
})

userRouter.post(RoutePaths.SIGNIN, async (req: Request, res: Response) => {
  const { login, password } = req.body

  const user = await User.findOne({
    where: {
      login: login,
    },
  })

  if (!user) {
    const badRequest: TBadRequest = {
      reason: 'Пользователь не найден',
    }
    return res.send(badRequest)
  }

  if (user.dataValues.password === password) {
    const result = user.dataValues
    return res.send(result)
  } else {
    const badRequest: TBadRequest = {
      reason: 'Не правильный пароль, попробуйте еще раз',
    }
    return res.send(badRequest)
  }
})