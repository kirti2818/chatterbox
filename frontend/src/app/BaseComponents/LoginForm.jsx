"use client"
import { Label } from '@radix-ui/react-label'
import BaseInput from './BaseInput'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import useLogin from '@/hooks/useLogin'

const LoginForm = () => {
  const {handleSubmit,detail,password,handleData,error,loader} = useLogin()
  return (
     <form onSubmit={handleSubmit} className='flex flex-col gap-7 border p-10 shadow-2xl rounded-2xl items-center'>
          <div>
          <Label>User Name Or Email</Label>
          <BaseInput onChange={(e)=>handleData(e.target.value,"detail")} value={detail} type="text" placeholder="Enter User Name or Email" className = "w-[500px] border border-blue-400 "/>
          {error.detailError.show && (
              <p className="text-red-500 text-sm">{error.detailError.text}</p>
            )}
          </div>
          <div>
          <Label>Password</Label>
          <BaseInput onChange={(e)=>handleData(e.target.value,"password")} value={password} type="password" placeholder="Enter Password" className = "w-[500px] border border-blue-400 "/>
          {error.passwordError.show && (
              <p className="text-red-500 text-sm">{error.passwordError.text}</p>
            )}
          </div>

          <div>
            <Button disabled={loader} type='submit' className={"mt-10 w-[300px] bg-blue-400 text-[20px] hover:bg-blue-400 "} >Login</Button>
        </div>
        <p className='text-17px'>Don't have an account? <Link href='/signup'>click here to signup</Link></p>
          
        </form>
  )
}

export default LoginForm
