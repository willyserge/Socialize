import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const app = express()
mongoose.connect('mongodb://localhost:27017/socially', {useNewUrlParser: true});
import postRouter from './routes/posts'

app.use('/api/v1/posts',postRouter);


const port = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`app listening on port ${port}!`))