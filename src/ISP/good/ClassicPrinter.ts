import { Printable } from "./Printable";

export class ClassicPrinter implements Printable{
    print(): void {
        console.log("I'm printing...")
    }

}