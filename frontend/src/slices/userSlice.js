import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // userDetail : {},
    token : ""
}

const userSlice = createSlice({
    name : 'User_Slice',
    initialState,
    reducers:{
        // setUserData:(state,action)=>{
        //     return {...state , userDetail : action.payload}
        // },
        // getUserData:(state)=>{
        //     return state.userDetail;
        // },
        setToken:(state,action)=>{
            return {...state , token : action.payload}
        },
        getToken:(state)=>{
            return state.token;
        },
        resetToken:(state)=>{
            return {...state,token : ''};
        }
    }
})

export const {setUserData,getUserData,setToken,getToken,resetToken} = userSlice.actions
export default userSlice.reducer