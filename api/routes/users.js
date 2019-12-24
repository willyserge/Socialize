import express from 'express';
import Users from '../controllers/usersController';
const userRouter = express.Router();

userRouter.get('/',Users.getAllUsers);


export default userRouter;