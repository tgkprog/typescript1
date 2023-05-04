module c2 {
  class Account2 {
    private _nickname: string = "";

    //constructor with parameter properties.
    //nickname is optional so decalred on top still
    constructor(
      private readonly id: number,
      private _bal: number,
      protected owner: string
    ) {
      this.id = id;
      this._bal = _bal;
      this.owner = owner;
    }

    get balance() {
      return this._bal;
    }

    get nickname() {
      return this._nickname;
    }

    set nickname(nick: string) {
      this._nickname = nick;
    }

    deposit(amt: number): number {
      if (amt < 1) {
        throw new Error("Invalid deposit amt :" + amt);
      }
      this._bal += amt;
      return this._bal;
    }

    withdraw(amt: number): number {
      if (amt < 1) {
        throw new Error("Invalid withdraw value :" + amt);
      }
      if (this._bal < amt) {
        throw new Error(
          `Invalid withdraw amt :${amt}, more than _bal : ${this._bal}`
        );
      }
      this._bal -= amt;
      return this._bal;
    }
  }

  let a1: Account2 = new Account2(1, 99999999, "tushar");
  let a2: Account2 = new Account2(2, 9999999, "radha");
  a1.deposit(63);
  try {
    //a1.deposit(-33);
  } catch (error) {
    console.log("\n Oops" + error + "\n\n", error);
  }
  console.log(
    "a1 instanceof ac ",
    a1 instanceof Account2,
    "; typeof :",
    typeof a1,
    "balnc :" + a1.balance
  );
}
