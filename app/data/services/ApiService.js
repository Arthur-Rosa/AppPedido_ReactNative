const api = 'https://10.92.198.8:3002/api/apppedidos/';

export const ApiService = {
    get(endpoint) {
        return fetch(`${api}${endpoint}`).then((resp) => resp.json());
    },
    post(endpoint, data) {
        return fetch(`${api}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }
}