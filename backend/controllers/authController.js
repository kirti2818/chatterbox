const UserModel = require("../models/user/AuthSchema")
const bcryptjs = require("bcryptjs")
const generateOtp = require("../utils/generateOtp")
const dayjs = require("dayjs")
const sendEmail = require("../utils/sendEmail")
const OtpModel = require("../models/user/OtpSchema")
const Token = require("../utils/generateToken")


const loginController = async(data)=>{
    const {detail,password} = data
    if(!detail || !password) return {message : "Every Field is Required",code : 400}

    const findUser = await UserModel.findOne({$or: [ {email : detail}, {user_name : detail}]})
    if(!findUser) return {message : "User not found!", code : 400}

    const comparePassword = await bcryptjs.compare(password, findUser?.password)
    if(!comparePassword) return {message : "Invalid Credentials!",code : 400}
    if(!findUser?.emailVerified) {
      //delete all otps stored in database .
      await OtpModel.deleteMany({userId : findUser?.id})

      const otp = generateOtp()
      const expiryDate = dayjs().add(1,"minute")
      const insertOtp = new OtpModel({email : findUser?.email, otp, expiryDate,userId : findUser?.id})
      await insertOtp.validate()
      const mailOptions = {
        from : 'kirti8527260810@gmail.com',
        to : findUser?.email,
        subject : 'One Time Password to Signup CHATTERBOX',
        text: `Hii Your Verification Code is ${otp}`,
      }
      const hasEmailSent = await sendEmail(mailOptions)
      if(hasEmailSent){
        await insertOtp.save()
        const token = Token({id : findUser?.id , email : findUser?.email, emailVerified : findUser?.emailVerified})
        return {message: "Otp has been sent on your email!", token, code : 200}
      }
      return {message : "Otp has not sent on gmail !", code : 400}
    }
    const token = Token({id : findUser?.id , email : findUser?.email, emailVerified : findUser?.emailVerified})
    return {message: "Login Successfully !" , token, code : 200}
}

const signupController = async(data)=>{
   const {name, user_name, email, password} = data
   if(!name || !user_name || !email || !password){
    return {message : 'Every Field is Required',code : 400}
   }
   else {
      const findUserName = await UserModel.findOne({user_name})
      const findUserEmail = await UserModel.findOne({email})

      if(findUserName || findUserEmail){
        return (findUserName ? {message : 'User name already exists!',code : 400} : {message : "Email Id already exists!", code : 400})
      }

      const hashedPassword = await bcryptjs.hashSync(data.password,8)
      const insertUser = new UserModel({...data,password : hashedPassword})
      await insertUser.validate()

      const otp = generateOtp()
      const expiryDate = dayjs().add(1,'minute')
      
      const insertOtp = new OtpModel({email, userId : insertUser?.id, otp, expiryDate})
      await insertOtp.validate()

      const mailOptions = {
        from : 'kirti8527260810@gmail.com',
        to : email,
        subject : 'One Time Password to Signup CHATTERBOX',
        text: `Hii Your Verification Code is ${otp}`,
      }

      const hasEmailSent = await sendEmail(mailOptions)
      if(hasEmailSent) {
        await insertOtp.save()
        await insertUser.save()
        const token = Token({id : insertUser?.id , email : insertUser?.email,emailVerified : insertUser?.emailVerified})
        console.log(token,"TOKEN")
        return {message : "User Created Successfully, Otp has been sent on you gmail !", token, code : 200}
      }

      return {message : "User Not Created",code : 400}

      
   }
}


const resendOtpController = async(data)=>{

}

const emailVerificationController = async(data)=>{
  return "Email Verified"
}

module.exports = {loginController,signupController,resendOtpController,emailVerificationController}