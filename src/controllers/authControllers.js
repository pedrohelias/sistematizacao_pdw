import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const register = async (req, res) => {

    try{
        const {name, email, cpf} = req.body
        const register = await prisma.patient.create({
            name, email, cpf
        })
    }catch(err){

    }
}





export {register}