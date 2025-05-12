function getFullName(firstname: string, surname: string): void {
   console.log(firstname, surname);
}

getFullName("Andrii", "Liakhov");

const getFullNameArrow = (firstname: string, surname: string): void => {
    console.log(firstname, surname);
}

getFullNameArrow("Andrii", "Liakhov");