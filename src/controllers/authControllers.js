import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

const prisma = new PrismaClient()

// const register = async (req, res) => {

//     try{
//         const {name, email, cpf} = req.body
//         const register = await prisma.patient.create({
//             name, email, cpf
//         })
//     }catch(err){

//     }
// }


const login = async (req, res) => {
    try{
        const {email, password} = req.body
        const patient = await prisma.patient.findUnique({
            where: {email: email}
        })

        if (!patient){
            return res.status(401).json({
                erro: "email ou senha inválidos!!"
            })
        }

       /*  return res.json({
            mensagem: "Usuario existe", patient
        }) */

        //verificação de senha

        const isPasswordValid = await bcrypt.compare(password, patient.password)

        if (!isPasswordValid){
            return res.status(401).json({
                error: "email ou senha inválidos!!"
            })
        }

        const token = generateToken(patient.id, res)

        res.json({status: "Success Login",
            patient, token})


    }catch(err){
        console.log(err)
        res.status(500).json({
            error: "Erro ao logar"
        })
    }
}

const logout = async (req, res) => {
    try{
        res.cookie("jwt", "", {
            httpOnly: true, 
            expiresIn: new Date(0),
        })
        res.status(200).json({
            status: "success",
            message: "Logged out"
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: "Erro ao logar"
        })
    }
}


export {login, logout}