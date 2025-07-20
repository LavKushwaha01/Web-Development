
import { Imprima } from "next/font/google";
import { NextRequest, NextResponse } from "next/server";

import prismaClient from "../../../lib/db"
 


export async function POST(req: NextRequest) {
   
    // req.body?
    const data = await req.json();

    await prismaClient.user.create({
        data: {
            username: data.username,
            password: data.password
        }
    })

    console.log(data);

    return NextResponse.json({
        message: "You have been signed up"
    })
    
}