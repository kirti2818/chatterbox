import api from "@/api"
import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

const useSignupMutation = ()=>{
 const mutate = useMutation({
    mutationFn : async(data)=>{
        const response = await api.post("user/signup",data)
        return response?.data
    },
    onSuccess:(data)=>{
        toast.success(data?.message)
    },
    onError:(error)=>{
        toast.error(error?.response?.data?.message)
    }

 })  
 return mutate  
}

export default useSignupMutation