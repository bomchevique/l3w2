import express from "express"
import { postagem } from "./database/modelo.js"
import { isValidObjectId, Types } from "mongoose"

const rotas = express.Router()

rotas.get("/", function(requisicao, resposta) {
    postagem.find()
        .then(function(resultados) {
            //console.log(resultados)
            resposta.render("inicio.pug", { postagens: resultados })
        })
        .catch(function(erro) {
            console.error(erro)
        })
})

rotas.get("/postagem/:codigo", function(requisicao, resposta) {
    const { codigo } = requisicao.params
    if (isValidObjectId(codigo)) {
        postagem.findById(new Types.ObjectId(codigo))
            .then(function(resultado) {
                //console.log(resultado)
                resposta.render("postagem.pug", { postagem: resultado })
            })
            .catch(function(erro) {
                console.error(erro.message)
            })
    }
    else {
        resposta.redirect("/")
    }
})

rotas.get("/postar", function(requisicao, resposta) {
    resposta.render("postar.pug")
})

rotas.post("/postar", function(requisicao, resposta) {
    const corpo = requisicao.body
    //console.log(corpo)
    const novaPostagem = new postagem({
        autor: corpo.autor,
        conteudo: corpo.conteudo,
        imagem: corpo.imagem,
        palmas: 0
    })
    novaPostagem.save()
        .then(function(resultado) {
            if (resultado) {
                resposta.redirect("/")
            }
        })
        .catch(function(erro) {
            console.error(erro)
        })
})

rotas.post("/palmas/:codigo", function(requisicao, resposta) {
    const { codigo } = requisicao.params
    if (isValidObjectId(codigo)) {
        postagem.findByIdAndUpdate(new Types.ObjectId(codigo), { $inc: { palmas: 1 } })
            .then(function(resultado) {
                console.log(resultado)
                if (resultado) {
                    resposta.redirect("back")
                }
            })
            .catch(function(erro) {
                console.error(erro)
            })
    }
    else {
        resposta.redirect("/")
    }
})

export default rotas