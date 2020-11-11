const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1["desconto legal"] = 0.40 // evitar atributos com espaco
console.log(prod1)

const prod2 = {

    nome: "Camisa Polo",
    preco: 79.90,
    categoria: {
        tipo: "roupa",
        tamanhos: {
            idTipoTamanho: "P",
        }
    }
}

console.log(prod2)

//Exemplo Json

'{"nome": "Camisa Polo", "preco": 79.90}'