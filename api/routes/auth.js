import express from 'express';
import Users from '../controllers/usersController';
import Validate from '../validator';
const authRouter = express.Router();

authRouter.post('/signup',Validate.signup,Users.signup);
authRouter.post('/signin',Validate.signin,Users.signin);

export default authRouter;