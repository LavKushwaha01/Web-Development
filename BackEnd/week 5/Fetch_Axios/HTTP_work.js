const express = require("express");

const app = express();

// app.get("/add", function(req,res){
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({

//         answe: a+b
//     })
// });

// for calling url like http://localhost:3000/add/5/6 this code is used 

app.get("/add/:firstArg/:secondArg", function(req,res){
    const a = parseInt(req.params.firstArg);
    const b = parseInt(req.params.secondArg);

    res.json({

        answer: a+b
    })
});


app.get("/substract/:firstArg/:secondArg", function(req,res){
    const a = parseInt(req.params.firstArg);
    const b = parseInt(req.params.secondArg);

    res.json({

        answer: a-b
    })
});

app.get("/multiply/:firstArg/:secondArg", function(req,res){
    const a = parseInt(req.params.firstArg);
    const b = parseInt(req.params.secondArg);

    res.json({

        answer: a*b
    })
});

app.get("/divide/:firstArg/:secondArg", function(req,res){
    const a = parseInt(req.params.firstArg);
    const b = parseInt(req.params.secondArg);

    res.json({

        answer: a/b
    })
});




app.listen(3000);