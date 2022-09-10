import connection from "./connection";

const criarUsuarios = async () =>{
    try {
        await connection.raw(`
        CREATE TABLE IF NOT EXISTS Produtos (
            id BIGINT PRIMARY KEY,
            nome VARCHAR(255) NOT NULL,
            email VARCHAR(8, 2) NOT NULL,
            categoria ENUM("nome", "nickename", "email") NOT NULL
            );
        `)
        
        console.log("Usuario Criado com Sucesso.")
    } catch (error) {
        console.log("Erro ao criar tabela Produtos.")
       
    }
};

criarUsuarios()
.finally(() => process.exit())