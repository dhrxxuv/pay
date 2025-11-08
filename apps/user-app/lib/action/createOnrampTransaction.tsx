"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "@repo/database"

export default async function createOnRampTransaction(amount:number, provider:string){
    const session = await getServerSession(authOptions)
    const userId = session?.user.id

    if(!userId){
        return{
            message: "Unauthenticated request"
        }
    }

    const token = Math.random().toString()
    await prisma.onRampTransaction.create({
        data:{
            userId:Number(userId),
            status:"Processing",
            startTime:new Date(),
            token:token,
            amount:amount*100,
            provider:provider
        }
    })
    return{
        message: "done"
    }
}