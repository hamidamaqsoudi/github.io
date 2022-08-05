const express = require ("express");
const bodyParser = require("body-parser");

const app= express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/",function(req,res){
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var op = req.body.operation;
    var result =0;
    switch(op){
        case 'subtract':
            result=num1-num2;
            break;
        case 'add':
            result=num1+num2;
            break;
        case 'multiply':
            result=num1*num2;
            break;
        case 'devide':
            result=num1/num2;
            break;
        default: 
            result="Something is wrong";
    }
    

    res.send("result is: "+result);
});
app.listen(3000, function(){
    console.log("The port 3000 is runnung");
});