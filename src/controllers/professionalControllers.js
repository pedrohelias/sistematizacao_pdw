import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const showProfessionals = async (req, res) => {
    try{
        const professionals = await prisma.professional.findMany()
        res.json(professionals)
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: "Erro ao buscar profissionais"
        })
    }
}

const showProfessionalDisp = async (req, res) => {
    try{
        const professionals = await prisma.professional.findMany({
            include:{
                availabilities: true
            }
        })
        res.json(professionals)
    }catch(err){
        console.log(err)
        res.status(500).json({
            error: "Erro ao buscar profissionais"
        })
    }
}


export { showProfessionals, showProfessionalDisp}