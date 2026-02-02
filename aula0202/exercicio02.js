const prompt = require("prompt-sync")();

let n1 = Number(prompt('Digite um número: '))
let n2 = Number(prompt('Digite um número: '))
let operacao = prompt('Digite qual será a operação: ')
let resultado;

switch(operacao){
    case "soma":
    resultado = n1+n2
        break;
    case "subtracao":
        resultado = n1-n2
        break;
        case 'multiplicacao':
            resultado = n1*n2
            break;
            case 'divisao':
                resultado = n1/n2
             default:
        console.log("Operação inválida");
        return;

} console.log('O resultado é: ' + resultado)