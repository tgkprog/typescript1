import * as TaxHelper from "./taxHelper";
//import * as TaxHelper from "./tazHelper.js";

let person = new TaxHelper.Person();
person.setIncome(98500);
console.log(person, "calcTax", TaxHelper.calcTax(person));
