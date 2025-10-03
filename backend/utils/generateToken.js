const jwt = require('jsonwebtoken');

const Token = (data)=>{
    const generateToken = jwt.sign({...data},process.env.SECRET_KEY, { expiresIn: "1d" })
    console.log(generateToken);
    return generateToken;
}

module.exports = Token
