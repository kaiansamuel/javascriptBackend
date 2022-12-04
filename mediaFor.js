const notas = [10, 6.5, 8, 7.5]

let mediaNotas = 0

for(let i = 0; i < notas.length; i++){
  mediaNotas += notas[i]
}

const media = mediaNotas / notas.length

console.log(`A média das notas é: ${media}`)