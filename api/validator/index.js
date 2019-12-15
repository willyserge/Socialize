const Validate={
 
 post : (req,res,next)=>{
     //validate title
     req.check('title','title is required').trim().notEmpty()
     req.check('title','title must be between 4 to 150 characters ').isLength({
         min:4,max:150
     });
     //validate body
     req.check('body','body is required').trim().notEmpty()
     req.check('body','title must be between 4 to 2000 characters ').isLength({
         min:4,max:2000
     });

     const errors=req.validationErrors()

     if(errors){
     const error=errors.map(err=>err.msg)[0];
     return res.status(400).send({
         status:400,
         error:error
     })
     }
     next();
 },

 user : (req,res,next)=>{
    //validate name
    req.check('name','name is required').trim().notEmpty()
    req.check('name','name must be between less than 3 characters ').isLength({
        min:3
    });
    //validate email
    req.check('email').isEmail().withMessage('invalid email address');
    //validate password
    req.check('password').isLength({ min: 6 }).withMessage('password must be at least 6 characters long');

    const errors=req.validationErrors()

    if(errors){
    const error=errors.map(err=>err.msg)[0];
    return res.status(400).send({
        status:400,
        error:error
    })
    }
    next();
}

  
}
export default Validate;