import * as TaxHelper from "./taxHelper";
//import * as TaxHelper from "./tazHelper.js";
import * as lotsNonCheck from "./lotOfNonCheckableCode";

let person = new TaxHelper.Person();
person.setIncome(98500);
console.log(person, "calcTax", TaxHelper.calcTax(person));
