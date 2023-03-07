import mongoose from "mongoose"

const esquema = new mongoose.Schema({
    marca: String,
    modelo: String,
    ram: Number,
    armazenamento: Number,
    tela: Number,
    funcionando: Boolean
})

const modelo = mongoose.model("modelo", esquema)

export { modelo }