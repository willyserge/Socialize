import _ from 'lodash';
import User from '../models/user'

const Users={

    signup: async (req,res)=>{

        let user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send({
          status:400,
          error:'Email already exists.'
        });
        user = new User(req.body);

        try {
             await user.save();
             const token = await user.generateAuthToken();
             res.header('x-auth-token', token).status(201).send({
                status: 201,
                message:'user created successfully',
                data: [{
                  token,
                  user: _.pick(user,['_id','name','email'])
                }],
              });
        } catch (error) {
            res.status(400).send(error);
        }
    },

     
 }
 export default Users;