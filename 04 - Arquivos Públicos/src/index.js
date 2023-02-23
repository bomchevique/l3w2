// IMPORTANDO O EXPRESS
import express from "express"

// INSTANCIANDO O SERVIDOR
const servidor = express()

// CONFIGURANDO O PUG NO SERVIDOR
servidor.set("view engine", "pug")
servidor.set("views", "./src/views")

// CONFIGURANDO OS ARQUIVOS PUBLICOS
servidor.use(express.static("./src/public"))

// ROTA GET / INICIO
servidor.get("/", function(requisicao, resposta) {
    // RENDERIZANDO O ARQUIVO inicio.pug
    resposta.render("inicio.pug")
})

// ACIONAMENTO DO SERVIDOR NA PORTA 3000
servidor.listen(3000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
})