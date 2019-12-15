import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
dotenv.config();

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,

    },
    email:{
        type: String,
        unique: true,
        required: true
    },

    password:{
        type: String,
        required: true,
        minlength: 6
    },

    created:{
        type: Date,
        default:Date.now
    },
    updated:Date
    
});

userSchema.methods.generateAuthToken = function() { 
    const user= this;
    const token = jwt.sign({ _id: user._id },process.env.JWT_PRIVATE_KEY);
    return token;
    
  }

userSchema.pre('save',async function(){
  const user= this;
  user.password = await bcrypt.hash(user.password,8);
})
const User = mongoose.model('User', userSchema);
export default User;