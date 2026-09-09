import express from "express";
import { createPatient, showPatient } from "../controllers/patientControllers.js";

const router = express.Router()

router.post("/criarpaciente", createPatient);
router.get("/pacientes", showPatient);



export default router