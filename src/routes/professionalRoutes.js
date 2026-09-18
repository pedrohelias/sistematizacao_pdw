import express from "express";
import {showProfessionals, showProfessionalDisp, showProfessionalEspec, showProfessionalName} from "../controllers/professionalControllers.js"
import { authMiddleware } from "../middleware/authmiddleware.js";


const router = express.Router()
router.use(authMiddleware)

router.get("/profissionais", showProfessionals);
router.get("/profissionaisdisp", showProfessionalDisp)
router.get("/profissionaisspec",showProfessionalEspec)
router.get("/profissionaisname",showProfessionalName)


export default router