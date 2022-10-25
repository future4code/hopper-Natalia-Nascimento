import { PostDatabase } from "../data/PostDataBase";
import { InvalidDataPosts } from "../error/customError";
import { post, PostInputDTO } from "../model/post";
import { generateId } from "../services/generateld";

export class PostBusiness {
    public create = async (
      input: PostInputDTO
      ) => {

      try {
      const {
        photo,
        description,
        type,
        authorId
      } = input;

      if (!photo || !description || !type || !authorId) {
        throw new InvalidDataPosts()
      }
  
      const id = generateId()
  
      const postDatabase = new PostDatabase();
      const post: post = {
        id,
        photo,
        description,
        type,
        createdAt: new Date(),
        authorId
      }
      await postDatabase.insertPost(post)
    }
    catch (error: any) {
      throw new Error(error.message)
    }
  }
  
  async getAll (): Promise<any[]> {
      const postDatabase = new PostDatabase()
      const posts = await postDatabase.getAll()
    
      if(posts.length === 0) {
        throw new InvalidDataPosts()
      }
      return posts
    }
    
    public getPostId = async (id: string): Promise<any[]> => {
      const postDatabase = new PostDatabase()
      const post = await postDatabase.getPostId(id)

      if(post.length === 0) {
        throw new InvalidDataPosts()
      }
      return post
    }

    public deletePost = async (id: string): Promise<void> => {
      const postDatabase = new PostDatabase()
      await postDatabase.deletePost(id)
    }
  }