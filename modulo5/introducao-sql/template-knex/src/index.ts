import express, { Request, Response } from "express";
import cors from "cors";
import connection from "./database/connection";

const app = express();

app.use(express.json());
app.use(cors());

// exercicio 1

app.get("/usuarios", async (request: Request, response: Response) => {
  let errorCode = 400;
  try {
    const search = request.query.search;

    if (search) {
      const funcionario = await connection.raw(`
      SELECT * FROM usuarios
      WHERE nome = "${search}"
      `);
      response.status(200).send(funcionario);
    }
    const funcionario = await connection.raw(`
    SELECT * FROM usuarios`);

    response.status(200).send(funcionario[0]);
  } catch (error: any) {
    response.status(errorCode).send(errorCode);
  }
});

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
});