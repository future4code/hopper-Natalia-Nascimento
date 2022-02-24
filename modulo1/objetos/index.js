// Exercícios de interpretação de código 

// 1  Leia o código abaixo

//const filme = {
	//nome: "Auto da Compadecida", 
	//ano: 2000, 
	//elenco: [
	//	"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
	//	"Virginia Cavendish"
	//	], 
	//transmissoesHoje: [
	//	{canal: "Telecine", horario: "21h"}, 
	//	{canal: "Canal Brasil", horario: "19h"}, 
	//	{canal: "Globo", horario: "14h"}
	//	]
//}

//console.log(filme.elenco[0])
//console.log(filme.elenco[filme.elenco.length - 1])
//console.log(filme.transmissoesHoje[2])

//  a) O que vai ser impresso no console? Matheus Nachtergaele, Virginia Cavendish,  canal: 'Globo', horario: '14h'} e Virginia Cavendish

// 2 Leia o código abaixo

//const cachorro = {
	//nome: "Juca", 
	//idade: 3, 
	//raca: "SRD"
//}

//const gato = {...cachorro, nome: "Juba"}

//const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

//console.log(cachorro)
//console.log(gato)
//console.log(tartaruga)

// a. O que vai ser impresso no console?  {nome: 'Juca', idade: 3, raca: 'SRD'}
//b) O que faz a sintaxe dos três pontos antes do nome de um objeto? Faz alteração de nomes 

// 3. Leia o código abaixo

//function minhaFuncao(objeto, propriedade) {
	//return objeto[propriedade]
//}

//const pessoa = {
  //nome: "Caio", 
  //idade: 23, 
  //backender: false
//}

//console.log(minhaFuncao(pessoa, "backender"))
//console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console? false e undefined
// b) Explique o valor impresso no console. Você sabe por que isso aconteceu? porque nao foi incluso a "altura", podedira ter incluido como nova pessoa e os ...

// EXERCICIOS ESCRITTA DE CODIGO

// 1. Resolva os passos a seguir: 

// QUESTAO A

//const pessoa = {
  //  nome: "Amanda", 
  //  apelidos: ["Amandinha", "Mandinha", "Mandi"]  // questao a

//}
//const novaPessoa = {
   // ... pessoa ,
  //  novosApelidos: ["amadona" , "mandona" , "mandao"] // questao b

//}
   
//console.log(`Eu sou ${pessoa.nome} , mas pode me chamar de ${pessoa.apelidos} , ${novaPessoa.novosApelidos}`) Questao a e b junto

// 2 Resolva os passos a seguir: 

//const pessoa = {
   // nome : "Natalia" ,
   // idade: 32 ,
   // profissao : "Assistente Administrativo"
//}

//const minhaFuncao = pessoa 
//console.log([pessoa.nome, pessoa.nome.length , pessoa.idade, pessoa.profissao, pessoa.profissao.length])

//const pessoa2 = {
   // nome : "Valdivio" ,
  //  idade: 39 ,
  //  profissao : "Suporte Tecnico"
//}

//const minhaFuncao2 = pessoa2 
//console.log([pessoa2.nome, pessoa2.nome.length , pessoa2.idade, pessoa2.profissao, pessoa2.profissao.length])



// EXERCICIO 3 

//carrinho = []

//const sacolaoDev = [

   //{nome: "Maca" , disponibilidade: true} , 
  // {nome: "banana" , disponibilidade: true} ,
  // {nome: "manga" , disponibilidade: true}

   
 //]

// function recebeFruta(fruta){
 //  carrinho.push(fruta)
// }
 

//recebeFruta(sacolaoDev)
//console.log (carrinho[0])


