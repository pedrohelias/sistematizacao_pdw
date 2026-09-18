import express from "express";
import { createPatient, showPatient, showPatientConsult } from "../controllers/patientControllers.js";
import { authMiddleware } from "../middleware/authmiddleware.js";

const router = express.Router()

router.use(authMiddleware)

router.post("/criarpaciente", createPatient);
router.get("/pacientes", showPatient);
router.get("/consultas", showPatientConsult);




export default router