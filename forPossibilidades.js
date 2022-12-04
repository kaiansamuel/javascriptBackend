//Percorrendo array do fim ao início
const numeros = [100, 200, 300, 400, 500, 600]

/* for(let i = numeros.length - 1; i >= 0; i--){
  console.log(numeros[i])
} */

//Decremento de 2 em 2
/* for(let i = numeros.length -1; i >= 0; i -=2){
  console.log(numeros[i])
} */

//numeros > 300
/* for(let i = numeros.length - 1; numeros[i] >= 300; i -=2){
  console.log(numeros[i])
} */

//numeros pares
const numerosPares = []
for(let i = 0; i <= 100; i += 2){
  numerosPares.push(i)
}
console.log(numerosPares)