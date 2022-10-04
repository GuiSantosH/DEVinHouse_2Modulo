console.log("Olá mundo!"); //1º Exercicio

function mostraNomeCompleto(nome, sobrenome) {
    return nome + sobrenome;
}

console.log(mostraNomeCompleto('Guilherme ', 'Santos'));

function calculaIMC(peso, altura) {
    return peso / (altura * altura)
}

console.log(calculaIMC(80, 1.60))


function calcNotas(nota1, nota2, nota3) {
    const resultado = (nota1 + nota2 + nota3) / 3;
    if(resultado >= 7){
        console.log('Aprovado', resultado);
    } else {
        console.log('Reprovado', resultado);
    }
}

calcNotas(50,80,40);
