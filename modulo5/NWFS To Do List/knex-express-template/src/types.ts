export type Usuarios = {
    id: number,
    name: string,
    nickname: string,
    email: string
};

export type ToDoList = {
    id: number,
    title: string,
    description: string,
    limitDate: string,
    status: string,
    creatorUserId: number
  }