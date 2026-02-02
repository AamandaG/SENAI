const prompt = require("prompt-sync")();

let nota1 = Number(prompt('Nota 1: '))
let nota2 = Number(prompt('Nota 2: '))
let nota3 = Number(prompt('Nota 3: '))

const media = function(nota1, nota2, nota3){
    console.log('A média das notas é '+ (nota1+nota2+nota3/3))
}