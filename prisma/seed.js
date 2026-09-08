import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const professionals = [
    {
        name: "Daniel Moura",
        spec: "Geriatria"
    },
    {
        name: "Soraia Abraão",
        spec: "Pediatria"
    },
    {
        name: "Marcos Eduardo",
        spec: "Clínico Geral"
    }
];

const main = async () => {
    console.log("Adicinando médicos")
    for (const medico of professionals){
        await prisma.professional.create({
            data: medico
        })
        console.log(`Criado registro médico de: ${medico.name}`)
    }
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
}).finally(async()=>{
    await prisma.$disconnect
})

