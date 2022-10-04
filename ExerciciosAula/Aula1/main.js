console.log("Olá mundo!"); //1º Exercicio

function mostraNomeCompleto(nome, sobrenome) {
    return nome + sobrenome;
}

console.log(mostraNomeCompleto('Guilherme ', 'Santos'));

function calculaIMC(peso, altura) {
    return peso / (altura * altura)
}

console.log(calculaIMC(80, 1.60))
