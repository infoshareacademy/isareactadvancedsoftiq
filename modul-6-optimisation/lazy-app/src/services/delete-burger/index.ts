export const deleteBurger = (id: string): Promise<void> => {
    return fetch(`https://rest-api-b6410.firebaseio.com/burgers/${id}.json`, { 
            method: 'DELETE'
        })
        .then(r => r.json())
}