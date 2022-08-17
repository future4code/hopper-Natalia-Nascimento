import express from "express";
import { users } from "./users";
import { posts } from "./posts";

const app = express();

app.use(express.json());
const port = 3333
const server = app.listen(port, () => {
  if (server) {
        console.log(`Server is running in http://localhost:${port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.get("/", (req, res) => {          
    return res.status(200).json({message:"Hello from Express"})
    
})

app.get("/users", (req, res) => {          
    const userData = users.map((user) =>{
        return user
    })
    return res.status(200).send(userData)
    
})


app.get("/posts", (req, res) => {          
    const postData = posts.map((post) =>{
        return post
    })
    return res.status(200).send(postData)
    
})

app.get("/users/posts/:id", (req, res) => {
    const id = req.params.id
    const postsUser = posts.filter((post) => {
        return post.userId === Number(id)
    })
    .map((res)=> {
        return res
    })
    return res.status(200).send(postsUser) 
})