import * as path from "path";

type EventConfig<Events extends { kind: string }> = {
  [E in Events as E["kind"]]: (event: E) => void;
};

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type Config = EventConfig<SquareEvent | CircleEvent>;
//   ^?
let t1: SquareEvent = { kind: "square", x: 7, y: 9 };
let t2: CircleEvent = { kind: "circle", radius: 7 };
