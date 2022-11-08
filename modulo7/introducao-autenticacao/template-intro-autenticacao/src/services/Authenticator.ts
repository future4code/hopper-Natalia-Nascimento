import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../model/user";


export class Authenticator {
    public generateToken = ({ id }: AuthenticationData): string => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
        )
        return token
    }

}

// EXERCICIO 2

// A - PORQUE É NECESSARIO

// B -  JA CRIADO NO ATHENTICATOR E NO USER O TYPE


const expiresIn = "1min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};