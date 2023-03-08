import mongoose from "mongoose"

const endereco = "mongodb+srv://admin:zlcRZ3nUnX1ldoV1@web.cfvnvjt.mongodb.net/?retryWrites=true&w=majority"
const opcoes = { useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(endereco, opcoes)

    .then(function(conexao) {
        if (conexao) 
            console.log("BANCO DE DADOS FOI CONECTADO!")
    })

    .catch(function(erro) {
        console.error(erro)
    })