import express from "express";
import professionalRoutes from "./routes/professionalRoutes.js";
import patientRoutes from "./routes/patientRoutes.js"
import consultRoutes from "./routes/consultRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import {config} from "dotenv"
import { connectDB, disconnectDB } from "./config/db.js";

config()
connectDB()

const app = express();

//middlewares body parsing
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/exame", professionalRoutes)
app.use("/paciente", patientRoutes)
app.use("/consult", consultRoutes)
app.use("/auth", authRoutes)


const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});