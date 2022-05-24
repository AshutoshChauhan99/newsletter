const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const res = require("express/lib/response");






const app = express();

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req, res){
    res.sendFile(__dirname + "/signup.html")
});

app.post("/", function(req,res){
var firstName = req.body.fName;
var lasttName = req.body.lName;
var email = req.body.email;
console.log(firstName, lasttName, email);

});


app.listen(8080, function(){

    console.log("Server is running on port 8080")

});