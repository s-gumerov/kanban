import { Router, Request, Response } from 'express'
import { setNewUser, getUser } from '../models/user'
import { User } from '../../db'
import type { TBadRequest } from './type'
import { where } from 'sequelize'


export const userRouter = Router()

userRouter.post(setNewUser.route, async (req: Request, res: Response) => {
  const { email, login, full_name, public_name, phone, password, avatar_url } =
    req.body

  const [user, created] = await User.findOrCreate({
    where: {
      email: email,
    },
    defaults: {
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
    const id = users[users.length - 1].dataValues.id
    const result: setNewUser.Response = { user_id: id }
    return res.send(result)
  } else {
    const badRequest: TBadRequest = {
      reason: "Email уже используется"
    }
    return res.send(badRequest)
  }
})

userRouter.get(getUser.route, async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.body.user_id,
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
