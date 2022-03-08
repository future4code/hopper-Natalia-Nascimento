// Exercícios de interpretação de código

// 1. O que o código abaixo está fazendo? Qual o resultado impresso no console? Resultado 10 no console

//let valor = 0
//for(let i = 0; i < 5; i++) {
 // valor += i
//}
//console.log(valor)

// 2. Leia o código abaixo:

// a) Os Numeros 19,21,23,25,27 e 30
// b) Poder ser usado index

//const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
//for (let numero of lista) {
 // if (numero > 18) {
		//console.log(numero)
	//}
//}

// 3 Aparece 4 linha e *

//const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
//let quantidadeAtual = 0
//while(quantidadeAtual < quantidadeTotal){
  //let linha = ""
  //for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
   // linha += "*"
  //}
  //console.log(linha)
  //quantidadeAtual++
//}

// EXERCICIO ESCRITA DE CODIGO 

// EXERCIO 1

// let pets = Number(prompt("Quantos animais de estimação você possui?"))
// let numberDosPets = []

// if ( pets === 0 ) {
//     console.log("Que pena!! Pode adotar um pet.");
// }else {
//     while ( pets > 0 ) {
//         numberDosPets.push(prompt("Digite os nomes de seus pets!!"));
//         pets -= 1;
//     }
// }
// console.log(numberDosPets)

// EXERCICIO 2

// QUESTAO A 

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of arrayOriginal) {
//   if (numero > 0) {
// 		console.log(numero)
// 	}
// }

// // QUESTAO B

 //const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// for (let numero of arrayOriginal) {
 
// 		console.log(numero/10)
// 	}

// QUESTAO C

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let arrayNovo = []
// for (let numero of arrayOriginal) {
//     if ( numero % 2  === 0) {
//         arrayNovo.push(numero)
//     }
// }
// console.log(arrayNovo)

// QUESTAO D

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// let arrayString = []
// for (let numero of arrayOriginal) {
//     arrayString.push(`O elemento do índex ${arrayOriginal.indexOf(numero)} é: ${numero}`)
// }
// console.log(arrayString)

// // QUESTAO E

// const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// let maiorNumero = 0; 
// for (let numero of arrayOriginal) {
//     if(numero > maiorNumero) {
//         maiorNumero = numero
//     }
// }
// let menorNumero = maiorNumero
// for(let novaVariavel = 0; novaVariavel < arrayOriginal.length - 1; novaVariavel++){
//     if(menorNumero > arrayOriginal[novaVariavel])  {
//         menorNumero = arrayOriginal[novaVariavel]
//     }
// }
// console.log(`O maior número é ${maiorNumero}, e o menor número é ${menorNumero}`)
