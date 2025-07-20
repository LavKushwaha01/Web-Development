import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        name: "harkirat@gmail.com",
        password: "23234"
    })
}

export function POST(){
    return NextResponse.json({
        name: "harkirat@gmail.com",
        password: "23234"
    })
}

export function PUT(){
    return NextResponse.json({
        name: "harkirat@getMaxListeners.com",
        password: "23234"
    })
}

