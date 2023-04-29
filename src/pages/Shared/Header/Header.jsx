import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container className="pt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex bg-light p-4">
        <Button variant="danger">Breaking</Button>
        <Marquee className="text-danger font-weight-bold" speed={100}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#">About</Nav.Link>
              <Nav.Link href="#">Career</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#">Profile</Nav.Link>
              <Nav.Link eventKey={2} href="#">
                <Button variant="dark">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
