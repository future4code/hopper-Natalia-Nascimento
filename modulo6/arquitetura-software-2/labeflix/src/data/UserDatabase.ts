import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = 'LABEFLIX_USER'


  public insertUser = async (
    user: User
 ) => {
    try {
       await UserDatabase.connection.insert({
          id: user.getId,
          name: user.getName,
           email: user.getEmail,
          password: user.getPassword
       }).into(this.insertUser)
    } catch (error: any) {
       throw new Error(error.message)
    }

 }

}