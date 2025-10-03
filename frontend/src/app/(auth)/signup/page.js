import React from 'react'
import Image from 'next/image'
import AuthForm from '@/app/BaseComponents/AuthForm'

const Signup = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center pt-50 bg-blue-100'>
        <div className='mb-5'>
            <Image width={100} height={200} src="/messenger.png" alt="No image" />
        </div>
        <AuthForm/>
    </div>
    
  )
}

export default Signup
