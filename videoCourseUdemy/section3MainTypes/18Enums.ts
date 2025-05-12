//1 - success
//2 - in progress
//3 - declined
enum StatusCodes {
    SUCCESS = 1,
    IN_PROGRESS = 2,
    DECLINED = 3
}

const res = {
    message: 'Payment successfull',
    statusCode: StatusCodes.SUCCESS
};


function action(status: StatusCodes): void {
    console.log(status);
}

action(StatusCodes.IN_PROGRESS);

function compute(){
    return 3;
}

enum Roles {
    ADMIN =1,
    USER = compute()
}






