import PrivateRoute from "../../components/PrivateRoute";
import { cookies } from "next/headers";
import Header from "@/components/Header";

const Privatelayout = async ({ children }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <>
      <Header/>
      <PrivateRoute token={token}>{children}</PrivateRoute>
    </>
  );
};

export default Privatelayout;
