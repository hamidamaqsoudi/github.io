
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

Account.accountinfoList.forEach
(account => console.log(account.addtoinfo()));

function a(){
    let x = document.getElementById("accountName").value;
    let y = document.getElementById("deposit").value;
    new Account(x, y);
    document.getElementById("fSet").value = 
    Account.accountinfoList.map(a => a.addtoinfo()).join("");
}









