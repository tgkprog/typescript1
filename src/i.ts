console.log("jjv");

class A{
  nam : string = "t";
  nm : number = 4;
}

let a = new A();
let h : string;
h = "w";
//h =5;
console.log("a :", a, "h :", h);

let {nam, nm} = a;
console.log("nam alone 1 :", nam);
a.nam = "mo";
console.log("nam alon (after changing a.nam) :", nam);
console.log("a2 :", a);

let b;

b = 4;
console.log((b = 'f'));