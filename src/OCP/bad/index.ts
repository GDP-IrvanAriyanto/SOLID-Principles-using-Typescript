import { AreaCalculator } from "./AreaCalculator";

const areaCalculator = new AreaCalculator();

const areaRectangle = areaCalculator.areaRectangle(10, 5);
const areaCircle = areaCalculator.areaCircle(10);

console.log(areaRectangle);
console.log(areaCircle);