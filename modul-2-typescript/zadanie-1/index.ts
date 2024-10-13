type User = {
    name: string;
}

interface IUser {
    name: string;
}


// Rozszerzanie
// Dodaj nowe pole "role", które moze przyjąć jedynie opcje "user" lub "admin"



// Nowy typ Admin
// Stwórz nowy typ, który będzie zawierał wszytsko co ma poprzedni typ (ale "role" będzie tylko jedną opcją) 
// i dodatkowo będzie pole "permissions" jako tablica ciągów znaku



// Stwórz typ Person który będzie albo User albo Admin


// --------------------------------------------------------

// Poprawa FetchData tak by mozna sprecyzowac czym jest data
type FetchData = {
    isLoading: boolean;
    error: Error | null;
    data: any[]
}


// Stwórz typ Store który przyjmuje dwa parametry, 
// który decdydują jaki typ ma data przechowywana oraz
// oraz jaki typ ma stack w type StoreError

type StoreError = {
    message: string;
    stack: any;
}

type Store = {
    data: any;
    error: any;
}