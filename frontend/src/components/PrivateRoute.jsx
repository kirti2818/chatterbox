'use client'
import { jwtDecode } from "jwt-decode"
import {useRouter,usePathname} from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
const PrivateRoute = ({children,token}) => {
    const router = useRouter()
    const pathname = usePathname()
    const [cookie, setCookie] = useState(token || "")
    const getToken = useSelector((state)=>state.userSlice.token)

    useEffect(()=>{
      if(getToken){
        setCookie(getToken)
      }

    },[getToken])


    useEffect(() => {
        if (!cookie) {
          if (pathname === '/signup' || pathname === '/login') return;
          return router.push('/login');
        }
          
          let decoded = cookie ? jwtDecode(cookie) : {};
    
        if (!decoded.emailVerified) {
         if(pathname == '/verify-otp') return;
         return router.push('/verify-otp');
        }
        else if(decoded.emailVerified && ['/chat','/'].includes(pathname)) return;
        return router.push('/');
        
    
      }, [cookie, pathname]);
    

      //returning JSX element
    return <>{children}</>
    
}

export default PrivateRoute;

