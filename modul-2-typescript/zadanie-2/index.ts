// Napisz funkcję processValue, która przyjmuje argument typu unknown. 

// Użyj typeof oraz instanceof do określenia typu danych i wykonaj odpowiednie operacje/
// Jeśli to string czy tablica, zwróć jego długość, a jeśli number, to zwróć jego wartość. 
// W przypadku boolean zwróć 1 lub 0, a dla obiektu rzuć błędem.

const processValue = () => {

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

const generateVehicle = (vehicle) => {
    switch (vehicle.type) {
        case 'car':
            return `${vehicle.brand} ${vehicle.model} ${vehicle.year}`
        case 'bike':
            return `${vehicle.brand} ${vehicle.model}`
        default:
            console.error('Nie znany wehikuł', vehicle)
    }
}

// Otypuj funckję z uzyciem type gurads

type Pokemon = {
    type: string,
    atack: number,
    defence: number,
    health: number
}

type FirePokemon = Pokemon & {
    vulnerability: 'water',
    fireball: () => '️‍🔥'
}

type WaterPokemon = Pokemon & {
    vulnerability: 'grass',
    watergun: () => '💦'
}

const usePokemonSpecialPower = (pokemon) => {
    switch (pokemon.type) {
        case 'fire':
            pokemon.fireball();
        case 'water':
            pokemon.watergun();
        default:
            return 'Nie znany pokemon'
    }
}

