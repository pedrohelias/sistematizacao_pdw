import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

const professionals = [
    {
        name: "Daniel Moura",
        spec: "Geriatria"
    },
    {
        name: "Soraia Abrão",
        spec: "Pediatria"
    },
    {
        name: "Marcos Eduardo",
        spec: "Clínico Geral"
    }
];

const main = async () => {
    console.log("Adicionando médicos")

    for (const medico of professionals) {

        const professional = await prisma.professional.create({
            data: medico
        })

        console.log(`Criado registro médico de: ${medico.name}`)

        await prisma.availability.createMany({
            data: [
                {
                    professional_id: professional.id,
                    day: "Segunda",
                    start: "08:00",
                    end: "12:00"
                },
                {
                    professional_id: professional.id,
                    day: "Quinta",
                    start: "13:00",
                    end: "17:00"
                },
                {
                    professional_id: professional.id,
                    day: "Quarta",
                    start: "08:00",
                    end: "12:00"
                },
                {
                    professional_id: professional.id,
                    day: "Terça",
                    start: "08:00",
                    end: "12:00"
                },
                {
                    professional_id: professional.id,
                    day: "Segunda",
                    start: "14:00",
                    end: "18:00"
                }
            ]
        })

        console.log(`Disponibilidades criadas para: ${medico.name}`)
    }
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})