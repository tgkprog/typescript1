import {
  Capitalize,
  Capitalize2,
  sampleMethodDecorator,
} from "./D2fnDecorators";
export function makeModue() {}

///let g = sampleMethodDecorator(false);
class Person {
  constructor(
    public firstName: string,
    public lastName: string,
    public loc: string
  ) {}

  @Capitalize
  get fullName(): string {
    return `${this.fullName} ${this.lastName}`;
  }

  @Capitalize2
  public computeTime2(dest: string): string {
    //placeholder impl
    return this.computeTime(dest);
  }

  public computeTime(dest: string): string {
    //placeholder impl
    return dest + " " + this.loc + " " + new Date();
  }

  @sampleMethodDecorator(false)
  attach(i: number) {
    console.log("Person attaching ", i);
    if (i == 0) {
      throw new Error("Hey no 0s");
    }
  }
}

let per1: Person = new Person("Mitti", "Arora", "232.96592,28402");
try {
  per1.attach(4);

  per1.attach(-4);
  //per1.attach(0);
} catch (ee) {
  console.log("Err ", ee);
}

console.log(per1.computeTime("22 asdas Blr"));
console.log(per1.computeTime2("22 asdas Blr"));
