import { Burger, BurgerData, BurgersReponse } from "../../common/types"

export const fetchBurgers = (): Promise<Burger[]> => {
    return fetch('https://rest-api-b6410.firebaseio.com/burgers.json')
        .then(r => r.json())
        .then((data: BurgersReponse) => Object.keys(data).map(key => ({ id: key, ...data[key] })))
}

export const fetchBurger = (id: string): Promise<BurgerData> => {
    return fetch(`https://rest-api-b6410.firebaseio.com/burgers/${id}.json`)
        .then(r => r.json())
}