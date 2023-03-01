import express from "express"
import CryptoJS from "crypto-js"

const rotas = express.Router()

rotas.get("/", function(requisicao, resposta) {
    resposta.render("inicio.pug")
})

rotas.post("/", function(requisicao, resposta) {
    const { senha } = requisicao.body
    console.log(senha)
    const md5 = CryptoJS.MD5(senha)
    const sha1 = CryptoJS.SHA1(senha)
    const sha256 = CryptoJS.SHA256(senha)
    resposta.redirect(`/final/${ md5 }/${ sha1 }/${ sha256 }`)
})

rotas.get("/final/:md5/:sha1/:sha256", function(requisicao, resposta) {
    const { md5, sha1, sha256 } = requisicao.params
    resposta.render("final", { md5, sha1, sha256 })
})

export default rotas