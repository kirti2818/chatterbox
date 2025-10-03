const jwt = require('jsonwebtoken')
const UserModel = require('../models/user/AuthSchema')

const authMiddleware = async(req,res,next)=>{
    try {
        const token = req.headers?.token || req.cookies.token
        if(!token) return res.status(401).json({message : 'Unauthenticated User!',status : false})
        
        const decodeToken = jwt.verify(token,process.env.SECRET_KEY)
        if(!decodeToken) return res.status(401).json({message : 'Unauthenticated User!!',status : false})
        const user = await UserModel.findById(decodeToken?.id).select('-password')
        
        if(user){
            req.userId = user._id
            req.profile = user
            next()
        }
        else{
            return res.status(400).json({message : "User Not Found !!",status : false})
        }

    } catch (error) {
        console.log(`Error in Auth Middleware ${error.message}`)
        return res.status(400).json({message : error.message , status : false})
        
    }
}

module.exports = authMiddleware