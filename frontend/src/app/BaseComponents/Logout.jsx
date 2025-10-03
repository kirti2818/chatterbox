'use client'
import { Button } from "@/components/ui/button";
import useLogout from "@/hooks/useLogout";

const Logout = ()=>{
    const {handleLogout} = useLogout()
    return <div className="flex justify-end pt-5"><Button onClick={handleLogout} className={"text-xl bg-blue-400 w-[200px] hover:bg-blue-400"}>Logout</Button></div>

}

export default Logout;