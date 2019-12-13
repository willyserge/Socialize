import express from 'express';
import Posts from '../controllers/postsController';
import Validate from '../validator';
const postRouter = express.Router();

postRouter.post('/',Validate.post,Posts.createPost);
postRouter.get('/',Posts.getPosts);

export default postRouter;