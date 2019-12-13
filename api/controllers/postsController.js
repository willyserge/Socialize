import Post from '../models/post'

const Posts={

    createPost: async (req,res)=>{
        const post = new Post(req.body);

        try {
             await post.save();
             res.status(201).send(post);
        } catch (error) {
            res.status(400).send(error);
        }
    }

     
 }
 export default Posts;