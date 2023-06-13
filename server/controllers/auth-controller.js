import AuthService from '../services/auth/auth-service.js';

const authService = new AuthService()

export default class AuthController {
    async getUsers() {
        return authService.getUsers()
    }

    async getUser(userId) {
        return authService.getUser(userId)
    }

    async register(userData) {
        return authService.register(userData)
    }
}