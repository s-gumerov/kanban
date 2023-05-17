import { Router } from 'express'
import { userRouter } from './user'
import { API_URL } from '../../const'

export const router = Router()
router.use(API_URL, userRouter)
