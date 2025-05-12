//Типізувати респонс сервера

//Запит
/*
{
    "sum": 1000,
    "from": 2,
    "to": 4
}

Респонси:
{
    "status": "success",
    "data": {
        "databaseId": 123,
        "sum": 1000,
        "from": 2,
        "to": 4
    }
},

{
    "status": "failed",
    "data": {
        "errorMessage": "Недостатньо коштів",
        "errorCode": 3
    }
}
 */

interface PaymentRequest {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    SUCCESS = 'success',
    FAILED = 'failed',
}

interface PaymentResponseDataSuccess {
    databaseId: number;
    sum: number;
    from: number;
    to: number;
}

interface PaymentResponseDataFailed {
    errorMessage: string;
    errorCode: number;
}

interface PaymentResponseSuccess {
    status: PaymentStatus.SUCCESS;
    data: PaymentResponseDataSuccess;
}

interface PaymentResponseFailed {
    status: PaymentStatus.FAILED;
    data: PaymentResponseDataFailed;
}