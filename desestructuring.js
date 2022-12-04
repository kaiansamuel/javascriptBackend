const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

const numeros = [...numerosPares, ...numerosImpares]

const [num1, num2, ...outrosNumeros] = [1, 2, 3, 4, 5]

//console.log(num1, num2, outrosNumeros)

const pessoa = {
  nome: 'Kaian',
  idade: 41
}

const person = {...pessoa, telefone: 99999999}

const { nome } = pessoa

function imprimeDados(dados){
  const { nome, idade} = dados
  console.log(nome, idade)
}

imprimeDados(pessoa)