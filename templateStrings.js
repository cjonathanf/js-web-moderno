const nome = "Rebeca"
const concatenacao = "Ola " + nome + "!"
const template = `
    Ola
    ${nome}!`
console.log(concatenacao, template)

//Expressoes
console.log(`1+1 = ${1+1}`) 

//E Possivel chamar uma funcao dentro de template string, a funcao abaixo deixa o texto em CAPSLOCK
const up = texto => texto.toUpperCase()
console.log(`ei...${up("cuidado")}`)
