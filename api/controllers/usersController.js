import _ from 'lodash';
import User from '../models/user'

const Users={

    signup: async (req,res)=>{
        const user = new User(req.body);

        try {
             await user.save();
             res.status(201).send({
                status: 201,
                message:'user created successfully',
                data: [{
                  user: _.pick(user,['_id','name','email'])
                }],
              });
        } catch (error) {
            res.status(400).send(error);
        }
    },

     
 }
 export default Users;