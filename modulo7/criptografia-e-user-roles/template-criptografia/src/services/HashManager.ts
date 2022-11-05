import * as bcrypt from "bcryptjs";
// import { UserBusiness } from "../business/UserBusiness";

export class HashManager{
    async hash(s: string): Promise<string>  {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt)
    return result;
    }

     compare = async(s: string, hash: string): Promise<boolean> => {
            return bcrypt.compare(s, hash);

    }
}

// EXERCICIO 1

// A ) Round variáveis do ambiente que pega, Salt cria Hash gerado para proteção de ataque
// B) Já instalado no VSCode
// C) Criado no VSCode


// FALTOU O EXERCICIO 2
