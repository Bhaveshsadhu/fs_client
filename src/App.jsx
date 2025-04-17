import "./App.css";
import { ToastContainer } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./pages/Login";
import { SignUpPage } from "./pages/SignUpPage";
import { MainLayout } from "./Components/Layout/MainLayout";
import { DashBoard } from "./pages/DashBoard";
import { Transcation } from "./pages/Transcation";
import Auth from "./Components/auth/Auth";
import { useEffect } from "react";
import { getUser } from "../axioHelper/axioHelper";
import { useUser } from "./context/UserContext";
import "bootstrap/dist/css/bootstrap.min.css";



function App() {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const authorization = localStorage.getItem("accessJWT");

  useEffect(() => {
    // If token is missing, do nothing
    if (!authorization) {
      
      return;
    }

    const fetchUser = async () => {
      try {
        const res = await getUser(authorization);
       

        if (res?.user) {
          setUser(res.user);

          if (res.user._id) {
            navigate("/dashboard");
          }
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };

    fetchUser();
  }, [authorization]);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUpPage />} />
         
          <Route
            path="dashboard"
            element={
              <Auth>
                <DashBoard />
              </Auth>
            }
          />
          <Route
            path="transcation"
            element={
              <Auth>
                <Transcation />
              </Auth>
            }
          />
        </Route>
      </Routes>
      <ToastContainer />
      
    </>
  );
}

export default App;
