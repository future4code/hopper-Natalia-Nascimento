// // // export type task = {
// // //     id: string,
// // //     name: string,
// // //     email: string,
// // //     password: string,
// // //     deadline: string,
// // //     authorId: string
// // //  }

// import { UserDatabase } from "../data/UserDatabase";

// export class UserBusiness {
//    public createUser = async (input: any) => {
//       try {
//          const { name,  email, password } = input

//          if (
//             !name ||
//             !email ||
//             !password
//          ) {
//             throw new Error('Preencha os campos "name","nickname", "email" e "password"')
//          }

//          const id: string = Date.now().toString()

//          const userDatabase = new UserDatabase()

//          await userDatabase.insertUser({
//             id: 
//             name: 
//             email,
//             password
//          })

//       } catch (error: any) {
//          throw new Error(error.message)
//       }
//    }
// }
