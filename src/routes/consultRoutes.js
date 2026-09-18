import express from "express";
import { createConsult } from "../controllers/consultControllers.js";
import { authMiddleware } from "../middleware/authmiddleware.js";

const router = express.Router()


router.use(authMiddleware) //ou posso passar dentro do contexto da rota: router.post("/criarconsulta", authMiddleware, createConsult)
router.post("/criarconsulta", createConsult);



export default router