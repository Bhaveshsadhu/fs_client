import "./App.css";
import { ToastContainer } from "react-toastify";
import Button from "react-bootstrap/Button";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import { SignUpPage } from "./pages/SignUpPage";

function App() {
  return (
    <>
      <div className="wrapper d-flex justify-content-center align-items-center flex-column">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
