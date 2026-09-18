import express from "express"
import {login, logout} from "../controllers/authControllers.js"
import { authMiddleware } from "../middleware/authmiddleware.js"

const router = express.Router()
//router.use(authMiddleware)
router.post("/login", login)
router.post("/logout", logout)

export default router 