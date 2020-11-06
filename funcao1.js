//Funcao sem retorno

function imprimirSoma(a, b) {

    console.log(a + b)

}

imprimirSoma(2, 3)
//JS faz a soma do numero definido e de um numero undefined, resultando em NaN
imprimirSoma(2)
//O JS Soma os dois valores definidos na funcao A e B e ignora o restante.
imprimirSoma(2, 5, 4, 5, 6, 7, 8)

// Funcao com Retorno
// E possivel definir um valor por padrao pra um item 
function soma(a, b = 1) {

    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())