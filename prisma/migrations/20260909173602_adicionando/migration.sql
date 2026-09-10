-- CreateTable
CREATE TABLE "Patient" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Patient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Consultation" (
    "id" TEXT NOT NULL,
    "professional_id" TEXT NOT NULL,
    "patient_id" TEXT NOT NULL,
    "availability_id" TEXT NOT NULL,

    CONSTRAINT "Consultation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_professional_id_fkey" FOREIGN KEY ("professional_id") REFERENCES "Professional"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "Patient"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Consultation" ADD CONSTRAINT "Consultation_availability_id_fkey" FOREIGN KEY ("availability_id") REFERENCES "availability"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
