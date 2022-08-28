import express, { Request, response, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { User, users } from "./data";


const app = express();
app.use(express.json());
app.use(cors())

app.get('/contas', (req: Request, res: Response) => {
  try {
    users.map((users)=>{
      return users
    })

    if(!users) {
        throw new Error("Sem contas no momento");
        
    }
    res.status(200).send(users)
  } catch (error: any) {
    res.status(error).send({message: error.message});
  }
  });



 const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });