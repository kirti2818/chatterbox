import useLogoutMutation from "@/lib/useMutations/useLogoutMutation"
import { resetToken } from "@/slices/userSlice"
import { useRouter } from "next/navigation"
import { useDispatch } from "react-redux"

const useLogout = ()=>{
    const dispatch = useDispatch()
    const router = useRouter()
    const {mutate : Logout} = useLogoutMutation()
    const handleLogout = ()=>{
        dispatch(resetToken(''))
        Logout({},{
            onSuccess : ()=>{
                router.push('/login')
            }
        })
    }
   return {handleLogout}
}

export default useLogout