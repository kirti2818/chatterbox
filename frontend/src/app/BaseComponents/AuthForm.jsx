"use client"
import { Label } from '@radix-ui/react-label'
import BaseInput from './BaseInput'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useSignup } from '@/hooks/useSignup'
import { Controller, useForm } from 'react-hook-form'

const AuthForm = () => {
  const {handleSubmit,control,formState:{errors}} = useForm()
  const {onSubmit,loader} = useSignup()
  return (
     <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-7 border p-10 shadow-2xl rounded-2xl items-center'>
         <div>
         <Label className='' htmlFor='name'>Name</Label>
         <Controller
         name="name"
         control={control}
         rules={{required:'Name is required'}}
         render={({field:{onChange,value}})=>{
          return <>
          <BaseInput onChange={onChange} value={value} placeholder={"Enter Name"} className = "w-[500px] border border-blue-400 "/>
          {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </>
         }}
         />
         </div>
          <div>
          <Label htmlFor='user_name'>User Name</Label>
          <Controller
          name="user_name"
          control={control}
          rules={{required : 'User Name is required'}}
          render={({field : {onChange,value}})=>{
            return <>
            <BaseInput onChange={onChange} value={value} placeholder="Enter User Name" className = "w-[500px] border border-blue-400 "/>
            {errors.user_name && (
              <p className="text-red-500 text-sm">{errors.user_name.message}</p>
            )}
            </>
          }}
          />
          </div>
          <div>
          <Label htmlFor='email'>Email</Label>
          <Controller
          name="email"
          control={control}
          rules={{required : "Email is required"}}
          render={({field:{onChange,value}})=>{
            return <>
            <BaseInput onChange={onChange} value={value} type="email" placeholder="Enter Email" className = "w-[500px] border border-blue-400 "/>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
            </>
          }}
          />
          </div>
          <div>
          <Label htmlFor='Password'>Password</Label>
          <Controller
          name="password"
          control={control}
          rules={{required : 'Password is Required'}}
          render={({field:{onChange,value}})=>{
            return <>
            <BaseInput onChange={onChange} value={value} type="password" placeholder="Enter Password" className = "w-[500px] border border-blue-400 "/>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
            </>
          }}
          />
          </div>

          <div>
            <Button disabled={loader} type="submit" className={"mt-10 w-[300px] bg-blue-400 text-[20px] hover:bg-blue-400"} >Signup</Button>
          </div>
          <p className='text-17px'>Alreay have an account? <Link href='/login'>click here to login</Link></p>
        </form>
  )
}

export default AuthForm
