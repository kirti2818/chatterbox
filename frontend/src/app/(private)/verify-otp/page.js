"use client"
import { Button } from "@/components/ui/button"
import { InputOTPSlot,InputOTP,InputOTPGroup } from "@/components/ui/input-otp"
import useValidateOtp from "@/hooks/useValidateOtp"
import * as React from "react"
const VerifyOtp = () =>{
  const {otp,handleValidateOtp,OtpVerificationLoading,ResendOtpVerificationLoading,handleOtp} = useValidateOtp()

  return (
    <div className="space-y-2 w-full h-screen flex flex-col items-center pt-50">
      <p className="text-2xl">ChatterBox Verification Page</p>
      <p className="text-l">Please Check your Email</p>
      <InputOTP
      className="w-[500px]"
        maxLength={6}
        value={otp}
        onChange={handleOtp}
      >
        <InputOTPGroup className={"w-full"}>
          <InputOTPSlot className={"w-[100px] h-[50px] border border-blue-400"} index={0} />
          <InputOTPSlot className={"w-[100px] h-[50px] border border-blue-400"} index={1} />
          <InputOTPSlot className={"w-[100px] h-[50px] border border-blue-400"} index={2} />
          <InputOTPSlot className={"w-[100px] h-[50px] border border-blue-400"} index={3} />
        </InputOTPGroup>
      </InputOTP>
      <div className="text-center text-xl text-blue-500">
        {otp === "" ? (
          <p className="text-blue-700">Enter your one-time password.</p>
        ) : (
          <p className="text-blue-700">You entered: {otp}</p>
        )}
      </div>
      <div className="flex gap-5 justify-end w-[400px]">
      <Button disabled={OtpVerificationLoading || ResendOtpVerificationLoading} onClick={()=>handleValidateOtp('verify')} type='submit' className={"mt-10 w-[100px] bg-blue-500 text-[17px] hover:bg-blue-500 "} >Verify</Button>
      <Button disabled={OtpVerificationLoading || ResendOtpVerificationLoading} onClick={()=>handleValidateOtp('resend')} type='submit' className={"mt-10 w-[100px] bg-red-400 text-[17px] hover:bg-red-400 "} >Resend</Button>
      </div>
    </div>
  )
}

export default VerifyOtp
