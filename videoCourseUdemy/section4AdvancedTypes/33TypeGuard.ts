interface UserTest {
    name: string;
    email: string;
    login: string;
}

const userTest1: UserTest = {
    name: 'Vasia',
    email: 'test@text.com',
    login: 'test',
}

interface Admin {
    name: string;
    role: number;
}

function logId(id: string | number): void {
    if (typeof (id) !== 'string'){
        console.log(id);
    } else if (typeof (id) === 'number'){
        console.log(id);
    }
}

function isString(x: string | number): x is string {
    return typeof x === 'string';
}

function isAdmin(user: UserTest | Admin ): user is Admin {
    return 'role' in user;
}

function setRole(user: UserTest | Admin): void {
    if (isAdmin(user) {
        user.role = 0;
    } else {
        throw new Error('User is not admin');
    }
}