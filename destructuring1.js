// Novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco: {
        logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

// E possivel tirar algo do objeto e criar uma variavel para a mesma
const { nome: n, idade: i } = pessoa
console.log(n, i)

//Caso nao existir nada no objeto
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)