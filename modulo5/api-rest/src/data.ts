export enum USER_ROLE {
    NORMAL = "NORMAL", 
    ADMIN = "ADMIN"

}

export type User = {
    id: number, 
    name: string, 
    email: string, 
    type: USER_ROLE, 
    age: number
}


export let users :User[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USER_ROLE.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USER_ROLE.ADMIN,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: USER_ROLE.ADMIN,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: USER_ROLE.ADMIN,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: USER_ROLE.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_ROLE.ADMIN,
        age: 60
    }
]

//EXERCICICO 1
// QUESTAO A - Metodo GET
// QUESTAO 

// EXERCICIO 2

// QUESTAO A - PASSADO O NAME E O VALOR

// QUESTAO B - iF E TROW 

// EXERCICIO 3

//QUESTAO A - ID 

// QUESTAO B 

// EXERCICIO 4

// QUESTAO A - NAO MUDOU NADA PRA MIM

// QUESTAO B - APROPRIADO PARA IMPREVISTP 