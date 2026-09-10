-- CreateEnum
CREATE TYPE "WeekDay" AS ENUM ('Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo');

-- CreateTable
CREATE TABLE "availability" (
    "id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "day" "WeekDay" NOT NULL,
    "start" TEXT NOT NULL,
    "end" TEXT NOT NULL,

    CONSTRAINT "availability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "availability" ADD CONSTRAINT "availability_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "Professional"("id") ON DELETE CASCADE ON UPDATE CASCADE;
