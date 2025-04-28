interface User11 {
    name: string,
}
//довизначили інтерфейс новим параметром
interface User11 {
    age: number
}

const user3: User11 = {
    name: 'Dmitro',
    age: 22
}

//type не дає змогу довизначити
type User12 = {
    name: string,
}

type User12 = {
    age: number,
}


type ID = string | number;

interface IDI {
    ID: string | number;
}

