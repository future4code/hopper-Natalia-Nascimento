/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
//** MONTANDO O JOGO * */

console.log("Bem vinda(o) ao jogo BlackJack!!")
let jogo21 = confirm("Gostaria de uma nova rodada ?")

if (jogo21){
      console.log("Partida iniciada!")
}else{
      console.log("Fim de jogo!")
}
console.log(jogo21)


if (jogo21){
      let carta0Usuario = comprarCarta();
      let carta1Usuario = comprarCarta();
      let carta0Pc = comprarCarta();
      let carta1Pc = comprarCarta();

      let pontuacaoUsuario = carta0Usuario.valor + carta1Usuario.valor
      let pontuacaoPc = carta0Pc.valor + carta1Pc.valor

      console.log(`Usuário - cartas: ${carta0Usuario.texto} ${carta1Usuario.texto} - ${pontuacaoUsuario}`)
      console.log(`Computador - cartas: ${carta0Pc.texto} ${carta1Pc.texto} - ${pontuacaoPc}`)

      if (pontuacaoUsuario != pontuacaoPc) {
            console.log("Vencedor!")
        } else if (pontuacaoPc > pontuacaoUsuario) {
            console.log("Não foi dessa vez!!")
        } else if (pontuacaoUsuario === pontuacaoPc) {
            console.log("Empatou!!")
        }
    
    } else {
        console.log("O jogo acabou")
    }



