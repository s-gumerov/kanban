import { Router, Request, Response } from 'express'
import { signup, signin, getUser } from '../models/user'
import { User } from '../../db'
import type { TBadRequest } from './type'


export const userRouter = Router()

userRouter.post(signup.route, async (req: Request, res: Response) => {
  const { email, login, full_name, public_name, phone, password, avatar_url } = req.body

  const [created] = await User.findOrCreate({
    where: {
      login: login,
    },
    defaults: {
      email: email,
      login: login,
      full_name: full_name,
      public_name: public_name,
      phone: phone,
      password: password,
      avatar_url: avatar_url ?? '',
    }
  })
  
  if(created) {
    const users = await User.findAll()
    const result: signup.Response = users[users.length - 1].dataValues
    return res.send(result)
  } else {
    const badRequest: TBadRequest = {
      reason: "Логин уже используется"
    }
    return res.send(badRequest)
  }
})

userRouter.post(signin.route, async (req: Request, res: Response) => {
  const { login, password } = req.body
  
  const user = await User.findOne({
    where: {
      login: login
    }
  })

  if(!user) {
    const badRequest: TBadRequest = {
      reason: "Пользователь не найден"
    }
    return res.send(badRequest)
  }

  if(user.dataValues.password === password) {
    const result: signup.Response = user.dataValues
    return res.send(result)
  } else {
    const badRequest: TBadRequest = {
      reason: "Не правильный пароль, попробуйте еще раз"
    }
    return res.send(badRequest)
}
})

userRouter.get(getUser.route, async (req: Request, res: Response) => {
  const user = await User.findOne({
    where: {
      id: req.body.id,
    },
  })
  if (user) {
    const result: getUser.Response = {
      id: user.dataValues.id,
      email: user.dataValues.email,
      login: user.dataValues.login,
      full_name: user.dataValues.full_name,
      public_name: user.dataValues.public_name,
      phone: user.dataValues.phone,
      password: user.dataValues.password,
      avatar_url: user.dataValues.avatar_url,
    }
    return res.send(result)
  } else {
    const badRequest: TBadRequest = {
      reason: "Пользователь не найден"
    }
    return res.send(badRequest)
  }
})
