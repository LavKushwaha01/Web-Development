import { PrismaClient } from '@prisma/client';

import express from 'express';


const app = express();

app.get("/users" , async (req,res) =>{
    const users = await client.user.findMany({
        where: {
        id:1
        },
        include: {
        todos:true
        }
    })
  
 res.json({
    users
 })

})

app.listen(3000);

const client = new PrismaClient();

async function insertUser(
  username: string,
  password: string,
  city: string,
  age: any
) {
  try {
    const res = await client.user.create({
      data: {
       username,
       password,
       city,
       age,
      }
    });
    console.log(res);
  } catch (error) {
    console.error("Insert error:", error);
  }
}

//insertUser("admin1", "123456", "harkirat", 90);


async function deleteuser() {
    await client.user.delete({
        where: {
        id:2
        }
    })
    
}

// deleteuser()

async function updateuser() {
    await client.user.update({
        where: {
        id:1
        },

        data: {
          city: "allahabad"
        }
    })
    
}


// updateuser()

async function usertodos() {
   const user = await client.user.findFirst({
        where: {
        id:1
        },
        include: {
        todos:true
        }
    })
  
 
 console.log(user)
    
}

    // usertodos()
