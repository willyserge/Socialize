import express from 'express';
import Posts from '../controllers/postsController';
const postRouter = express.Router();
postRouter.get('/',Posts.getPosts);

export default postRouter;