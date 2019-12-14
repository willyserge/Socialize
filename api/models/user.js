import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
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
userSchema.pre('save',async function(next){
  const user= this;
  user.password = await bcrypt.hash(user.password,8);
})
const User = mongoose.model('User', userSchema);
export default User;