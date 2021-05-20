import { Shape } from "./Shape";

export class Triangle implements Shape {
  base: number;
  height: number;

  constructor(base: number, height: number) {
    (this.base = base), (this.height = height);
  }

  area(): number {
    return (this.base * this.height) / 2;
  }
}
