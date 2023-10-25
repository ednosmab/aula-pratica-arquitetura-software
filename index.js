const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(express.json())

app.get("/", async (req, res) =>{
    await res.json({
        message: "Olá"
    })
})

app.get("/produtos", async (req, res) =>{
    await res.json([{name: "TV"},{name: "Microondas"},{name: "Computador"}])
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () =>{
    console.log("Estou rodando na porta: " + PORT)
})