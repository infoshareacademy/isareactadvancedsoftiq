export type BurgerData = {
    name: string;
    ingredients: string;
    price: number;
    url?: string;
}

export interface Burger extends BurgerData {
    id: string,
}

export type BurgersReponse = {
    [id: string]: {
        name: string;
        ingredients: string;
        price: number;
    }
}
