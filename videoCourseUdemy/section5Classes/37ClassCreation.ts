class TestUser {
    name1: string;
    email: string;
    dateOfbirth: string;

    constructor(name: string, email: string, dateOfbirth: string) {
        this.name1 = name;
        this.email = email;
        this.dateOfbirth = dateOfbirth;
    }
}

const userA = new TestUser('Vasia', 'test@test.com', '02.01.1999');
console.log(userA);

userA.name1 = 'Dima';
console.log(userA);

class AdminUser {
    role!: number;
}

const adminUser = new AdminUser();
adminUser.role = 2;

