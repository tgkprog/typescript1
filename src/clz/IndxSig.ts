class Transactions {
  //index signature property
  [txns: string]: string;
}

let txns = new Transactions();
txns.t1 = "ss";
//same as
txns["t1"] = "s1";
let i = 1;
let gt = 40 * 2;
txns[`t${i}`] = "s" + gt;
i++;
gt = 9309;
txns[`t${i}`] = "x" + gt;
for (let index = 1; index < 4; index++) {
  try {
    console.log(index, txns[`t${index}`]);
  } catch (error) {
    console.log("err " + error);
    //console.log("err " , error);//to print stack trace too
  }
}
console.log("Done");
