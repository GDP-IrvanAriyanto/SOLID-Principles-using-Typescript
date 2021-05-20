import { Doku } from "./Doku";
import { Midtrans } from "./Midtrans";
import { PaymentController } from "./PaymentController";

const controllers: PaymentController[] = [];

controllers.push(new PaymentController(new Doku()));
controllers.push(new PaymentController(new Midtrans()));

controllers.forEach(controller => {
    controller.pay();
});