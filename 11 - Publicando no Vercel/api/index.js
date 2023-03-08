const express = require("express")

const servidor = express()

servidor.get("/", function(requisicao, resposta) {
    resposta.send("Olá pessoa!")
})

servidor.get("/pessoa/:nome", function(requisicao, resposta) {
    const { nome } = requisicao.params
    resposta.send(`Olá, ${nome}!`)
})

module.exports = servidor