export default class ReqResClient {
    baseUrl = 'https://reqres.in/api'

    async get(endpoint) {
        const url = `${this.baseUrl}/${endpoint}`
        try {
            const response = await fetch(url)

            if (response.status >= 400) {
                console.log(response.json())
                throw new Error("Bad response from server")
            }

            return response.json()
        } catch (err) {
            console.error(err);
        }
    }

    async post(endpoint, data) {
        const url = `${this.baseUrl}/${endpoint}`
        try {
            const response = await fetch(
                url,
                {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: data
                }
            )

            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }

            return response.json()
        } catch (err) {
            console.error(err);
        }
    }

    async put(endpoint, data) {
        const url = `${this.baseUrl}/${endpoint}`

        try {
            const response = await fetch(
                url,
                {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: data
                }
            )

            if (response.status >= 400) {
                throw new Error("Bad response from server")
            }

            return response.json()
        } catch (err) {
            console.error(err);
        }
    }
}
