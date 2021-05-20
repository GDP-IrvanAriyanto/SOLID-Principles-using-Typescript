export class AreaCalculator{
    areaRectangle(width: number, height: number): number{
        return width * height;
    }

    areaCircle(radius: number): number{
        return radius * radius * Math.PI;
    }
}