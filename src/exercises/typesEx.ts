/*
letusers = [  {name:'John Smith',age:30,occupation:'Software engineer'},
  {name:'Kate Müller',age:28} */

type Users = {
  name: string;
  age: number;
  occupation?: string;
};

let users: Users[] = [
  { name: "John Smith", age: 30, occupation: "Software engineer" },
  { name: "Kate Müller", age: 28 },
];

/**Birds fly. Fish swim. A Pet can be a Bird or Fish.
 * Use type aliases to represent these */
namespace sol1 {
  type Pet = {
    owner?: string;
    isPet: boolean;
  };

  type Fish = {
    pet: Pet;
    swim(): void;
  };

  type Bird = {
    pet: Pet;
    fly(): void;
  };
}
namespace moshSol {
  type Fish = {
    swim(): void;
  };

  type Bird = {
    fly(): void;
  };

  type Pet = Fish | Bird;
}

type Bird = {
  name: String;
  flyFn?(): void;
};
//optional chaining

type Customer = {
  id: number;
  name: String;
  pet?: Bird;
  callFn?(): void;
};

function callFn(): string {
  //@ts-ignore
  console.log("CallFn ", this, "");
  //@ts-ignore
  return this + " callFn";
}

function flyFn(): string {
  //@ts-ignore
  console.log("flyFn ", this, "");
  //@ts-ignore
  return this + " flyFn";
}

type Custys = Customer | null | undefined;
let customers: Custys[] = [
  null,
  { id: 21, name: "sd", callFn },
  undefined,
  { id: 23, name: "sd", pet: { name: "Rags", flyFn }, callFn },
  { id: 24, name: "No Pet Fn guy", pet: { name: "Tommy" }, callFn },
  { id: 25, name: "No Call Fn guy", pet: { name: "Tommy 2nd" } },
];

customers?.forEach((cust, i) => {
  console.log("Cust :", 1 + i);
  console.log(cust, cust?.pet);
  console.log("just pet");
  console.log(cust?.pet);
  //cust id concat with name and pet's name
  console.log(cust?.id + " pet fly :" + cust?.pet?.flyFn?.());
  console.log(" call fn " + (1 + i) + " :");
  cust?.callFn?.();
});

console.log("\n\n\n array direct  \n");

console.log(customers[0]?.id + " pet fly :" + customers[0]?.pet?.flyFn?.());

console.log(customers[1]?.id + " pet fly :" + customers[1]?.pet?.flyFn?.());

console.log(customers[2]?.id + " pet fly :" + customers[2]?.pet?.flyFn?.());

console.log(customers[3]?.id + " pet fly :" + customers[3]?.pet?.flyFn?.());
