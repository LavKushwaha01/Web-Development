
//Assignment 1 -> 
//Create a midleware that count's the number of request coming to the server 
let requestCount=0;
app.use(function(res,req,next){
    requestCount=requestCount+1; 
    next(); 
}); 

//Assignment 2-> 
//How to protect your server from DOS(Denial of Service)
//Statments say that make sure to block the user if it 
//sents more than 5 request per second 
//In real world IP are used to track and protect the server for DOS attacks 

let NumberOfRequestForUser={}
setInterval({
    NumberOfRequestForUser:{}
},1000)

app.use(function(req,res,next){
    const userId=req.headers["user-id"]; 
    if(NumberOfRequestForUser["user-id"]){
        NumberOfRequestForUser["user-id"]=NumberOfRequestForUser["user-id"] +1; 
        if(NumberOfRequestForUser>5){
            res.status(404).send("No entry"); 
        }else{
            res.json({
                msg:"Use it Baby girl and baby boys"
            })
            next(); 
        }
    }
    else{
        NumberOfRequestForUser["user-id"]=1;
        next(); 
    }
})

//what is syntax of the try and catch 
try { //try is not a function not use paranthethis 
    // Code that may throw an error
} catch (err) {
    // Code to handle the error
    console.error(err); // Example: Logging the error
}


// Assignment-3-> 
//how to write a erro handling midleware 
//as the standar one is 500 
//write a midleware to convert the status code to the 404 
//making sure the end user don't see the errors
app.user(function(err,req,res,next){
    res.status(404).send({})
    errorCount=errorCount+1; 
})
module.exports=app; 


