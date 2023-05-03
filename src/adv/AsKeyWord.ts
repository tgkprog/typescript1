//unknown
type Nod = { value: string; len: number };

class Doc {
  idx: number = 0;
  getElementById = (s: string): Nod => {
    this.idx += 2;
    return { value: s + "-" + this.idx + "1", len: 5 };
  };
}

function may1(d: unknown): unknown {
  if (typeof d === "string") {
    return d.toLowerCase();
  } else if (d instanceof Doc) {
    let d2 = d.getElementById("ss") as Nod;
    console.log(d2?.value);
    return d2;
  }
}

let d3 = new Doc();

let g = d3?.getElementById?.("ss") as Nod;

console.log(g?.value);

let g2 = may1(d3) as Nod;
console.log(g2?.value);

let g3 = may1("s") as string;
console.log(g3?.toUpperCase());

let g4 = may1("s") as Nod;
console.log("g4 ", g4, g4?.value);
