import express from "express";
import professionalRoutes from "./routes/professionalRoutes.js";


const app = express();

app.use("/exame", professionalRoutes)


const PORT = 5001;
const server = app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
});