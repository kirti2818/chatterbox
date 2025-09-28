const generateOtp = (length = 4) => {
    let otp = "";
    for (let i = 0; i < length; i++) {
      otp += Math.floor(Math.random() * 10);
    }
    console.log(otp, "OTP");
    return +otp;
  };
  
  module.exports = generateOtp;
  