import PrivateRoute from "../../components/PrivateRoute";
import { cookies } from 'next/headers';

const AuthLayout = async({ children }) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;


  return <PrivateRoute token={token}>{children}</PrivateRoute>;
};

export default AuthLayout;
