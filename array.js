const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[2])
//Se tentar acessar um valor que nao existe o JS retorna que o valor nao foi definido undefined
console.log(valores[4])
//E possivel acrescentar um valor que ainda nao foi definido
valores[4] = 10
console.log(valores[4])
console.log(valores)
//Verifica a quantidade de variaveis dentro do array
console.log(valores.length)
// Adiciona novos valores no array
valores.push({id: 3}, false, null, "teste")
console.log(valores)
//Retira o ultimo valor de dentro do array
console.log(valores.pop())
//Deleta o valor de dentro do array
delete valores[0]
console.log(valores)
//Qual e o tipo do array
console.log(typeof valores)
