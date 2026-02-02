function cumprimento(nome){
    console.log('Seja bem vindo!'+ nome)
}
cumprimento('Charles')

//funçao anonima
const somar = function(num1,num2){
    console.log('A soma dos números é ' + (num1+num2))
}

//somar(15,25);

const subtrair = (num1,num2) => {
    console.log('A subtração dos números é ' + (num1-num2))
}
subtrair(30,20);