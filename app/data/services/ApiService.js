const url = 'http://localhost:3002/api/appPedidos';

export const ApiService = {
    get(endpoint) {
        return fetch(`${url}${endpoint}`)
            .then(Response => Response.json())
    },

    post(endpoint, data) {
        return fetch(`${url}${endpoint}`,
            {
                method: 'POST',
                body: JSON.stringify(data)
            })

            .then(Response => Response.json())
    },

    delete(endpoint, data) {
        return fetch(`${url}${endpoint}?id=${id}`, {
            method: 'DELETE',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(Response => Response.json())
    }
}