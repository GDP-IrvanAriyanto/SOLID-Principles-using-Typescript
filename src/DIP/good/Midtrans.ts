import { PaymentGateway } from "./PaymentGateway";

export class Midtrans implements PaymentGateway{
    pay(): void {
        console.log("paying with Midtrans...")
    }

}