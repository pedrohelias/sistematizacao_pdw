import express from "express";
import {showProfessionals, showProfessionalDisp, showProfessionalEspec} from "../controllers/professionalControllers.js"


const router = express.Router()

router.get("/profissionais", showProfessionals);
router.get("/profissionaisdisp", showProfessionalDisp)
router.get("/profissionaisspec",showProfessionalEspec )

export default router