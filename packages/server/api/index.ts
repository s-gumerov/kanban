import { Router } from 'express'
import { userRouter } from './user'
import { BASE_URL_API } from '../../shared/API'

export const router = Router()
router.use(BASE_URL_API, userRouter)
