import { AreaCalculator } from "./AreaCalculator";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";
import { Triangle } from "./Triangle";

const areaCalculator = new AreaCalculator();

const shapes: Shape[] = [];

shapes.push(new Rectangle(10, 5));
shapes.push(new Circle(7));
shapes.push(new Triangle(10, 4));

shapes.forEach((shape) => {
  // tslint:disable-next-line: no-console
  console.log(areaCalculator.area(shape));
});
