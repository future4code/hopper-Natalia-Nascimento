import express, { Request, response, Response } from "express"
import cors from "cors"
import { afazeres } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))


// EXERCICIO 1

app.get("/ping", (req, res) => {          
  res.send("Pong! 🏓")
  return res
}) 

// EXERCICIO 2 
type fazerdavida = {
 userId: string
 id: string,
 title: string,
 completed: boolean,
}

app.get('/afazeres', (req, res) => {

  const dos = afazeres.map((fazerdavida) => {
      return fazerdavida
  }).flat(1)

  res.send(dos)
});

// EXERCICIO 5

app.post("/tarefas", (req, res) => {
  const userId = req.body.userId;
  const title = req.body.title;
  const completed = req.body.completed;
  
  const tarefasdodia = {
      userId: userId,
      id: Date.now(),
      title: title,
      completed: completed
  };
  afazeres.push(tarefasdodia);

  res.send({afazeres});
});

// EXERCICIO 6 
  
app.put("/tarefas/:id", (req, res) => {
  const taskId = req.params.id

  const complemento = afazeres.filter((task) => {
      return Number(taskId) === task.id
  }).map((task) => {
      if (task.completed === true) {
          return { userId: task.userId, id: task.id, title: task.title, completed: false }
      } else if (task.completed === false) {
          return { userId: task.userId, id: task.id, title: task.title, completed: true }
      }
  })
  console.log(complemento)
  res.status(201).send(complemento);
});


// EXERCICIO 7

app.delete("/tarefas/:id", (req, res) => {
  const deletarTarefas = afazeres.filter(task =>{
    return task.id !== Number(req.params.id)
  });
   res.send(deletarTarefas)
});

// EXERCICIO 8

app.get("/tarefas/user/:userId", (req, res) => {
  const userIdTarefas = afazeres.filter(task => {
      return task.userId === Number(req.params.userId);
  });

  res.send(userIdTarefas);
});

// EXERCICIO 9

// - https://documenter.getpostman.com/view/21026477/VUqoQJGp