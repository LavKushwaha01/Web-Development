import { Client, QueryResult } from "pg"
import express from "express";
import { log } from "node:console";
import { z } from "zod";

const app = express();
app.use(express.json());

// const pgClient = new Client({
//   user: "neondb_owner",
//   password:"npg_lg4q0nTZphtQ",
//   port: 432,
//   host: "p-ancient-wildflower-ab8v7qvr-pooler.eu-west-2.aws.neon.tech",
//   database:"neondb",
//   ssl: true
// });

const pgClient = new Client("postgresql://neondb_owner:npg_lg4q0nTZphtQ@ep-ancient-wildflower-ab8v7qvr-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
 pgClient.connect();


// async function main() {
// //  const response = await pgClient.query("SELECT * FROM users");
//   const response = await pgClient.query("UPDATE users SET username='lavkushwaha' WHERE Id=2")

//  console.log(response.rows);
// }

// main()

// if we put directly username , password and email in query without array then query injection can destroy our data

app.post("/signup" , async (req,res) =>{
   const username = req.body.username;
   const password = req.body.password;
   const email = req.body.email;

   const city = req.body.city;
   const country = req.body.country;
   const street = req.body.street;
   const pincode = req.body.pincode;


  try{


   const insertQuery = 'INSERT INTO users (username , email, password ) VALUES ($1, $2, $3) RETURNING id;'
    const addressInsertQuery = 'INSERT INTO addresses (city, country,  street , pincode, user_id) VALUES ($1, $2, $3 , $4 , $5);'

  await  pgClient.query('BEGIN');
    
   const response = await pgClient.query(insertQuery, [username, email , password]);

   const userId = response.rows[0].id;

    const addressInsertQueryresponse = await pgClient.query(addressInsertQuery, [city, country,  street, pincode, userId])

   await pgClient.query('COMMIT');

   res.json({
    message:"you have signed up"
   })
  }
   catch(e){
       console.log(e);
       res.json({
        message: "signup failed"
       })
       
   }
})

app.get("/metadata" , async (req, res) => {
    
    const id = req.query.id;
    // use LEFT RIGHT INNER AND FULL ACCORDING TO NEED
    const query = 'SELECT users.id , users.username, users.email, addresses.city, addresses.street, addresses.pincode, addresses.country FROM users  JOIN addresses On users.id= addresses.user_id WHERE users.id = $1 ';
    const response = await pgClient.query(query, [id]);
    res.json({
        response:response.rows
    })
})

app.listen(3000);

