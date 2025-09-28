const mongoose = require('mongoose')

const Otp = mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    otp : {
        type : Number,
        required : true
    },
    expiryDate : {
        type : Date,
        required : true
    },
    userId : {type : mongoose.Schema.Types.ObjectId,required : true}
},{timeStamps : true, versionKey : false})

const OtpModel = mongoose.model('Otp',Otp)

module.exports = OtpModel