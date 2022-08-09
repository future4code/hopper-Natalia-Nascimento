import { tarefa } from "./tarefa.js"

const novaTarefa1 = process.argv[2]
const novaTarefa2 = process.argv[3]


const resultadoTarefa = tarefa.filter((tarefa) => tarefa.toLowerCase().includes(novaTarefa1.toLowerCase()))

const resultadoTarefa2 = tarefa.filter((tarefa) => tarefa.toLowerCase().includes(novaTarefa2.toLowerCase()))

console.log(resultadoTarefa , resultadoTarefa2)