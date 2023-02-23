// INSTALAÇÃO DO NODE
// INSTALAÇÃO DO VSCODE

// Variáveis
var numero = 1
let letra = "A"

// Constante
const nome = "Pedro"
const dataNascimento = new Date("2000-11-08")

// Formato Numérico
var numeroInteiro = 1
var numeroDecimal = 3.14159

// Formato de Texto
var palavra = "Água"
var frase = "Eu bebo água!"

// Formato Booleano
var sono = false
var fome = true

// Formato de Lista (Array)
var mercado = [ "Pneu", "Macarrão", "Sapato" ]

// Formato de Objeto (Object)
var pessoa = {
    nome: "Pedro",
    idade: 22
}

// Imprimir no Console
console.log("Apareci no Console!")

// Estrutura de Decisão
if (200 > 20) {
    console.log("200 é maior do que 20!")
}
else {
    console.log("200 é menor do que 20!")
}

// Estrutura de Repetição
for (var contador = 1; contador <= 10; contador++) {
    console.log(contador)
}

// Estrutura de Função
function Somar(valor1, valor2) {
    const resultado = valor1 + valor2
    console.log(resultado)
}

function NomeCompleto(nome, sobrenome) {
    const resultado = nome + " " + sobrenome
    console.log(resultado)
}