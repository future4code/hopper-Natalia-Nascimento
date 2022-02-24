// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura3, largura4) {
  // implemente sua lógica aqui
  let altura = (prompt("Qual a sua altura"))
  let largura = (prompt("Qual sua largura"))
  let area = altura*largura
  console.log(area)
  
  
}


// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
 let anoatual = Number(prompt("Qual seu ano atual?"))
 let anoNascimento = Number (prompt("Qual seu ano de nascimento?"))
 let idade = anoatual-anoNascimento
 console.log(idade)
  

}
  


// EXERCÍCIO 03
function calculaIMC(peso,altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome")
  const idade = prompt ("Qual sua idade")
  const email = prompt ("Qual seu e-mail")
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas( ) {
  // implemente sua lógica aqui
  let cor1 = prompt("Qual primeira cor preferida")
  let cor2 = prompt("Qual segunda cor preferida")
  let cor3 = prompt("Qual sua terceira cor preferida")
  array = [cor1 ,cor2 , cor3]
 
  console.log(array)
 
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

 
 


}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui //
  return custo / valorIngresso
  

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop([4] , [2])
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let primeiraPosição = array[0]
  let últimaPosição = array [array.length - 1]
  let removerPrimeiraPosição = array.shift()
  let removerÚltimaPosição = array.pop()
  let addÚltima = array.push(primeiraPosição)
  let addPrimeira = array.unshift(últimaPosição)

  return array

  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  const numeroUm = string1.toLowerCase()
  const numeroDois = string2.toLowerCase()
  return string1.toLowerCase() === string2.toLowerCase()
   
   

  
   

   
   

  

}

//console.log(checaIgualdadeDesconsiderandoCase)

 
// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}