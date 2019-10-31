const express = require('express')
const app = express()
const port = 3000
const router = require('./filmeRoute')

//rotas
app.use(router)

//Servidor
app.listen(port, (err) => {
    if (err) {
        console.log('ERRO!')
    } else {
        console.log(`App rodando na porta ${port}`)
    }
})
