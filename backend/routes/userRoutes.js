const express = require("express")
const { loginService, signupService } = require("../services/authServices")
const UserRoutes = express.Router()


UserRoutes.post("/login",loginService)
UserRoutes.post("/signup",signupService)

module.exports = UserRoutes