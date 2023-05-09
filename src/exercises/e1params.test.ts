/* export const addTwoNumbers = (params) => {
    return params.first + params.second;
  };
*/
import { it, expect } from "vitest";
export const addTwoNumbers = (params: { first: number; second: number }) => {
  return params.first + params.second;
};

let ja: { hi: string; bye: number };
ja = { hi: "za", bye: 4 };
console.log(ja);

interface Greet {
  hi: string;
  bye: number;
}

it("Add to nos", () => {
  expect(addTwoNumbers({ first: 4, second: 5 })).toEqual(9);

  expect(addTwoNumbers({ first: 4, second: -5 })).toEqual(-1);

  expect(addTwoNumbers({ first: 8, second: -5 })).toEqual(3); //wrong to check
});
//let ja2: object extends Greet;
//ja2 = { j: {}, hi: "za", bye: 4 };
//console.log(ja2);
