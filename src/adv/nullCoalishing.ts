let dish1: string | null = null;
const beans = "beans";
Object.defineProperty(exports, "__esModule", { value: true });

let lunch = dish1 ?? beans;

console.log("Lunch ", lunch);

dish1 = "Kadi chawal";
let dinner = dish1 ?? beans;
console.log("Dinner ", dinner);
