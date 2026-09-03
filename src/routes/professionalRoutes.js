import express from "express";

const router = express.Router()

router.get('/profissionais', (req, res) => {
    res.json({
        message: 'rota listar profissionais'
    })
})

export default router