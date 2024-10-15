import { BurgerData } from "../../common/types"

export const addBurger = (burgerData: BurgerData): Promise<BurgerData> => {
    return fetch('https://rest-api-b6410.firebaseio.com/burgers.json', {
            method: 'POST',
            body: JSON.stringify(burgerData)
        })
        .then(r => r.json())
}
