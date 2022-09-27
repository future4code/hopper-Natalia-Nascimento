import express, { Request, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv"
import { Users } from "./type";


dotenv.config()

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

const app = express();
app.use(express.json());
app.use(cors())


app.post("/users", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
  
      const { name, password, email } = req.body
  
      const newPassword: Users = {
        id: Number(Date.now()), name, email, password
      }
  
      if (!name || !password || !email) {
        throw new Error("Cadastro incompleto!!");
      }
  
      await connection.raw(`
              INSERT INTO labecommerce_users (id, name, email, password) 
              VALUES ("${newPassword.id}", "${newPassword.name}", "${newPassword.email}", ${newPassword.password})
          `)
  
      res.status(200).send("Usuário Cadastrado!")
  
    } catch (error: any) {
      res.status(errorCode).send(error.message)
    }
  });

  app.get("/users", async (req: Request, res: Response) => {
    let errorCode = 400
  
    try {
        const Users = req.path
        if (Users) {
          const result = await connection.raw(`
            SELECT * FROM labecommerce_users
          `)
  
          return res.status(200).send(result[0])
        }
      } catch (error: any) {
        res.status(errorCode).send(error.message)
      }
    })

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo ;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  })