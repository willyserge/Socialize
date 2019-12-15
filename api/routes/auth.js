import express from 'express';
import Users from '../controllers/usersController';
import Validate from '../validator';
const authRouter = express.Router();

authRouter.post('/signup',Validate.user,Users.signup);

export default authRouter;