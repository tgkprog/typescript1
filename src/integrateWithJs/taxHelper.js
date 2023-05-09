export class Person {
  id = 0;
  name = "";
  income = 0;

  /**
   * @param {number} inc
   */
  setIncome(inc) {
    this.income = inc;
  }
  getIncome() {
    return this.income;
  }
}

/**
 * @param {{ getIncome: () => number; }} person
 * @returns number, tax for that year
 */
export function calcTax(person) {
  return 0.15 * person.getIncome();
}
