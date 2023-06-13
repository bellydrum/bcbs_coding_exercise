export async function getUsers() {
    const response = await fetch('/auth/get-users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/auth/register`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
    })
    return await response.json();
}