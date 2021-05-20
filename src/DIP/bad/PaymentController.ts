import { Doku } from "./Doku";

export class PaymentController{
    doku: Doku

    constructor(doku: Doku){
        this.doku = doku
    }

    pay(): void{
        this.doku.payWithDoku();
    }
}