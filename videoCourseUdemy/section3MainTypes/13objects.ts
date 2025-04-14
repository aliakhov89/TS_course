const player = {
    firstname: "Andrii",
    surname: "Liakhov",
    city: "Dnipro",
    age: 36
};

function getFullNameFromObject(playerEntity): string {
    console.log(playerEntity.firstname, playerEntity.surname);
}

getFullNameFromObject(player);

