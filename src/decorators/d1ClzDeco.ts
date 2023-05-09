import { randomUUID } from "crypto";

function Component1(constructor: Function) {
  console.log("Clz Deco Copm1 ", constructor.prototype);
  //add new property
  constructor.prototype.uniqueId = randomUUID();
  constructor.prototype.insertToDom = () => {
    console.log("insert to dom on ", constructor, constructor.prototype);
    //this, this.prototype
  };
}

@Component1
class ProfileComponent {}

let c = new ProfileComponent();
console.log(c);
console.log("");
