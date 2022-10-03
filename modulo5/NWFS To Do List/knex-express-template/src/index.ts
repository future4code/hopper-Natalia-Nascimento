import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { ToDoList, Usuarios } from "./types"

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());



app.post("/cadastro-usuario", async (req: Request, res: Response) => {
  let errorCode = 400
  try {

    const { name, nickname, email } = req.body

    const novoCadastro: Usuarios = {
      id: Number(Date.now()), name, nickname, email
    }

    if (!name || !nickname || !email) {
      throw new Error("Cadastro incompleto!!");
    }

    await connection.raw(`
            INSERT INTO LISTAUSUARIOS (id, name, nickname, email) 
            VALUES (${novoCadastro.id}, "${novoCadastro.name}", "${novoCadastro.nickname}", "${novoCadastro.email}")
        `)

    res.status(200).send("Usuário Cadastrado!")

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
});

app.get ("/cadastro-usuario/:id", async (req: Request, res: Response)=>{
  let errorCode = 400

  try {
      const id = Number(req.params.id)
      const resposta = await connection.raw (`
       SELECT * FROM LISTAUSUARIOS
       WHERE ID = ${id}
      `)
      res.status(200).send(resposta[0])
      
  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
});

app.put("/cadastro-usuario/edit/id", async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { name, nickname, email } = req.body

    const usuarios = await connection.raw(`
      SELECT * FROM LISTAUSUARIOS
      WHERE id = ${id};
    `)

    if (usuarios[0].length === 0) {
      throw new Error("Usuário não encontrado")
    }

    if (!name) {
      throw new Error("É necessário informar o novo nome")
    }

    if (!nickname) {
      throw new Error("É necessário informar o novo apelido")
    }

    if (!email) {
      throw new Error("É necessário informar o novo email")
    }

    await connection.raw(`
    UPDATE LISTAUSUARIOS
    SET name = "${name}", nickname = "${nickname}", email = "${email}" 
    WHERE id = ${id};
  `)

    res.status(200).send("Cadastro alterado")
  } catch (error: any) {
    res.status(error).send(error.message)
}

});

app.post('/task', async(req: Request, res: Response) =>{
  let errorCode = 400
  try {
    const { title, description, limitDate, status, creatorUserId } = req.body

    if (!title || !description || !limitDate || !status || !creatorUserId) {
      throw new Error('Passe o título, a descrição, a data limite, o status e o id do usuário')
}

const toDolist = await connection.raw(`
    SELECT * FROM LISTATASK
`)

const newTask: ToDoList = {
  id: Number([0].length + 1),
  title,
  description,
  limitDate,
  status,
  creatorUserId
}

await connection.raw(`
  INSERT INTO LISTATASK(id, title, description, limitDate, status, creatorUserId)
  VALUES(${newTask.id}, "${newTask.title}", "${newTask.description}", "${newTask.limitDate}", "${newTask.status}", ${newTask.creatorUserId})
`)

res.status(200).send('Tarefa adicionada')
} catch (error: any) {

res.status(errorCode).send(error.message)
}
})

app.get ("/task/:id", async  (req: Request, res: Response)=>{
  let errorCode = 400
  try {

      const id = Number(req.params.id)

      const resposta = await connection.raw (`
      SELECT * FROM LISTATASK
      WHERE id = ${id};
     `)

      const creatorUserNickname = await connection.raw (`
      SELECT nickname From LISTATASK
      WHERE id = ${id}
      `)

      const bodyResposta: any = {
          resposta, creatorUserNickname
      }

      res.status(200).send(bodyResposta)

  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

