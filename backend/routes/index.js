const express = require('express')
const allRoutes = express.Router()
const UserRoutes = require("./userRoutes")

allRoutes.use("/user",UserRoutes)

module.exports = allRoutes
