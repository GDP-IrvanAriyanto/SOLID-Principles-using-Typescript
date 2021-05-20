import { Doku } from "./Doku";
import { PaymentController } from "./PaymentController";

const paymentController: PaymentController = new PaymentController(new Doku());
paymentController.pay();