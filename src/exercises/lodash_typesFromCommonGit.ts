//npm i -D @types/lodash
// npm  fund
import * as _ from "lodash";
import { umAdd } from "../integrateWithJs/lotOfNonCheckableCode";

function callFn(): string {
  //@ts-ignore
  console.log("CallFn ", this, "");
  //@ts-ignore
  return this + " callFn";
}

let f = { id: 24, name: "No Pet Fn guy", pet: { name: "Tommy" }, callFn };

let f2 = _.clone(f);

console.log("f ", f);

console.log("f2", f2);

console.log("f2 == f ?", f2 == f);
console.log("f2 === f ?", f2 === f);

console.log("ummAdd 2, 3 :", umAdd(2, 3));

console.log("ummAdd 2, {{r:5}:", umAdd(2, { r: 5 }));

console.log("end ");
