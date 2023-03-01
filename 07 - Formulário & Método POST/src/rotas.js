import express from "express"

const rotas = express.Router()

rotas.get("/", function(requisicao, resposta) {
    resposta.render("inicio.pug")
})

rotas.post("/", function(requisicao, resposta) {
    const corpo = requisicao.body
    console.log(corpo)
    if (corpo.pintor == "Vincent Van Gogh")
        resposta.redirect("/venceu")
    else
        resposta.redirect("/perdeu")
})

rotas.get("/venceu", function(requisicao, resposta) {
    resposta.render("final.pug", { final: true })
})

rotas.get("/perdeu", function(requisicao, resposta) {
    resposta.render("final.pug", { final: false })
})

export default rotas