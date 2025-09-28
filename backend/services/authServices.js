const { loginController, signupController } = require("../controllers/authController")

const cookieOptions = {maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true}

const loginService = async(req,res)=>{
    try {
        const {body} = req
        if(!body) return res.status(400).json({message : "Please provide Data",status : false})
        const data = await loginController(body)
        if(data?.token){
            return res.cookie("chatterboxToken",data?.token,cookieOptions).status(data?.code).json({message : data?.message,status : true})
        }
        return res.status(data?.code).json({message : data?.message,status:false})

    } catch (error) {
        console.log(`Error in login service ${error.message}`);
        return res.status(400).json({message : error.message,status : false})
        
    }
}

const signupService = async(req,res)=>{
    try {
        const {body} = req
        if(!body) return res.status(400).json({message : "Please Provide Data", status : false })
        const data = await signupController(body)
        if(data?.token){
            return res.cookie("chatterboxToken",data.token,cookieOptions).status(data?.code).json({message: data?.message, status: true})
        }
        return res.status(data?.code).json({message : data?.message,status : false})

    } catch (error) {
        console.log(`Error in signup service ${error.message}`);
        return res.status(400).json({ message: error.message, status: false });
        
    }
}

const resendOtpService = async(req,res)=>{

    // try {

    //     const {email} =  
        
    // } catch (error) {
    //     console.log( `Error while Resend OTP ${error.message}`)
    //     return res.status(400).json({message : error.message, status : false})
    // }

}

module.exports = {loginService,signupService,resendOtpService}