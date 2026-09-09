import express from "express";
import professionalRoutes from "./routes/professionalRoutes.js";
import patientRoutes from "./routes/patientRoutes.js"
import {config} from "dotenv"
import { connectDB, disconnectDB } from "./config/db.js";

config()
connectDB()

const app = express();


app.use(express.json())
app.use("/exame", professionalRoutes)
app.use("/paciente", patientRoutes)


const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});