import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const createConsult = async (req, res) => {
    try{
        const {professional_id, patient_id, availability_id} = req.body
        const consult = await prisma.consultation.create({
            data: {
                professional_id, patient_id, availability_id
            }
        })
        res.json(consult)
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: "Erro ao criar a consulta"
        })
    }
}


export {createConsult}