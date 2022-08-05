

// EXERCICIO 2

// const numeros1 = Number(process.argv[5])
// const numeros2 = Number(process.argv[6])
// const numeros3 = Number(process.argv[7])
// const numeros4 = Number(process.argv[8])

// console.log(`Add ${numeros1 + numeros2} `)
// console.log(`Sub ${numeros2 - numeros3} `)
// console.log(`Mult ${numeros3 * numeros4} `)
// console.log(`div ${numeros4 / numeros1} `)

// EXERCICIO 3

import { tarefa } from "./exercicio3/tarefa.js"

const novaTarefa1 = process.argv[2]
const novaTarefa2 = process.argv[3]


const resultadoTarefa = tarefa.filter((tarefa) => tarefa.toLowerCase().includes(novaTarefa1.toLowerCase()))

const resultadoTarefa2 = tarefa.filter((tarefa) => tarefa.toLowerCase().includes(novaTarefa2.toLowerCase()))

console.log(resultadoTarefa , resultadoTarefa2)



