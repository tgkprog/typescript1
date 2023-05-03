type Qty = 90 | 100 | 200;

type WindowAmt = 1 | 100 | 1000 | 5000;

type Drag = {
  drag: (byAmt: Qty) => void;
};

type Resize = {
  resize: (byAmtX: WindowAmt, byAmtY: WindowAmt) => void;
};

type Emp = {
  age: number;
} & Resize &
  Drag;

let e1: Emp = {
  age: 10,

  drag: (byAmt: Qty) => {
    console.log(`byAmt : ${byAmt}`);
  },
  resize: (byAmtX: WindowAmt, byAmtY: WindowAmt) => {
    console.log(`byAmt : ${byAmtX}, y : ${byAmtY}`);
  },
};

console.log(e1.age);
console.log("s");
console.log("s", e1);

function f(ee: Resize) {
  console.log(ee);
}
e1.age = 90;
f(e1);
console.log("s2");
console.log("s2");
type Emp3 = {
  age: number;
};
type Emp2 =
  | {
      age: number;
    }
  | Resize
  | Drag;

let e2a: Emp2 = {
  age: 40,
  drag: (byAmt: Qty) => {
    console.log(`byAmt : ${byAmt}`);
  },
  resize: (byAmtX: WindowAmt, byAmtY: WindowAmt) => {
    console.log(`byAmt : ${byAmtX}, y : ${byAmtY}`);
  },
};

let e3: Resize & Drag & Emp3 = {
  age: 40,
  drag: (byAmt: Qty) => {
    console.log(`drag byAmt : ${byAmt}`);
  },
  resize: (byAmtX: WindowAmt, byAmtY: WindowAmt) => {
    console.log(`resize byAmt : ${byAmtX}, y : ${byAmtY}`);
  },
};
e3.drag(100);
e3.age = 3;
console.log(e3);

function kgToLb2(amt: number | string) {
  if (typeof amt === "string") return parseFloat(amt) * 2.2;
  else return amt * 2.2;
}
