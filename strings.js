const escola = "Cod3r"
//Pega o caracter da posicao 4 da string
console.log(escola.charAt(4))
//Nao retorna um erro, apenas algo vazio se procurar por um caracter que nao existe
console.log(escola.charAt(5))
//Retorna o valor da tabela ASCII(Unicode)
console.log(escola.charCodeAt(2))
//Retorna onde esta o valor procurado
console.log(escola.indexOf("r"))
//Apenas retorna do valor desejado pra frente
console.log(escola.substring(0))
//Retorna do primeiro valor selecionado ate o ultimo valor selecionado
console.log(escola.substring(0,3))
//concatenacao
console.log("Escola ".concat(escola).concat("!"))
console.log("Escola "+escola+ "!")
//Substitui um valor
console.log(escola.replace(3, "e"))
//Substitui todos os valores usando expressao regular(REJEX)
console.log(escola.replace(/\d/g, "e"))
//Converte para Array
console.log("Ana, Maria, Pedro".split(","))