"use strict";
import { randomUUID } from "crypto";
let o = { n: 232, l: "ses" };

function doIt() {
  let bValue = 38;
  Object.defineProperty(o, "b", {
    //bValue: 38,
    get() {
      return bValue;
    },
    set(newValue) {
      bValue = newValue;
    },
    enumerable: true,
    configurable: false,
  });
}
doIt();
/* Object.defineProperty(o, "b", {
  //bValue: 38,
  get() {
    return this.bValue;
  },
  set(newValue) {
    this.bValue = newValue;
  },
  enumerable: true,
  configurable: false,
}); */
//doIt(bValue);
// console.log("A o.b & o : ", o.b, o);
// o.b = 2; // 38
// //bValue = 8;
// console.log("B o.b & o after bValue is 8 : ", o.b, o);
// //console.log("bValue", bValue);
// o.b;
// o.b = 4;
// //bValue;
// console.log("C o.b & o after o.b is 4 : ", o.b, o);
//console.log("bValue", bValue);
