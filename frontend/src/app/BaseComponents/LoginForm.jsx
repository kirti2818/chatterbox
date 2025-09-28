import { Label } from '@radix-ui/react-label'
import BaseInput from './BaseInput'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const LoginForm = () => {
  return (
     <div className='flex flex-col gap-7 border p-10 shadow-2xl rounded-2xl items-center'>
          <div>
          <Label>User Name Or Email</Label>
          <BaseInput placeholder="Enter User Name or Email" className = "w-[500px] border border-blue-400 "/>
          </div>
          <div>
          <Label>Password</Label>
          <BaseInput placeholder="Enter Password" className = "w-[500px] border border-blue-400 "/>
          </div>

          <div>
            <Button className={"mt-10 w-[300px] bg-blue-400 text-[20px] hover:bg-blue-400 "} >Login</Button>
        </div>
        <p className='text-17px'>Don't have an account? <Link href='/signup'>click here to signup</Link></p>
          
        </div>
  )
}

export default LoginForm
