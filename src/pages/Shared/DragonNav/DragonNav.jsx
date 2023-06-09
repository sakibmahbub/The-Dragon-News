import React from "react";
import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const DragonNav = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const handleLogout = () => {
    logOutUser()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link className="text-decoration-none ms-2" to="/category/0">
              Home
            </Link>
            <Link className="text-decoration-none ms-2" to="/">
              About
            </Link>
            <Link className="text-decoration-none ms-2" to="/">
              Featured
            </Link>
          </Nav>
          <Nav>
            {user && <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>}
            {user ? (
              <Button onClick={handleLogout} variant="dark">
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button variant="dark">Login</Button>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DragonNav;
