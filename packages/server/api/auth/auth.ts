import { Router, Request, Response } from 'express'
import { User } from '../../db/init'
import { API, type TBadRequest } from '../../../shared/API'
import type { TSignInData, TSignupData, TUserData } from '../../../shared/API/types'

export const authRouter = Router()

const checkUserDetails = (user: TUserData) => {
  /* деструктурируем чтобы исключить - даты добавления и обновления записи в БД и пароль */
  const { id, email, login, full_name, public_name, phone, avatar_url, board_rights_arr } = user
  return { id, email, login, full_name, public_name, phone, avatar_url, board_rights_arr }
}

authRouter.post(API.Auth.Signup, async (req: Request, res: Response) => {
  const { email, login, full_name, public_name, phone, password, avatar_url }: TSignupData =
    req.body

    /**
     * Сделать проверку поляей запроса на соответствие модели пользователя
     */

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
    const user: TUserData = users[users.length - 1].dataValues
    return res.send(checkUserDetails(user))
  } else {
    const badRequest: TBadRequest = {
      reason: 'Логин уже используется',
    }
    return res.send(badRequest)
  }
})

authRouter.post(API.Auth.Signin, async (req: Request, res: Response) => {
  const { login, password }: TSignInData = req.body

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
    return res.send(checkUserDetails(user.dataValues))
  } else {
    const badRequest: TBadRequest = {
      reason: 'Не правильный пароль, попробуйте еще раз',
    }
    return res.send(badRequest)
  }
})
