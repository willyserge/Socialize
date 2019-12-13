import mongoose from 'mongoose';
import { stringify } from 'querystring';

const postSchema= new mongoose.Schema({
    title:{
        type:String,
        required:"title is required",
        minlength:4,
        maxlength:150

    },
    body:{
        type:String,
        required:"title is required",
        minlength:4,
        maxlength:2000
    }
    
});

const Post = mongoose.model('Post', postSchema);
export default Post;