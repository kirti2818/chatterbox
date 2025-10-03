import api from "@/api"
import { useMutation } from "@tanstack/react-query"

const useLogoutMutation = ()=>{
    const mutate = useMutation({
        mutationFn : async()=>{
            const response = await api.post('/user/logout')
            return response?.data
        }
    })
    return mutate;
}

export default useLogoutMutation