import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import expressValidator from 'express-validator';
import postRouter from './routes/posts';
import authRouter from './routes/auth';
import userRouter from './routes/users';

dotenv.config();
const app = express()
mongoose.connect('mongodb://localhost:27017/socially', {useNewUrlParser: true});


app.use(express.json());
app.use(expressValidator());
app.use('/api/v1/posts',postRouter);
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/users',userRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}!`))