import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient()

const createPatient = async (req, res) => {
    try{
        const {name, cpf, email, password} = req.body
        const userExists = await prisma.patient.findUnique({
            where: {cpf: cpf, email: email}, 
        })

        if (userExists){
            return res.status(400).json({error: "Usuario já existe"})
        }

        //hash

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)


        //criando usuario

        const patient = await prisma.patient.create({
            data: {
                name, 
                cpf, 
                email, 
                password: hashedPassword 
            }
        })
        res.json(patient)
        console.log(patient)
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

const showPatientConsult = async (req, res) => {
    try{
        const patient = await prisma.patient.findMany({
            where: {
                name: req.query.name
            },
            select: {
                consultations: {
                    select: {
                        id: true, 
                        professional: {
                            select: {
                                name: true,
                                spec: true
                            }
                        },

                        availability: {
                            select: {
                                day:true,
                                start: true,
                                end: true
                            }
                        }

                        
                    },
                }
                
                
            }
        })
        res.json(patient)
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: "Erro ao procurar o paciente"
        })
    }
}


export {createPatient, showPatient, showPatientConsult}