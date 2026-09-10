import express from "express";
import {showProfessionals, showProfessionalDisp, showProfessionalEspec, showProfessionalName} from "../controllers/professionalControllers.js"


const router = express.Router()

router.get("/profissionais", showProfessionals);
router.get("/profissionaisdisp", showProfessionalDisp)
router.get("/profissionaisspec",showProfessionalEspec)
router.get("/profissionaisname",showProfessionalName)


export default router