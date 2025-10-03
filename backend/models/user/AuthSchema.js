const mongoose = require("mongoose")
const User = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    user_name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    emailVerified: {
        type: Boolean,
        default: false,
    },
    password : {
        type : String,
        required : true
    },
    avatar: {
        type: String,
    },
}, { timestamps: true, versionKey: false })

const UserModel = mongoose.model('User', User)
module.exports = UserModel