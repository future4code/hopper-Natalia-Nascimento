import express from "express"
import cors from "cors"
import { produtos } from "./data"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/teste", (req, res) => {          
    res.send("Funcionando!")
})

app.get('/produtos', (req, res) => {

    const lista = produtos.map((produto) => {
        return produto
    }).flat(1)
  
    res.send(lista)
  })

  type prod = {
    id: string,
    name: string,
    price: number
  }

app.post("/produtos/criar", (req, res) => {
    
    if(req.body.price <=0){
        res.send("Valor inválido")
    }
    else{
        const name = req.body.name
        const price = req.body.price

        const novoProduto: prod = {
            id: String(Date.now()),
            name,
            price
        }
        produtos.push(novoProduto)
        res.send(produtos)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})