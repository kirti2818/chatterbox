import useSignupMutation from "@/lib/useMutations/useSignupMutation"
import { setToken, setUserData } from "@/slices/userSlice"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const useSignup = ()=>{
    const {mutate : CreateUser,isPending : loader} = useSignupMutation()
    const router = useRouter()
    const dispatch = useDispatch()
    // useEffect(()=>{
    //     if(CreateUserSuccess){
    //         router.push('/verify-otp')
    //     }
    // },[loader,CreateUserSuccess])
    // const onSubmit = async(data)=>{
    //     CreateUser(data)
    //     console.log(data,"DATA...")
    // }

    const onSubmit = (data) => {
        CreateUser(data, {
            onSuccess: (responseData) => {
                // Redux me token dispatch
                dispatch(setToken(responseData?.token))
                // Navigate to OTP page
                // router.push('/verify-otp')
            },
            onError: (error) => {
                console.log("SIGNUP ERROR:", error.message)
            }
        })
    }


    return {onSubmit,loader}
    
}