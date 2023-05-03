function sqrIt(n: number): void {
  let y = n * n;
  return;
}

function sqrItB(n: number): any {
  if (n == 0) throw new Error("We dont do that to 0s!");
  return n * n;
}

function sqrItC(n?: number): any {
  if (n === undefined) {
    console.log("sqrtC no param !");
    n = 2;
  }
  if (n == 0) throw new Error("We dont do that to 0s!");
  return n * n;
}

function sqrItD(n: number = 2): void {
  let y = n * n;
  return;
}

try {
  console.log("sqrtB 0 :" + sqrItB(0));
} catch (error) {
  console.log("sqrtB 0  er " + error);
}
console.log("sqrt 2 :" + sqrIt(2));

console.log("sqrtB 3 :" + sqrItB(3));

//sqrItD;

try {
  //cant call sqrIt without any parrams
  //console.log("sqrIt no params :" + sqrIt());
  console.log(
    ` workspaceFolder ${process.env.workspaceFolder}  ${process.env.HOME} ${process.env.temp} sqrItD no params :` +
      sqrItD()
  );
  console.log("sqrItD 5 :" + sqrItD(5));
} catch (error) {
  console.log("sqrIt 0  er " + error);
}

try {
  console.log("sqrtC 2 :" + sqrItC(0));
} catch (error) {
  console.log("sqrtC 0  er " + error);
}
console.log("sqrtC no param :" + sqrItC());
