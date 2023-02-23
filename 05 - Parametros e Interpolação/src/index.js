// IMPORTANDO O EXPRESS
import express from "express"

// INSTANCIANDO O SERVIDOR
const servidor = express()

// CONFIGURANDO O PUG
servidor.set("view engine", "pug")
servidor.set("views", "./src/views")

// CONFIGURANDO OS ARQUIVOS PUBLICOS
servidor.use(express.static("./src/public"))

// ROTA GET / INICIO
servidor.get("/", function(requisicao, resposta) {
    resposta.render("feed.pug")
})

// ROTA GET /post/:nome COM UM PARAMETRO
servidor.get("/post/:nome", function(requisicao, resposta) {
    // OBTER PARAMETRO nome
    const { nome } = requisicao.params
    // RENDERIZAR A PAGINA post.pug COM INTERPOLACAO
    resposta.render("post.pug", { nome })
})

// ROTA GET /perfil/:nome/:seguidores COM DOIS PARAMETROS
servidor.get("/perfil/:nome/:seguidores", function(requisicao, resposta) {
    // OBTER PARAMETRO nome E seguidores
    const { nome, seguidores } = requisicao.params
    // RENDERIZAR A PAGINA profile.pug COM INTERPOLACAO
    resposta.render("profile.pug", { nome, seguidores })
})

// ACIONAMENTO DO SERVIDOR NA PORTA 3000
servidor.listen(3000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
})