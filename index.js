const express = require('express')

const app = express()
app.use(express.json())

app.get("/", async (req, res) =>{
    await res.json({
        message: "Olá"
    })
})

app.get("/produtos", async (req, res) =>{
    await res.json([{nome: "TV"},{nome: "Microondas"},{nome: "Computador"}])
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () =>{
    console.log("Estou rodando na porta: " + PORT)
})