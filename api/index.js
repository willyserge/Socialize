import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import expressValidator from 'express-validator';
dotenv.config();
const app = express()
mongoose.connect('mongodb://localhost:27017/socially', {useNewUrlParser: true});
import postRouter from './routes/posts'

app.use(express.json());
app.use(expressValidator());
app.use('/api/v1/posts',postRouter);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}!`))