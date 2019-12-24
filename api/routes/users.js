import express from 'express';
import Users from '../controllers/usersController';
import Authenticate from '../middleware/auth'
const userRouter = express.Router();

userRouter.get('/',Users.getAllUsers);
userRouter.get('/:userId',Authenticate.user,Users.getSingleUser);


export default userRouter;