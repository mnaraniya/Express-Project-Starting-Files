const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
    
    
});

app.post("/", function(req, res){
    
});

app.listen(port, function(){
           console.log("server running at " + port);
           });
