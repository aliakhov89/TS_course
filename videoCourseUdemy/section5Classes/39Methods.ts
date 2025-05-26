enum PaymentStatus {
    Holded,
    Processed,
    Reversed

}

class Payment {
    id: number;
    status: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
        this.updatedAt = new Date();
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unHoldPayment(): void {
        if(this.status == PaymentStatus.Processed) {
            throw new Error("Payment can't be reverced");
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}

const payment = new Payment(1);
payment.unHoldPayment();
console.log(payment);
const time: number = payment.getPaymentLifeTime();
console.log(time);
