import { Copyable } from "./Copyable";
import { Printable } from "./Printable";
import { Scanable } from "./Scanable";

class ModernPrinter implements Printable, Scanable, Copyable{
    print(): void {
        console.log("I'm printing...")
    }
    scan(): void {
        console.log("I'm scanning...")
    }
    copy(): void {
        console.log("I'm copying...")
    }

}