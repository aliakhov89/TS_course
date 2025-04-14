///типізувати JSON:

/*{
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+7910000000",
        "email": "test@mail.com",
        "adress": {
            "city": "Dnipro",
        }
    }
}*/


let officeInfo: {
    officeId : number,
    isOpened: boolean,
    contacts: {
        phone : string,
        email: string,
        address: {
            city : string
        }
    }
}