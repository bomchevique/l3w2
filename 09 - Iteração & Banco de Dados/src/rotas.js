import express from "express"
import { modelo } from "./database/modelo.js"

const rotas = express.Router()

rotas.get("/", function(requisicao, resposta) {

    modelo.find({})

        .then(function(resultados) {

            console.log(resultados)

            if (resultados)
                resposta.render("inicio.pug", { resultados })

        })

        .catch(function(erro) {
            console.erro(erro)
        })

})

export default rotas