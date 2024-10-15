import { BurgerData } from './../../common/types';

export const updateBurger = (id: string, burgerData: BurgerData): Promise<BurgerData> => {
    return fetch(`https://rest-api-b6410.firebaseio.com/burgers/${id}.json`, { 
            method: 'PUT',
            body: JSON.stringify(burgerData)
        })
        .then(r => r.json())
}