// IMPORTANDO O EXPRESS
import express from "express"

// INSTANCIANDO O SERVIDOR
const servidor = express()

// CONFIGURANDO O PUG
servidor.set("view engine", "pug")
servidor.set("views", "./src/views")

// ROTA GET / INICIO
servidor.get("/", function(requisicao, resposta) {
    // RENDERIZANDO O ARQUIVO inicio.pug
    resposta.render("inicio.pug")
})

// ROTA GET /sobre
servidor.get("/sobre", function(requisicao, resposta) {
    // RENDERIZANDO O ARQUIVO sobre.pug
    resposta.render("sobre.pug")
})

// ACIONANDO O SERVIDOR NA PORTA 3000
servidor.listen(3000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
})