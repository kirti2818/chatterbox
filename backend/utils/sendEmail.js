const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: "kirti8527260810@gmail.com",
        pass: "dhnkrkzmxemztbiz",
      },
})

const sendEmail = async(mailOptions)=>{
    try {
        const info = await transporter.sendMail({...mailOptions})
        console.log(`Message sent % ${info.messageId}`)
        return true
    } catch (error) {
        console.log(`Error while sending OTP on email ${error.message}`)
        return false
    }
}

module.exports = sendEmail