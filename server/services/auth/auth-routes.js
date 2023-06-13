import express from 'express';
import AuthController from '../../controllers/auth-controller.js'

const router = express.Router();

const authController = new AuthController()

router.get('/get-users', async (req, res) => {
    const users = await authController.getUsers();
    res.send(users)
})

router.get('/get-user/:id', async (req, res) => {
    const userId = req.params.id
    const user = await authController.getUser(userId);
    res.send(user)
})

router.post('/register', async (req, res) => {
    const userData = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    }
    await authController.register(userData)
})

export default router