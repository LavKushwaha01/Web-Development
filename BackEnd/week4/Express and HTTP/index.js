const express = require("express")
const app = express();
const user = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}];



app.use(express.json());

app.get("/", function(req,res){
    const johnKidney = user[0].kidneys;
    const number = johnKidney.length;
    let NoOfhealthyKidney = 0;
    for(let i=0; i<number; i++){
        if(johnKidney[i].healthy){
            NoOfhealthyKidney=NoOfhealthyKidney+1;
        }
    }
    let unhealthy = number - NoOfhealthyKidney;
    res.json({
        number,
        NoOfhealthyKidney,
        unhealthy
 } )
})

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    user[0].kidneys.push({
       healthy: isHealthy
})
res.json({
    msg: "done !"
})
})


// 411
app.put("/", function(req, res) {
    for (let i = 0; i<user[0].kidneys.length; i++) {
        user[0].kidneys[i].healthy = true;
    }
    res.json({});
})

// removing all the unhealhty kidneys
app.delete("/", function(req, res) {
    if(isThereAtleastOneUnhealthyKidney()) {
        const newKidneys = [];
        for (let i = 0; i<user[0].kidneys.length; i++) {
            if (user[0].kidneys[i].healthy) {
                newKidneys.push({
                    healthy: true
                })
            }
        }
        user[0].kidneys = newKidneys;
        res.json({msg: "done"})   
    } else {
        res.status(411).json({
            msg: "You have no bad kidneys"
        });
    }
})

function isThereAtleastOneUnhealthyKidney() {
    let atleastOneUnhealthyKidney = false;
    for (let i = 0; i<user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney
}

app.listen(3000);



