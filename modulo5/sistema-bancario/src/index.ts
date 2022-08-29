import express, { Request, response, Response } from "express";
import cors from "cors"
import { AddressInfo } from "net";
import { RealizarDeposito, RealizarPagamentos, User, users } from "./data";


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

  app.post('/contas/criar-conta',( req: Request, res: Response) => {
    let errorCode = 400
    try {
        const {nome, cpf, dataDeNascimento} = req.body
        users.push({
            nome,
            cpf,
            dataDeNascimento,
            saldo:0,
            extratoDados: []
        });
        res.status(200).send("Cadastro feito com sucesso!!")        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
});
app.get('/contas/saldo',(req: Request,res: Response) => {
  let errorCode = 400
  try {
      const cpfPesquisado = Number(req.body.cpf)
      const contaEncontrada = users.filter((item) => {
          return item.cpf === cpfPesquisado
      })

      if(!contaEncontrada){
          errorCode = 422
          throw new Error("Usuário não encontrado")
      }

      if(contaEncontrada.length !== 1){
          errorCode = 500
          throw new Error("Mais de um usuário encontrado")
      }
      
      const saldoEncontrado = contaEncontrada[0].saldo
      res.status(200).send(`R$${saldoEncontrado}`)
  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
});

app.put('/contas/deposito',(req: Request, res: Response) => {
  let errorCode = 400
  try {
      const {cpf, valor, data, descricao} = req.body
      const buscaConta = users.filter((item) => {
          return item.cpf === cpf
      })

      if(buscaConta.length === 0){
          errorCode = 422
          throw new Error("Usuário não encontrado")
      }

      RealizarDeposito(cpf,valor,data,descricao)
      res.status(200).send("Depósito feito com sucesso")
  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
})

app.put('/contas/pagamento',(req: Request, res: Response) => {
  let errorCode = 400
  try {
      const {cpf, valor, data, descricao} = req.body
      const buscaConta = users.filter((item) => {
          return item.cpf === cpf
      })

      if(buscaConta.length === 0){
          errorCode = 422
          throw new Error("Usuário não encontrado")
      }

      RealizarPagamentos(cpf,valor,data,descricao)
      res.status(200).send("Pagamento feito com sucesso")
  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
})

app.put('/contas/transferencia',(req: Request, res: Response) => {
  let errorCode = 400
  try {
      const {cpfRemetente, cpfDestinatario, valor, data, descricao} = req.body
      const buscaContaRemetente = users.filter((item) => {
          return item.cpf === cpfRemetente
      })

      const buscaContaDestinatario = users.filter((item) => {
          return item.cpf === cpfDestinatario
      })

      if(
          buscaContaRemetente.length === 0 
          || 
          buscaContaDestinatario.length === 0
      ){
          errorCode = 422
          throw new Error("Um dos usuários não encontrado")
      }

      RealizarPagamentos(cpfRemetente,valor,data,descricao)
      RealizarDeposito(cpfDestinatario,valor,data,descricao)
      res.status(200).send("Transferência realizada com sucesso")
  } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
})

 
 const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });