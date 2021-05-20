import { SmartPrinter } from "./SmartPrinter";

class ModernPrinter implements SmartPrinter{
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