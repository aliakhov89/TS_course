enum PaymentStatus {
    Holded,
    Processed,
    Reversed

}

class Payment {
    id: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number) {
        this.id = id;
        this.createdAt = new Date();
        this.status = PaymentStatus.Holded;
    }

    getPaymentLifeTime(): number {
        return new Date().getTime() - this.createdAt.getTime();
    }

    unholdPayment(): void {
        if(this.status == PaymentStatus.Processed) {
            throw new Error("Payment can't be reverced");
        }
        this.status = PaymentStatus.Reversed;
        this.updatedAt = new Date();
    }
}

const payment = new Payment(1);
payment.unholdPayment();
console.log(payment);
const time: number = payment.getPaymentLifeTime();
console.log(time);
