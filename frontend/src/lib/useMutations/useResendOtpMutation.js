import api from "@/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useResendOtpMutation = ()=>{
    const mutate = useMutation({
        mutationFn : async()=>{
            const response = await api.post('/user/resend_otp')
            console.log(response)
            return response.data
        },onSuccess:(data)=>{
            toast.success(data?.message)
        },
        onError:(error)=>{
            toast.error(error?.response?.data?.message)
        }
    })
    return mutate
}

export default useResendOtpMutation