type httpMethod = 'get' | 'post';

type newString = string;

function fetchWithAuth( url: string, method: 'post' | 'get') : 1 | -1{
    return 1;
}

user = {
    name: 'Andrii',
    age: 22,
    skills: ['1', '2', '3'],
}

//with type Alias

type User = {
    name: string,
    age: number,
    skills: string[]
}

let user1: User = {
    name: 'Andrii',
    age: 22,
    skills: ['1', '2', '3'],
}

type UserRole = {
    id: number,
}

type UserWithRole = User & UserRole;

let user2: UserWithRole = {
    name: 'Dmitro',
    age: 22,
    skills: ['1', '2', '3'],
    id: 1
};