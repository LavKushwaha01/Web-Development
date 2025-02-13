const express = require("express");
 const app = express();

 function loggermiddleware(req,res,next){
     console.log("request recieved");
     next();
 }

 app.use(loggermiddleware);


app.get("/add", function(req,res){
        const a = parseInt(req.query.a);
        const b = parseInt(req.query.b);
    
        res.json({
    
            answe: a+b
        })
    });

    //modify the request 
    app.use(function(req, res, next) {
        req.name = "harkirat"
        next();
    })
    
    app.get("/sum", function(req, res) {
        console.log(req.name);
        const a = parseInt(req.query.a);
        const b = parseInt(req.query.b);
    
        res.json({
            ans: a + b
        })
    });

    // ending the request responce cycle
    app.use(function(req, res, next) {
        res.json({
            message: "You are not allowed"
        })
    })
    
    app.get("/sum", function(req, res) {
        console.log(req.name);
        const a = parseInt(req.query.a);
        const b = parseInt(req.query.b);
    
        res.json({
            ans: a + b
        })
    });

    app.listen(3000);

