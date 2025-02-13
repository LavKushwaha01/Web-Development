//Cross-Origin Resource Sharing (CORS) is a security feature implemented by web browsers that controls
//  how resources on a web server can be requested from another domain. It's a crucial mechanism
//  for managing cross-origin requests and ensuring secure interactions between different origins on the web.

// const express = require("express");
// const cors = require("cors");  
// const app = express();
// app.use(cors());  

//********
// app.use(cors(){
//     hosts: ["google.com", "random.com"] // this is another way by which we allow our backend to acces via these hosts of frontend
// })

// app.get("/sum", function(req, res) {
//     console.log(req.name);
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.listen(3000);

//You dont need cors if the frontend and backend are on the same domain

const express = require("express");
const app = express();

app.get("/sum", function(req, res) {
    console.log(req.name);
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.listen(3000);

