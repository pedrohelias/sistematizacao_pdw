import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const createPatient = async (req, res) => {
    try{
        const {name, cpf, email} = req.body
        const patient = await prisma.patient.create({
            data: {
                name, cpf, email
            }
        })
        res.json(patient)
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: "Erro ao criar o paciente"
        })
    }
}

const showPatient = async (req, res) => {
    try{
        const patient = await prisma.patient.findMany()
        res.json(patient)
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: "Erro ao procurar o paciente"
        })
    }
}


export {createPatient, showPatient}