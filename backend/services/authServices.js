const { loginController, signupController, emailVerificationController, resendOtpController, logoutController } = require("../controllers/authController")

const cookieOptions = {maxAge: 3 * 24 * 60 * 60 * 1000, httpOnly: true}

const loginService = async(req,res)=>{
    try {
        const {body} = req
        if(!body) return res.status(400).json({message : "Please provide Data",status : false})
        const data = await loginController(body)
        if(data?.token){
            return res.cookie("token",data?.token,cookieOptions).status(data?.code).json({message : data?.message, token:data?.token, status : true})
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
            return res.cookie("token",data.token,cookieOptions).status(data?.code).json({message: data?.message, token:data?.token, status: true})
        }
        return res.status(data?.code).json({message : data?.message,status : false})

    } catch (error) {
        console.log(`Error in signup service ${error.message}`);
        return res.status(400).json({ message: error.message, status: false });
        
    }
}

const resendOtpService = async(req,res)=>{
    try {

        const {userId} = req;
        const {email} =  req.profile
        const data = await resendOtpController({userId,email})
        return res.status(data?.code).json({message : data?.message , status : data?.code == 200})
        
    } catch (error) {
        console.log( `Error while Resend OTP ${error.message}`)
        return res.status(400).json({message : error.message, status : false})
    }

}

const verifyOtpService  = async(req,res)=>{
    try {
        const otp = req.body?.otp
        const {userId} = req
        if(!otp) return res.status(400).json({message : "Please Enter 4 digit OTP", status : false})
        const data = await emailVerificationController({otp,userId})
        if(data?.token) {
            return res.cookie('token',data?.token,cookieOptions).status(data?.code).json({message : data?.message, token:data?.token, status : true})
        }
        return res.status(data?.code).json({message : data?.message, status : false})
        
    } catch (error) {
        console.log(`Error while Verifying OTP ${error.message}`)
        return res.status(400).json({message : error.message, status : false})
        
    }
}

const logoutService = async(req,res)=>{
    try {
        return res.cookie('token', '', { expires: new Date(0), httpOnly: true }).status(200).json({message : 'Logout!', status : true});
    } catch (error) {
        return res.status(400).json({message : `Error ${error.message}`, status : false})
        
    }


}

module.exports = {loginService,signupService,resendOtpService,verifyOtpService,logoutService}