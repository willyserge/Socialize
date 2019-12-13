import _ from 'lodash';
import Post from '../models/post'

const Posts={

    createPost: async (req,res)=>{
        const post = new Post(req.body);

        try {
             await post.save();
             res.status(201).send({
                status: 201,
                data: [{
                  post: _.pick(post,['_id','title','body']),
                }],
              });
        } catch (error) {
            res.status(400).send(error);
        }
    },

    getPosts: async (req,res)=>{
        try {
            const posts = await Post.find().select('_id title body');
            res.status(200).send({
                status:200,
                data: posts
                
            })
        } catch (error) {
            res.status(500).send({
                status:500,
                error
            })
        }

    }
     
 }
 export default Posts;