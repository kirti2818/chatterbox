import useLoginMutation from "@/lib/useMutations/useLoginMutation";
import { setToken } from "@/slices/userSlice";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const useLogin = () => {
  const [detail, setDetail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    detailError: { text: "", show: false },
    passwordError: { text: "", show: false },
  });
  const { mutate: loginUser, isSuccess, loader } = useLoginMutation();
  const router = useRouter();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (isSuccess) router.push("/verify-otp");
  // }, [isSuccess]);

  useEffect(() => {
    if (detail)
      setError((prev) => ({ ...prev, detailError: { text: "", show: false } }));
    if (password)
      setError((prev) => ({
        ...prev,
        passwordError: { text: "", show: true },
      }));
  }, [detail, password]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ detail, password });
    if (!detail)
      setError((prev) => ({
        ...prev,
        detailError: { text: "User Name or Email is required", show: true },
      }));
    if (!password)
      setError((prev) => ({
        ...prev,
        passwordError: { text: "Password is required", show: true },
      }));

    if (detail && password) {
      loginUser(
        { detail, password },
        {
          onSuccess: (responseData) => {
            dispatch(setToken(responseData?.token));
            // router.push("/verify-otp");
          },
        }
      );
    }
  };

  const handleData = (value, key) => {
    if (key === "detail") setDetail(value);
    else setPassword(value);
  };
  return { handleSubmit, detail, password, handleData, loader, error };
};

export default useLogin;
