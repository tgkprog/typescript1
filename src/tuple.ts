enum Gender {
  MALE = "m",
  FEMALE = "f",
  TRANS1 = "t1",
}

class DateDto {
  year: number;
  constructor(y: number, m: number, d: number) {
    console.log(`sqrItD ${m} ${d}:`);
    this.year = y;
  }
}
let nameDobGenderTuple: [string, DateDto, Gender] = [
  "Tushar K",
  new DateDto(1990, 3, 20),
  Gender.MALE,
];

console.log(
  "nameDobGenderTuple ",
  nameDobGenderTuple,
  " nameDobGenderTuple[0]",
  nameDobGenderTuple[0]
);

console.log(
  "nameDobGenderTuple 2",
  nameDobGenderTuple[2],
  "true 1 :",
  nameDobGenderTuple[2] == "m",
  "true 2 :",
  nameDobGenderTuple[2] === "m"
);

console.log("true 2 :", nameDobGenderTuple[2] === "m");
