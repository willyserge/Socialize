import express from 'express';
import Posts from '../controllers/postsController';
import Validate from '../validator';
import Authenticate from '../middleware/auth'
const postRouter = express.Router();

postRouter.post('/',Authenticate.user,Validate.post,Posts.createPost);
postRouter.get('/',Authenticate.user,Posts.getPosts);

export default postRouter;