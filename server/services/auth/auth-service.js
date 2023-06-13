import AuthClient from '../../clients/auth-client.js'

const authClient = new AuthClient()

export default class AuthService {
    async getUsers() {
        return authClient.getUsers()
    }

    async getUser(userId) {
        return authClient.getUser(userId)
    }

    async register(userData) {
        return authClient.register(userData)
    }

    async validate(userData) {
        return authClient.validate(userData)
    }
}