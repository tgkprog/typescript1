let song: { title: string; releaseYear: number } = {
  title: "My song",
  releaseYear: 9,
};

let prices = [100, 200, 300];

//prices[0] = '$100';

function myFunc(a: number, b: number): number {
  console.log(`sqrItD ${a} ${b}:`);
  return 1;
}

console.log(
  "song",
  song,
  "myFunc",
  myFunc(3, 4),
  "p[0]",
  prices[0],
  "p",
  prices
);
