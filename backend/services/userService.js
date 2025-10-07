const { getAllUsersController } = require("../controllers/userController")

const getAllUsersService = async(req,res)=>{
    try {
        const {userId} = req
        const data = await getAllUsersController(userId)
        if(data?.data){
            return res.status(data.code).json({message : data.message , data : data.data , status : true})
        }
        return;
    } catch (error) {
        console.log(`Error in Get all user service ${error.message}`)
        return res.status(400).json({message : `Error ${error.message}`, status : false})
    }

}

module.exports = {getAllUsersService}