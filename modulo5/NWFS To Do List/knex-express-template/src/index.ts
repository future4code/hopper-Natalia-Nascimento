import express, {Request, response, Response } from "express";
import cors from "cors";
import connection from "./database/connection";
import { DADOS, Usuarios } from "./types";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/cadastrar-usuarios ", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
      const { nome, email, categoria } = req.body
  
      if (!nome || !email || !categoria) {
        throw new Error("Cadastro de Usuario")
      }
  
      const novoCadastro: Usuarios = {
        id: Number(Date.now()),
        nome,
        email,
        categoria
      }
  
      await connection.raw(`
        INSERT INTO Usuarios(id, nome, email, categoria)
        VALUES(${novoCadastro.id}, "${novoCadastro.nome}", ${novoCadastro.email}, "${novoCadastro.categoria}")
      `)
  
      res.status(200).send("Usuario Cadastrado ")
  
    } catch (error) {
        response.status(errorCode)
    //   res.status(errorCode).send(error.message)
    }
});
