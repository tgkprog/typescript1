import * as path from "path";

export abstract class Shape {
  constructor(private readonly shapeType: string) {}

  get shapeName() {
    return this.shapeType;
  }

  abstract area(): number;

  abstract draw(graphcs: any): void;

  find(
    propName: keyof Shape,
    shapes: Shape[],
    val: unknown
  ): Shape | undefined {
    return shapes.find((obj) => obj[propName] === val);
  }
}

class Square extends Shape {
  constructor(private readonly len: number) {
    super("square");
  }

  override area(): number {
    return this.len * this.len;
  }

  override draw(graphcs: any): void {
    console.log("draw ", graphcs);
  }
}

export class Rectangle extends Shape {
  constructor(private readonly length: number, private readonly width: number) {
    super("Rectangle");
  }

  override area(): number {
    return this.length * this.width;
  }

  override draw(graphcs: any): void {
    console.log("draw ", graphcs);
  }
}

let r1 = new Rectangle(10, 5);
let s1 = new Square(4);

console.log("Rect ", r1, ", area ", r1.area(), "name ", r1.shapeName);

console.log("Square ", s1, ",  area ", s1.area(), " name ", s1.shapeName);

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;
//   ^?
let t1: SquareEvent = { kind: "square", x: 7, y: 9 };
let t2: CircleEvent = { kind: "circle", radius: 7 };
