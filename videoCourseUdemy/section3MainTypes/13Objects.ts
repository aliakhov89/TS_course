interface Player {
    firstname: string;
    surname: string;
    city: string;
    age: number;
}


const player: Player = {
    firstname: "Andrii",
    surname: "Liakhov",
    city: "Dnipro",
    age: 36
};

function getFullNameFromObject(playerEntity: Player): void {
    console.log(playerEntity.firstname, playerEntity.surname);
}

getFullNameFromObject(player);

