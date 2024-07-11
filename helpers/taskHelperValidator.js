import { validationResult } from "express-validator"

const taskHelperValidator = (req,res,next)=>{
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {

        res.status(400).send({errors: error.array()})
        
    }
}



export default taskHelperValidator