// console.log("hj");
// const a1 = ["Hello"];
// const a2 =["My World"];
// const myarr = ["Mrs","Shirin","Jamila"];
// const myarr2 = ["Asad","Samad","Ali"] ;
// const myarr3 =["aaa","bbb"];
// const myarr5 = ["First","Second"];
// myarr [1] = "Shamsi";
// myarr.push("Fatime");
// myarr.push("Mansoura");
// myarr.sort();
// let suffix = myarr[0];
// let lastelement = myarr[myarr.length-1];
// const date = Date.now();
// let type = Array.isArray(date);

// let mystring = myarr.toString();
// let mystring2 = myarr.join('<-->');
// let remove = myarr.pop();
// myarr.push("Narges" , "Marzia J",...myarr2, ...myarr3);

// myarr.shift("Mrs" , ...myarr3);
// myarr.unshift("Before first" , "Before Second" ,...myarr5);






// const person = {firsname:"Hamida", lastname: "Maqsoudi",age:29};

// const arr1 = [12];
// const arr2 = [31];
// const arr3 = [9,7];
 
// const result = [...arr1,...arr2,...arr3];
// let newarr = a1.concat(a2,myarr);

// const fruits = ["Mango","Banana","Orange","Apple","Kiwi"];
// fruits.splice(0,2,...["Straw Berry","Gava","Grape Fruit"]);


// console.log(fruits);
// console.log(suffix + ". "+ "Shamsi");
// console.log(person.firsname +"'s age is: " + person.age);
// console.log(myarr);
// console.log(result);
// console.log("Current Date is: " + date);
// console.log(myarr);
// console.log(lastelement);
// console.log(type);
// console.log(mystring);
// console.log(mystring2);
// console.log(remove);
// console.log(newarr);

















// var myarr = [];

// for(let i =0 ; i<4 ; i++){
//     myarr[i] = (i) => {
//         return i * 3
//     }
// }


// console.log(myarr);


// let family = ["Fatima","Khadim","Asad","Samad","Shamsi","Jamila","Hamida"];
// let sum = 0; 
// for(let i = 0; i<family.length; i++){
//     sum ++;
// }

// console.log("Members in the family is: " + sum);



class invoice{
    constructor(subTotal,taxRate){
        this.subTotal = subTotal;
        this.taxRate = taxRate;
    }
    getTotal(){
        const salesTax = this.subTotal*this.taxRate;
        return salesTax+this.subTotal;
    }
}

 a = new invoice(1000,0.07);
 const result = a.getTotal();
 console.log(result);


 class person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){
        return this.firstName + " " + this.lastName;
    }

 }

 p1 = new person("Ali" , "Jafari");
 const fullName = p1.getFullName();
console.log(fullName);




class Employee extends person{
    constructor(firstName,lastName,hireDate){
        super(firstName,lastName);
        this.hireDate = hireDate;
    }

}

e1 = new Employee("Hamida", "Maqsoudi", new Date("1/1/2022"));
console.log(e1.firstName + " " + e1.hireDate.toDateString());
console.log(e1.getFullName());


const myResult = function(a,b){
    return a*b;
}

function apply(a,b,myResult){
    return myResult(a,b);
}

console.log(apply(80,80,myResult));


function getAlert(str){
    return function() { alert(str);}
}

let res = getAlert("Hamida Woke Up!")


// res();


function findMax(){
    var max = -Infinity;
    for(let i=0; i<arguments.length; i++){
        if(arguments[i] > max)
        {
            max = arguments[i];
        }
    }
    return max;
}


let x = findMax(12,9000,345,7,1);
console.log(x);


var subtract = (a,b) => a - b;
var output = subtract(80,20);
console.log("Subtracting result is: " + output);


function sum (x,y, ... extra){
    var total = x+y;
    if(extra.length>0){
        for(let i=0; i<extra.length; i++){
            total+=extra[i];
        }
    }
    console.log(total);
}

sum(10,10,10,10);



