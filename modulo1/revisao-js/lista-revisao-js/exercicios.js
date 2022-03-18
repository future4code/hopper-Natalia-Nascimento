// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
  
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
    return array.sort(function (a,b){
        return a - b
    })
  }
  console.log(retornaArrayOrdenado(array))


// EXERCÍCIO 04
let array = [1, 2, 3, 4, 5, 6]
function retornaNumerosPares(array) {
    return array.filter( function (apenasPares) {
        return apenasPares % 2 === 0
    })
}
console.log(retornaNumerosPares)

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
    return array.filter((num => num % 2 === 0)).map((num => num ** 2 ))

  }
   



// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    const maior = Math.max(...array)
    return maior 
   }

retornaMaiorNumero([1, 5, 3, 7, 4, 2])
  
//}//


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2){
        maior = num1
        const objeto1 = {
            maiorNumero: maior,
            maiorDivisivelPorMenor: (maior % num2) === 0,
            diferenca: maior - num2
        }
        return objeto1
    }else {
        maior = num2
        const objeto2 = {
            maiorNumero: maior,
            maiorDivisivelPorMenor: (maior % num1) === 0,
            diferenca: maior - num1
        }
        return objeto2
    } 
    
}


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = []
    for (let i = 0; i <= ((n*2) - 1); i++){
        array[i] = i
    }
    let ja = 0
    let novoArray = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            novoArray[ja] = array[i] 
            ja++
            }   
        }
        return novoArray
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoA === ladoC) {
        return "Equilátero"  

    }else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"

        }else {
            return "Escaleno"
            }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let max = 0
    let max2 = 0
    let max3 = 0
    let min = array[0]
    let min2 
    let novoArray = []
    for (let i = 0; i <= array.length - 1; i++){
        if ( array[i] < min){
          min = array[i]
        }
    }
    max = min
    for (let i = 0; i <= array.length - 1; i++){
        if(array[i] > max){
            max = array[i]
        }
    }    
    max2 = min
    for (let i = 0; i <= array.length - 1; i++){
        if((array[i] > min) && (array[i] != max)){
          min = array[i]
          max2 = min
        }
    
    }
    min = max
  for (let i = 0; i <= array.length - 1; i++){
      if (array[i] < min){
        min = array[i]
      }
  }
  min2 = max
  for (let i = 0; i <= array.length - 1; i++){
      if ((array[i] < min2) && (array[i] != min)){
        min2 = array[i]
      }
  }    
    novoArray[0] = max2
    novoArray[1] = min2
    return novoArray
    

}
  

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let novoArray = []
    for(i = 0; i <= filme.atores.length - 1; i++){
        novoArray[i] = " "+filme.atores[i]
    }
   let chamadafilme = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${novoArray}.`
   
   return chamadafilme
}  


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const pessoaAnonimapessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return pessoaAnonimapessoa
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const pessoasAutorizadaspessoas = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
    })
    return pessoasAutorizadaspessoas
    
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    function PessoasSemPermissao (pessoas) {
        return (pessoas.altura < 1.50 || pessoas.idade < 15 || pessoas.idade > 60)
          }
    function imprimePessoas (pessoas) {
        return pessoas
          }
    
    const pessoasAutorizadas = pessoas.filter(PessoasSemPermissao).map(imprimePessoas)
    return pessoasAutorizadas
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((conta) => {
        let totalDeCompras = 0
  
        conta.compras.forEach((compra) => {
          totalDeCompras = totalDeCompras + compra
        })
  
      conta.compras = []
      conta.saldoTotal = conta.saldoTotal - totalDeCompras
      })
  
    return contas
  }



// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    function consultas1(a,b) {
        if (a.nome < b.nome)
           return -1;
        if (a.nome > b.nome)
          return 1;
        return 0;
      }
      consultas.sort(consultas1)
      return consultas
    }
  


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    function alterarData (a, b){
        return new Date(a.dataDaConsulta.split("/").reverse()).getTime() - new Date(b.dataDaConsulta.split("/").reverse()).getTime()
    }        
    consultas.sort(alterarData)
    return consultas
   
}