import { Label } from '@radix-ui/react-label'
import BaseInput from './BaseInput'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AuthForm = () => {
  return (
     <div className='flex flex-col gap-7 border p-10 shadow-2xl rounded-2xl items-center'>
         <div>
         <Label className='' htmlFor='name'>Name</Label>
         <BaseInput placeholder={"Enter Name"} className = "w-[500px] border border-blue-400 "/>
         </div>
          <div>
          <Label htmlFor='user_name'>User Name</Label>
          <BaseInput placeholder="Enter User Name" className = "w-[500px] border border-blue-400 "/>
          </div>
          <div>
          <Label htmlFor='email'>Email</Label>
          <BaseInput placeholder="Enter Email" className = "w-[500px] border border-blue-400 "/>
          </div>
          <div>
          <Label htmlFor='Password'>Password</Label>
          <BaseInput placeholder="Enter Password" className = "w-[500px] border border-blue-400 "/>
          </div>

          <div>
            <Button className={"mt-10 w-[300px] bg-blue-400 text-[20px] hover:bg-blue-400"} >Signup</Button>
          </div>
          <p className='text-17px'>Alreay have an account? <Link href='/login'>click here to login</Link></p>
        </div>
  )
}

export default AuthForm
