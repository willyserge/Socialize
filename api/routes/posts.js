import express from 'express';
import Posts from '../controllers/postsController';
const postRouter = express.Router();

postRouter.post('/',Posts.createPost);

export default postRouter;