import express from "express";
import {showProfessionals, showProfessionalDisp} from "../controllers/professionalControllers.js"


const router = express.Router()

router.get("/profissionais", showProfessionals);
router.get("/profissionaisdisp", showProfessionalDisp)

export default router