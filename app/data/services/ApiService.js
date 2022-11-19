const url = 'http://10.92.198.8:3002/api/';

export const ApiService = {
    get(endpoint) {
        return fetch(`${url}${endpoint}`).then(Response => Response.json())
    },
    post(endpoint, data) {
        return fetch(`${url}${endpoint}`,
            {
                method: 'POST',
                body: JSON.stringify(data)
            })

            .then(Response => Response.json())
            .then(function(json){
                return {
                    name: json.name,
                    price: json.price,
                    uri: json.uri,
                    options: json.options,
                    id: json.id
                }
              }).catch(function(error) {
                console.log('There has been a problem with your fetch operation: ' + error.message);
                  throw error;
                });
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