import { useEffect, useState } from "react";
import useVerifyOtpMutation from "@/lib/useMutations/useVerifyOtpMutation";
import useResendOtpMutation from "@/lib/useMutations/useResendOtpMutation";
import { useRouter } from "next/navigation";
import { setToken } from "@/slices/userSlice";
import { useDispatch } from "react-redux";

const useValidateOtp = () => {
  const [otp, setOtp] = useState("");
  const {
    mutate: OtpVerify,
    isSuccess: OtpVerified,
    isPending: OtpVerificationLoading,
  } = useVerifyOtpMutation();
  const {
    mutate: ResendOtp,
    isSuccess: ResentOtp,
    isPending: ResendOtpVerificationLoading,
  } = useResendOtpMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  // useEffect(()=>{
  //     if(OtpVerified && !OtpVerificationLoading){
  //         console.log("HELLO")
  //         return router.push("/")
  //     }

  // },[OtpVerified])

  const handleValidateOtp = (action) => {
    if (action === "verify") {
      OtpVerify(
        { otp },
        {
          onSuccess: (responseData) => {
            dispatch(setToken(responseData?.token));
            // router.push("/");
          },
        }
      );
    } else {
      ResendOtp();
    }
  };

  const handleOtp = (value) => {
    setOtp(value);
  };

  return {
    otp,
    handleValidateOtp,
    OtpVerificationLoading,
    ResendOtpVerificationLoading,
    handleOtp,
  };
};

export default useValidateOtp;
