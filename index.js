const express = require('express')

const app = express()

app.get("/", (req, res) =>{
    res.json({
        message: "Olá"
    })
})

const PORT = 11000

app.listen(process.env.PORT || PORT, () =>{
    console.log("Estou rodando na porta: " + PORT)
})