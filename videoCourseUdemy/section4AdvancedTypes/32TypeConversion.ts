let aNmb: number = 5;
let bNmbToString: string = aNmb.toString();

let cString: string = 'Test text';
let dStringToNmb: number = parseInt(cString);


interface UserTest {
    name: string;
    email: string;
    login: string;
}

const userTest: UserTest = {
    name: 'Vasia',
    email: 'test@text.com',
    login: 'test',
}

interface Admin {
    name: string;
    role: number;
}

const userTestAdmin: Admin = { //недолік в тому що Адміну додали зайві властивості, яких в нього немає - емейл та логін
    ...userTest,
    role: 1
}

//функціі мапінга

function userToAdmin(userTest: UserTest): Admin {
    return {
        name: userTest.name,
        role: 1
    }
}