import PrivateRoute from "../../components/PrivateRoute";
import { cookies } from "next/headers";
import Logout from "../BaseComponents/Logout";

const Privatelayout = async ({ children }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  return (
    <>
      <Logout />
      <PrivateRoute token={token}>{children}</PrivateRoute>
    </>
  );
};

export default Privatelayout;
