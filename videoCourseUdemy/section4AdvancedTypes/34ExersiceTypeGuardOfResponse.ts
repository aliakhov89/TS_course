//Рішення завдання з 24Exersice

interface PaymentRequest {
    sum: number;
    from: number;
    to: number;
}

enum PaymentStatus {
    SUCCESS34 = 'success',
    FAILED34 = 'failed',
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
    status: PaymentStatus.SUCCESS34;
    data: PaymentResponseDataSuccess;
}

interface PaymentResponseFailed {
    status: PaymentStatus.FAILED34;
    data: PaymentResponseDataFailed;
}

type Res = PaymentResponseSuccess | PaymentResponseFailed;

function isSuccess(res: Res): res is PaymentResponseSuccess {
    if (res.status === PaymentStatus.SUCCESS34) {
        return true;
    }
    return false;
}

function getIdFromData(res: Res): number {
    if (isSuccess(res)) {
        return res.data.databaseId;
    } else {
        throw new Error(res.data.errorMessage);
    }
}