import { Bird } from "./Bird";
import { Kiwi } from "./Kiwi";
import { Sparrow } from "./Sparrow";

const birds: Bird[] = [];

birds.push(new Bird());
birds.push(new Sparrow());
birds.push(new Kiwi());

birds.forEach(bird => {
    bird.fly();
});