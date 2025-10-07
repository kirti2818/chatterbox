const express = require("express")
const { loginService, signupService, verifyOtpService, resendOtpService, logoutService } = require("../services/authServices")
const authMiddleware = require("../middlewares/authMiddleware")
const { getAllUsersService } = require("../services/userService")
const UserRoutes = express.Router()


UserRoutes.post("/login",loginService)
UserRoutes.post("/signup",signupService)
UserRoutes.post("/logout",logoutService)

//middleware
UserRoutes.use(authMiddleware)
UserRoutes.post("/verify_otp",verifyOtpService)
UserRoutes.post("/resend_otp",resendOtpService)
UserRoutes.get("/getAllUsers",getAllUsersService)

module.exports = UserRoutes