import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { SiMoneygram } from "react-icons/si";
import { AiTwotoneDashboard } from "react-icons/ai";
import { CiBank } from "react-icons/ci";
import { useUser } from "../../context/UserContext";
import { useState } from "react";

export const Header = () => {
  //  check for user if login then only show dashboard and transcations page
  const { user, setUser } = useUser();
  const [expandNavbar,setExpandNavbar]=useState(false)
  const handlLogout = () => {
    // remove toke
    localStorage.removeItem("accessJWT");
    setExpandNavbar(false)
    //reset user to empty
    setUser({});
    
  };
 
  return (
    <Navbar expand="md" className=" text-white" expanded={expandNavbar}>
      <Container>
        <Navbar.Brand className="text-white">
          <Link to="/" className="text-white nav-link">
            <div
              style={{
                fontSize: "1.5rem",
              }}
            >
              <SiMoneygram /> Finance Tracking
              
            </div>
            
          </Link>
        </Navbar.Brand>
        {user?.name && <div style={{
          color:"orangered"
        }}>Welcome {user.name}</div>}
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" onClick={()=>setExpandNavbar(true)}/>
        <Navbar.Collapse id="basic-navbar-nav" className="text-white">
          <Nav className="ms-auto">
            {user?._id ? (
              <>
                <Link to="/dashboard" className="text-white nav-link" onClick={()=>setExpandNavbar(false)}>
                  DashBoard <AiTwotoneDashboard />
                </Link>
                <Link to="/transcation" className="text-white nav-link" onClick={()=>setExpandNavbar(false)}>
                  Transcation <CiBank />
                </Link>
                <Link
                  to="/"
                  onClick={handlLogout}
                  className="text-white nav-link"
                >
                  LogOut <IoExitOutline />
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-white nav-link" onClick={()=>setExpandNavbar(false)}>
                  Login <IoIosLogIn />
                </Link>
                <Link to="/signup" className="text-white nav-link" onClick={()=>setExpandNavbar(false)}>
                  SignUp <IoPersonAdd />
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
