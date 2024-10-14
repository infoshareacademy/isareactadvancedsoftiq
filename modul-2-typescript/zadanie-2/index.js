// Napisz funkcję processValue, która przyjmuje argument typu unknown. 
// Użyj typeof oraz instanceof do określenia typu danych i wykonaj odpowiednie operacje/
// Jeśli to string czy tablica, zwróć jego długość, a jeśli number, to zwróć jego wartość. 
// W przypadku boolean zwróć 1 lub 0, a dla obiektu rzuć błędem.
var processValue = function (arg) {
    if (typeof arg === 'string') {
        return arg.length;
    }
    if (typeof arg === 'number') {
        return arg;
    }
    if (typeof arg === 'boolean') {
        return Number(arg);
    }
    if (typeof arg === 'object') {
        if (arg instanceof Array) {
            return arg.length;
        }
        throw Error('błąd');
    }
};
var logger = function (string) {
    console.error(string);
};
var generateVehicle = function (vehicle) {
    switch (vehicle.type) {
        case 'car':
            return "".concat(vehicle.brand, " ").concat(vehicle.model, " ").concat(vehicle.year);
        case 'bike':
            return "".concat(vehicle.brand, " ").concat(vehicle.model);
        default:
            logger(vehicle);
    }
};
var usePokemonSpecialPower = function (pokemon) {
    switch (pokemon.type) {
        case 'fire':
            pokemon.fireball();
        case 'water':
            pokemon.watergun();
        default:
            return 'Nie znany pokemon';
    }
};
