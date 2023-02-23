// IMPORTAR O EXPRESS
import express from "express"

// INSTANCIAR O SERVIDOR
const servidor = express()

// ROTA GET / INÍCIO
servidor.get("/", function(requisicao, resposta) {
    console.log("FOI ACESSADO A ROTA /")
    resposta.send("<h1> Bem vindo ao servidor! </h1>")
})

// ROTA GET /sobre 
servidor.get("/sobre", function(requisicao, resposta) {
    console.log("FOI ACESSADO A ROTA /sobre")
    resposta.send("<h1> Eu sou o Pedro! </h1>")
})

// ROTA GET /contato
servidor.get("/contato", function(requisicao, resposta) {
    console.log("FOI ACESSADO A ROTA /contato")
    resposta.send("<h1> Meu email é contato@pedro.com! </h1>")
})

// ACIONANDO O SERVIDOR NA PORTA 3000
servidor.listen(3000, function() {
    // ACESSAR O http://localhost:3000/
    console.log("SERVIDOR EM FUNCIONAMENTO!")
})