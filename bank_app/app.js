class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(`Account Number: ${this.accountNumber}`);
    console.log(`Owner Name: ${this.ownerName}`);
    console.log(`Balance:$ ${this.getBalance()}`);
  }
}

let obj1 = new BankAccount(101203, "kzaman", 10000);
let obj2 = new BankAccount(202203, "Ishmam", 30000);
obj1.deposit(100);
obj1.withdraw(200);
obj1.displayAccountInfo();
obj2.deposit(2000);
obj2.withdraw(20000);
obj2.displayAccountInfo();
