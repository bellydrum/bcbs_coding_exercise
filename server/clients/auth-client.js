import ReqResClient from "./reqres-client.js";

export default class AuthClient extends ReqResClient {
    async getUsers() {
        return this.get('users')
    }

    async getUser(userId) {
        return this.get(`users/${userId}`)
    }

    async register(userData) {
        return this.post('register', userData)
    }

    async validate(userData) {
        const existingUsers = await this.getUsers()

        let userIsValidated = false

        existingUsers.data.forEach((user) => {
            if (user.email === userData.email) {
                userIsValidated = true
            }
        })

        return userIsValidated;
    }
}