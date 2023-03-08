import mongoose from "mongoose"

const esquema = new mongoose.Schema({
    autor: String,
    conteudo: String,
    imagem: String,
    palmas: Number
})

const postagem = mongoose.model("postagem", esquema)

export { postagem }