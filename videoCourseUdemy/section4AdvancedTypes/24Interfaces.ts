interface UserForTest {
    name: string,
    age: number,
    skills: string[],

    log: (id: number) => string,
}

interface UserWithRole1 extends UserForTest {
    roleId: number;
}

interface Role {
    roleId: number;
}

interface UserWithRole4 extends UserForTest, Role {
    createdAt: Date;
}

let user4: UserWithRole4 = {
    name: 'Andrii',
    age: 36,
    skills: ['1', '2'],
    roleId: 1,
    createdAt: new Date(),
    log(id: number) {
        return `test {id}`;
    }
}
