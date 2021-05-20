import { PaymentGateway } from "./PaymentGateway";

export class Doku implements PaymentGateway{
    pay(): void{
        console.log("paying with Doku...")
    }
}