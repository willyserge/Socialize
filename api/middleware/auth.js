import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const Authenticate={
    user:  function (req, res, next) {
        const token = req.header('x-auth-token');
        if (!token) return res.status(401).send({
            status:401,
            error:'access denied'
          });
      
        try {
          const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
          req.user = decoded; 
          next();
        }
        catch (ex) {
          res.status(400).send({
            status:400,
            error:'Invalid token'
          });
        }
      }
}

export default Authenticate;
