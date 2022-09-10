export enum DADOS {
    NAME = "nome",
    NICKENAME = "nickename",
    EMAIL = "email"
}

export type Usuarios = {
    id: number,
    nome: string,
    email: string,
    categoria: DADOS
}