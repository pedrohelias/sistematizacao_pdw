import express from "express";
import { createPatient, showPatient, showPatientConsult } from "../controllers/patientControllers.js";

const router = express.Router()

router.post("/criarpaciente", createPatient);
router.get("/pacientes", showPatient);
router.get("/consultas", showPatientConsult);




export default router