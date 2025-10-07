const UserModel = require("../models/user/AuthSchema")

const getAllUsersController = async(userId)=>{
    const allUsers = await UserModel.find({_id : {$ne : userId}})
    return {message : 'Get All Users', data : allUsers,code : 200}
}

module.exports = {getAllUsersController}