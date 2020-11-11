
//Primeira parte uma expressao
const resultado = nota => nota >= 7 ? "Aprovado" : "Reprovado"

console.log(resultado(7.1))
console.log(resultado(6.7))

function NotaFinal(nota) {
    if (nota >= 7) {
        return ("Aprovado")
    } else {
        return ("Reprovado")
    }

}

console.log(NotaFinal(5))