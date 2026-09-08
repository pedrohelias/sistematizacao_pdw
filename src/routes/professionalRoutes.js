import express from "express";
import {showProfessionals} from "../controllers/professionalControllers.js"


const router = express.Router()

router.get("/profissionais", showProfessionals);

export default router