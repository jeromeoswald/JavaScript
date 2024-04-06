// class Person 
// {
//     constructor(name)
//     {
//         this._name = name;
//     }

//     get name()
//     {
//         return this._name;
//     }

//     set name(newName)
//     {
//         this._name = newName;
//     }
// }

// Person = new Person("Jerome Oswald");
// console.log(Person.name);

// Person.name = "JO";
// console.log(Person.name);


class BankAccount
{
    constructor(initialBalance = 0)
    {
        this._balance = initialBalance;
        this._transactionHistory = [];
    }

    get balance()
    {
        return this._balance 
    }

    set balance({amount,description})
    {
        if (description == undefined)
        {
            console.error("Transation must include a description");
            return;
        }
        this.prevBalace = this.balance
        this._balance += amount;
        this._transactionHistory.push({amount,description,_prenBalnce: this.prevBalace});

    }
    getTransactionHistory()
    {
        return this._transactionHistory.slice();
    }

}


const myAccout = new BankAccount(100);

myAccout.balance = {amount: 300,description: "DP (Deposite) - Vayalur Road ATM Canara - Jerome Oswald"};
console.log(`New Balance: ${myAccout.balance}`);

myAccout.balance = {amount: -350,description: "WD (Withdrawal) - Grocery Shopping"};
console.log(`New Balance: ${myAccout.balance}`);

myAccout.balance = {amount: 500,description: "DP - Grocery Shopping"};
console.log(`New Balance: ${myAccout.balance}`);

myAccout.balance = {amount: -50,description: "WD - Shopping"};
console.log(`New Balance: ${myAccout.balance}`);

myAccout.balance = {amount: -100,description: "WD - Grocery Shopping"};
console.log(`New Balance: ${myAccout.balance}`);

console.log(myAccout.getTransactionHistory());