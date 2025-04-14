function getFullName(firstname: string, surname: string): string {
   console.log(firstname, surname);
}

getFullName("Andrii", "Liakhov");

const getFullNameArrow = (firstname: string, surname: string) => {
    console.log(firstname, surname);
}

getFullNameArrow("Andrii", "Liakhov");