interface UserCreds {
    login: string;
    password?: string; // знак ? означає що поле опційне
}

const user1Creds: UserCreds = {
    login: 'test@test.ua',
    password: 'test',
}

const user2Creds: UserCreds = {
    login: 'test@test.ua'
}

function multiply(first: number, second?: number): number {
    if (!second) {
        return first * first;
    }
    return first * second;
}

console.log(multiply(2, 3));
console.log(multiply(2));