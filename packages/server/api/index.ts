import { Router } from 'express'
import { BASE_URL_API } from '../../shared/API'
import { authRouter } from './auth'
import { boardRouter } from './board'

export const router = Router()
router.use(BASE_URL_API, authRouter)
router.use(BASE_URL_API, boardRouter)
