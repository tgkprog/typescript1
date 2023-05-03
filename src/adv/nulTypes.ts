function kgToLb(amt: number | string | null | undefined) {
  if (typeof amt === "string") return parseFloat(amt) * 2.2;
  else if (typeof amt === "number") return amt * 2.2;
  else return "na";
}

console.log("kgToLb str ", kgToLb("fd"));

console.log("kgToLb null ", kgToLb(null));
