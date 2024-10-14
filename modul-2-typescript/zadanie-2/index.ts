// Napisz funkcję processValue, która przyjmuje argument typu unknown. 

// Użyj typeof oraz instanceof do określenia typu danych i wykonaj odpowiednie operacje/
// Jeśli to string czy tablica, zwróć jego długość, a jeśli number, to zwróć jego wartość. 
// W przypadku boolean zwróć 1 lub 0, a dla obiektu rzuć błędem.

// CZEMU TUTAJ PASUJE VOID
const processValue = (arg: unknown): number => {
    if (typeof arg === 'string') {
        return arg.length
    }

    if (typeof arg === 'number') {
        return arg;
    }

    if (typeof arg === 'boolean') {
        return Number(arg)
    }

    if (typeof arg === 'object') {
        if (arg instanceof Array) {
            return arg.length;
        }

        throw Error('błąd')
    }
}



// Otypuj funckję z uzyciem "never"

type Car = {
    brand: string;
    model: string;
    year: number,
    type: 'car'
}

type Bike = {
    brand: string;
    model: string;
    type: 'bike'
}

// CZEMU TUTAJ PASUJE NEVER
const logger = (string: string) => {
    console.error(string)
}

const generateVehicle = (vehicle: Car | Bike) => {
    switch (vehicle.type) {
        case 'car':
            return `${vehicle.brand} ${vehicle.model} ${vehicle.year}`
        case 'bike':
            return `${vehicle.brand} ${vehicle.model}`
        default:
            logger(vehicle)
    }
}

// Otypuj funckję z uzyciem type gurads

type Pokemon = {
    type: string,
    atack: number,
    defence: number,
    health: number,
    scratch: () => '💅'
}

type FirePokemon = Pokemon & {
    vulnerability: 'water',
    fireball: () => '️‍🔥'
}

type WaterPokemon = Pokemon & {
    vulnerability: 'grass',
    watergun: () => '💦'
}

const isFirePokemon = (pokemon: Pokemon): pokemon is FirePokemon => {
    return pokemon.type === 'fire'
}

const isWaterPokemon = (pokemon: Pokemon): pokemon is WaterPokemon => {
    return pokemon.type === 'water'
}

const usePokemonSpecialPower = (pokemon: Pokemon) => {
    if (isFirePokemon(pokemon)) {
        pokemon.fireball()
    }

    if (isWaterPokemon(pokemon)) {
        pokemon.watergun()
    }

    pokemon.scratch();
}

