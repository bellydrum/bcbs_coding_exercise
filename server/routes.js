import express from 'express';
import authRouter from './services/auth/auth-routes.js'
import resourcesRouter from './services/resources/resources-routes.js'

const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Hello, world!');
});

router.use('/auth', authRouter)
router.use('/resources', resourcesRouter)

export default router