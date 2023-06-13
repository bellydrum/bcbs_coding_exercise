import AuthClient from '../../clients/auth-client.js'

const userClient = new AuthClient()

export default class AuthService {
    async getUsers() {
        return userClient.getUsers()
    }

    async getUser(userId) {
        return userClient.getUser(userId)
    }

    async register(userData) {
        return userClient.register(userData)
    }
}