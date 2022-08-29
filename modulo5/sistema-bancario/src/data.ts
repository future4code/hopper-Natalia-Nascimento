export type User = {
    nome: string,
    cpf: number,
    dataDeNascimento: string,
    saldo: number,
    extratoDados: extrato[]
    
}

export type extrato = {
    valor: number ,
    dataDeTransação: string,
    descricao: string
}



export let users: User []= [
    {
        nome: "Anita Larissa",
        cpf: 12345678910,
        dataDeNascimento: "30/11/1993",
        saldo: 560,
        extratoDados: []
    },

    {
        nome: "John Winston Ono Lennon",
        cpf: 11121314151,
        dataDeNascimento: "09/10/1949",
        saldo: 1060,
        extratoDados: [
            {
                valor: 700,
                dataDeTransação: "21/02/2022",
                descricao: "Conta de luz"
            },
            {
                valor: 62,
                dataDeTransação: "28/02/2022",
                descricao: "Conta de gas"
            },
        ]
    },
  {
    nome: "Fernanda Brum Costa da Cruz",
    cpf: 617.18192021,
    dataDeNascimento: "19/12/1972",
    saldo: 3068,
    extratoDados: [
        {
            valor: 153,
            dataDeTransação: "15/02/2022",
            descricao: "Microfone"
        },
        {
            valor: 300,
           dataDeTransação: "26/04/2022",
            descricao: "Teclado Musical"
        },
    ]
  },
    
]

export const RealizarDeposito = (
    cpf: number,
    valor: number,
    dataDeTransação: string, 
    descricao: string
) => {
    users = users.map((conta) => {
        if(conta.cpf === cpf){
            conta.extratoDados.push({
                valor,
                dataDeTransação,
                descricao
            })
            return {
                ...conta,
                saldo: conta.saldo + valor
            }
        }else{
            return conta
        }
    })
}

export const RealizarPagamentos = (
    cpf: number,
    valor: number,
    dataDeTransação: string, 
    descricao: string
) => {
    users = users.map((conta) => {
        if(conta.cpf === cpf){
            conta.extratoDados.push({
                valor,
                dataDeTransação,
                descricao
            })
            return {
                ...conta,
                saldo: conta.saldo - valor
            }
        }else{
            return conta
        }
    })
}