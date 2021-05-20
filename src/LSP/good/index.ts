import { Bird } from "./Bird";
import { FlyingBird } from "./FlyingBird";
import { Kiwi } from "./Kiwi";
import { Sparrow } from "./Sparrow";

const flyingBirds: FlyingBird[] = [];
flyingBirds.push(new Sparrow());

flyingBirds.forEach(flyingBird => {
    flyingBird.fly();
});

const birds: Bird[] = [];

birds.push(new Bird())
birds.push(new Kiwi());

birds.forEach(bird => {
    bird.walk();
});
