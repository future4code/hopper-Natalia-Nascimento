export type User = {
    nome: string,
    cpf: string,
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
        cpf: "123.456.789-10",
        dataDeNascimento: "30/11/1993",
        saldo: 560,
        extratoDados: []
    },

    {
        nome: "John Winston Ono Lennon",
        cpf: "111.213.141-51",
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
    cpf: "617.181.920-21",
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