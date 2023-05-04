module c1 {
  class Account {
    readonly id: number;
    bal: number; //private
    owner: string;
    nickname?: string;
    constructor(id: number, bal: number, owner: string) {
      this.id = id;
      this.bal = bal;
      this.owner = owner;
    }

    deposit(amt: number): number {
      if (amt < 1) {
        throw new Error("Invalid deposit amt :" + amt);
      }
      this.bal += amt;
      return this.bal;
    }

    withdraw(amt: number): number {
      if (amt < 1) {
        throw new Error("Invalid withdraw value :" + amt);
      }
      if (this.bal < amt) {
        throw new Error(
          `Invalid withdraw amt :${amt}, more than bal : ${this.bal}`
        );
      }
      this.bal -= amt;
      return this.bal;
    }
  }

  let a1: Account = new Account(1, 99999999, "tushar");
  let a2: Account = new Account(2, 9999999, "radha");
  a1.deposit(63);
  a1.bal = 0; //oops OOPS ;)
  try {
    //a1.deposit(-33);
  } catch (error) {
    console.log("\n Oops" + error + "\n\n", error);
  }
  console.log(
    "a1 instanceof ac ",
    a1 instanceof Account,
    "; typeof :",
    typeof a1
  );
}
