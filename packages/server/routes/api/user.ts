import { Router, Request, Response } from 'express'
import { setNewUser, getUser } from '../models/user'
import { User } from '../../db'

export const router = Router()

router.post(setNewUser.route, async (req: Request, res: Response) => {
  const { email, login, full_name, public_name, phone, password, avatar_url } =
    req.body

  const newUser = await User.create({
    email: email,
    login: login,
    full_name: full_name,
    public_name: public_name,
    phone: phone,
    password: password,
    avatar_url: avatar_url ?? '',
  })

  await newUser.save()
  const users = await User.findAll()
  const id = users[users.length - 1].dataValues.id
  const result: setNewUser.Response = { user_id: id }
  res.send(result)
})

router.get(getUser.route, async (req, res) => {
  const user = await User.findOne({
    where: {
      id: req.body.user_id,
    },
  })
  let result = {}
  if (user) {
    result = {
      id: user.dataValues.id,
      login: user.dataValues.login,
      full_name: user.dataValues.full_name,
      public_name: user.dataValues.public_name,
      phone: user.dataValues.phone,
      password: user.dataValues.password,
      avatar_url: user.dataValues.avatar_url,
    }
  }
  res.send(result)
})
