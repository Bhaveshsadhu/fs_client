import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const Auth = ({ children }) => {
  const { user } = useUser();
  const location = useLocation();
  return user?._id ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};

export default Auth;
