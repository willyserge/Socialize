const Validate={
 
 post : (req,res,next)=>{
     //validate title
     req.check('title','please write title').trim().notEmpty()
     req.check('title','title must be between 4 to 150 characters ').isLength({
         min:4,max:150
     });
     //validate body
     req.check('body','please write the body').trim().notEmpty()
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
 }

  
}
export default Validate;