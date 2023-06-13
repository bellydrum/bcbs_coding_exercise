export async function getUsers() {
    const response = await fetch('/auth/get-users');
    return response.json();
}

export async function createUser(data) {
    const response = await fetch(`/auth/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return response.json();
}

export async function validateUser(email, password) {
    const response = await fetch(`/auth/validate-user`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            user: {
                email: email,
                password: password,
            }
        })
    })

    return response.json()
}

export default {getUsers, createUser, validateUser}