import React from 'react'
import Image from 'next/image'
import LoginForm from '@/app/BaseComponents/LoginForm'

const Login = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center pt-50'>
        <div className='mb-5'>
            <Image width={100} height={200} src="/messenger.png" alt="No image" />
        </div>

        <LoginForm/>
    </div>
    
  )
}

export default Login
