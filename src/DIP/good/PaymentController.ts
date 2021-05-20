import { PaymentGateway } from "./PaymentGateway";

export class PaymentController{
    paymentGateway: PaymentGateway;
    constructor(paymentGateway: PaymentGateway){
        this.paymentGateway = paymentGateway
    }

    pay(): void{
        this.paymentGateway.pay();
    }
}