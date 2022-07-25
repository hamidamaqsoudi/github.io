
class Account{
    
     #accountName;
     #deposit;
     static accountinfoList = [];
    
    constructor(acName, deposit) {
        this.#accountName = acName;
        this.#deposit = deposit;
        Account.accountinfoList.push(this)
   
    }

    addtoinfo(){
        return "Account Name: " +this.#accountName + 
        " - Balance: " + this.#deposit+"\r\n";
    }



}

function a(){
    let x = document.getElementById("accountName").value;
    let y = document.getElementById("deposit").value;
    new Account(x, y)
    document.getElementById("fSet").value = Account.accountinfoList.map(a => a.addtoinfo()).join("");
}


// a = new Account("Checking",10000);
// b = new Account("Saving", 2000);
// c = new Account("Business",5000);


// console.log(b.addtoinfo());
// console.log(a.addtoinfo());


Account.accountinfoList.forEach
(account => console.log(account.addtoinfo()));




