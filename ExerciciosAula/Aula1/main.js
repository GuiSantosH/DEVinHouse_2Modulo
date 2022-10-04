console.log("Olá mundo!"); //1º Exercicio

function mostraNomeCompleto(nome, sobrenome) {
    return nome + sobrenome;
}

function calculaIMC(peso, altura) {
    return peso / (altura * altura)
}


function calcNotas(nota1, nota2, nota3) {
    const resultado = (nota1 + nota2 + nota3) / 3;
    if(resultado >= 7){
        console.log('Aprovado', resultado);
    } else {
        console.log('Reprovado', resultado);
    }
}


function calculaIMCResultado(peso, altura) {
    const resultado = peso / (altura * altura)

    if(resultado <= 18.5){
        console.log("Abaixo do peso!", resultado);
    } else if(resultado >= 18.6 && resultado <= 24.9) {
        console.log("Peso ideal!", resultado);
    } else if(resultado >= 25.0 && resultado <= 29.9){
        console.log("Levemente acima do peso.", resultado)
    } else if(resultado >= 30.0 && resultado <= 34.9){
        console.log("Obesidade grau I", resultado)
    } else if(resultado >= 35.0 && resultado <= 39.9){
        console.log("Obesidade severa grau II", resultado)
    } else if (resultado >= 40.0){
        console.log("Obesidade mórbida grau III", resultado)
    }
}

const estudantes = [
    {nome: 'Guilherme', nota: '8.5', highlight: false},
    {nome: 'Julia', nota: '9.5', highlight: false},
    {nome: 'Dênis', nota: '7.1', highlight: false},
    {nome: 'Thiago', nota: '7.0', highlight: false},
    {nome: 'Eduardo', nota: '5.5', highlight: false},
    {nome: 'Paulo', nota: '5.2', highlight: false}
]

function estudantesNotasFiltradas() {
    return estudantes.filter(estudante => estudante.nota >= 7)
}

function alunoDestaque() {
    return estudantes.map(estudante => 
        {
        if(estudante.nota > 9){
           estudante.highlight = true
        }
    return estudante
    })
}

console.log(mostraNomeCompleto('Guilherme ', 'Santos'));
console.log(calculaIMC(80, 1.60))
calcNotas(50,80,40);
calculaIMCResultado(65, 1.75)
console.log(estudantesNotasFiltradas())
console.log(alunoDestaque());


