import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { IoIosLogIn } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { SiMoneygram } from "react-icons/si";

export const Header = () => {
  return (
    <Navbar expand="md" className=" text-white">
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
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav" className="text-white">
          <Nav className="ms-auto">
            <Link to="/" className="text-white nav-link">
              Login <IoIosLogIn />
            </Link>
            <Link to="/signup" className="text-white nav-link">
              SignUp <IoPersonAdd />
            </Link>
            <Link to="/logout" className="text-white nav-link">
              LogOut <IoExitOutline />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
