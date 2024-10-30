//var,let,const = variaveis
//variavel serve para guardar informaçao
let nome = "victoria";
//string e um tipo de dado textual
console.log(nome);

//array [] colchetes
//array lista e uma variavel especial onde podemos armazenar uma lista de dados


let compras = [
    "celular",
"gloss", 
"perfumes",
"pizza"
]


//no array temos um indice, vai iniciar do numero 0
//console.log(compras)//mostra toda a lista

//console.log(compras[5])//perfumes

let numeros = [1,2,3,4,5]
console.log (numeros);

// metodos de array
//forma de manipular dados

//adicionando numero 6 no array:
numeros.push(6)
//push() adiciona/empurra no final do array

//adicionando o numero 0 no inicio:
numeros.unshift(0);
//adicionar ao inicio do array
numeros.pop();
//vai remover o ultimo item do array

console.log(numeros.join("-"))
//exibe todo array separado por -