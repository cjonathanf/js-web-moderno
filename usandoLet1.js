var numero = 1
{
    //Quando voce define uma variavel com let e executa ele da preferencia pro escopo menor para buscar a variavel
    let numero = 2
    console.log("dentro", numero)

}

console.log("Fora", numero)