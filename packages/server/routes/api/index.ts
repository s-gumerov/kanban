import { Router } from 'express'
import { userRouter } from './user'
import { API_URL } from '../../const'

const router = Router()
console.log('router started')
router.use(API_URL, userRouter)

export { router }
