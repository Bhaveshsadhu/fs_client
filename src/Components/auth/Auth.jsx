import { Navigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Auth = ({ children }) => {
  // const isAuthenticated = true;
  const { user } = useUser();

  // if (!isAuthenticated) {
  //   return <Navigate to="/" replace />;
  // }
  user?._id ? children : <Navigate to="/" replace />;
};

export default Auth;
