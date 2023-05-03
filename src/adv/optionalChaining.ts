function getEmp(id: number) {
  if (id < 0) return null;
  if (id < 1) return { id: id, birthday: null };
  return { id: id, birthday: new Date() };
}
let e = getEmp(2);
console.log(e?.id, e?.birthday);

let yy = e?.birthday?.getFullYear();
console.log("year only ", yy);

e = getEmp(-9);
yy = e?.birthday?.getFullYear();
console.log("year only ", yy);
console.log("nega", e?.id, e?.birthday, " yr ", yy);

function getEmpS(n: number): Array<any> | null {
  if (n < 1) return null;
  //return { id: id, birthday: new Date() };
  let r = [];
  for (let j = 0; j < n; j++) {
    let dt = new Date();
    dt.setFullYear(dt.getFullYear() - j * 2);
    r.push({ id: j, birthday: dt });
  }
  return r;
}

let e2 = getEmpS(5);
e2?.forEach((value, index) => {
  console.log("e2 ", index, value.id, value.birthday);
});
//chain
console.log(e?.birthday?.getFullYear?.());
