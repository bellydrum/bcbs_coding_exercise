import express from 'express'

import authRouter from './auth/auth-routes.js'
import resourcesRouter from './resources/resources-routes.js'

const router = express.Router()

router.use('/resources', resourcesRouter)
router.use('/auth', authRouter)

export default router