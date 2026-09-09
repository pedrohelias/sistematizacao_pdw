import express from "express";
import { createConsult } from "../controllers/consultControllers.js";

const router = express.Router()

router.post("/criarconsulta", createConsult);



export default router