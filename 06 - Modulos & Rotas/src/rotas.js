import express from "express"
import axios from "axios"

const rotas = express.Router()

const livro = await axios.get("https://hipsum.co/api/?type=hipster-centric")

rotas.get("/", function(requisicao, resposta) {
    const pagina = livro.data
    resposta.render("inicio.pug", { texto: pagina[0] })
})

rotas.get("/pagina/:numero", function(requisicao, resposta) {
    const { numero } = requisicao.params
    const pagina = livro.data
    resposta.render("pagina.pug", { texto: pagina[numero] })  
})

export default rotas