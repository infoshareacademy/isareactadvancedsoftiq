type User = {
    name: string;
}

interface IUser {
    name: string;
}

// Rozszerzanie
// Dodaj nowe pole "role", które moze przyjąć jedynie opcje "user" lub "admin"

interface IUser {
    role: "user" | "admin"
}

type NewUser = User & {
    role: "user" | "admin"
}

interface INewUser extends User {
    role: "user" | "admin"
}


// Nowy typ Admin
// Stwórz nowy typ, który będzie zawierał wszytsko co ma poprzedni typ (ale "role" będzie tylko jedną opcją) 
// i dodatkowo będzie pole "permissions" jako tablica ciągów znaku

type Admin = IUser & {
    role: "admin",
    persmissions: string[]
}

// Stwórz typ Person który będzie albo User albo Admin

type Person = Admin | User


// --------------------------------------------------------

// Poprawa FetchData tak by mozna sprecyzowac czym jest data
type FetchData<T> = {
    isLoading: boolean;
    error: Error | null;
    data: T
}

const result: FetchData<string[]> = {
    isLoading: false,
    error: null,
    data: ['a', 'b', 'c']
}

// Stwórz typ Store który przyjmuje dwa parametry, 
// który decdydują jaki typ ma data przechowywana oraz
// oraz jaki typ ma stack w type StoreError

type StoreError<T> = {
    message: string;
    stack: T;
}

type Store<D, ES> = {
    data: D;
    error: StoreError<ES>;
}

const store: Store<{ key: string }, string> = {
    data: {
        key: 'softiq'
    },
    error: {
        message: 'message',
        stack: 'to jest stack error'
    }
}