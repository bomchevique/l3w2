import express from "express"
import rotas from "./rotas.js"

const servidor = express()

servidor.set("view engine", "pug")
servidor.set("views", "./src/views")

servidor.use(express.static("./src/public"))
servidor.use(rotas)

servidor.listen(3000, function() {
    console.log("SERVIDOR EM FUNCIONAMENTO!")
})