import { randomUUID } from "crypto";

type ComponentOptions = {
  selector: string;
  color: string;
};
//class decorator definition with param
function Component1(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log("Clz Deco Copm1 ", constructor.prototype, options);
    //add new property
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = randomUUID();
    constructor.prototype.insertToDom = () => {
      console.log(
        "Component1 insert to dom on ",
        options,
        "\n",
        constructor,
        "\n",
        constructor.prototype,
        "\n end C1 "
      );
      //this, this.prototype
    };
  };
}

//class decorator definition without params
function Component2(constructor: Function) {
  console.log(
    "Component2 ",
    "\n",
    constructor,
    "\n",
    constructor.prototype,
    "\n end c2"
  );
}

@Component1({ selector: "#goBtn2", color: "red" })
@Component2
class ProfileComponent {
  myProto: Object;
  constructor(public nm: string) {
    this.nm = nm;
    console.log("ProfileComponent");
    this.myProto = Object.getPrototypeOf(this);
    //this.prototype.uniqueId;
  }
}
console.log("before new ");
let c = new ProfileComponent("d");
console.log("after  new ");
console.log(c);
console.log("");
