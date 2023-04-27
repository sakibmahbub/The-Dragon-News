import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <div className="mb-5">
        <h4 className="mb-3">Login with</h4>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle /> Login with google
        </Button>
        <Button variant="outline-secondary">
          <FaGithub /> Login with github
        </Button>
      </div>
      <div className="mb-5">
        <h4 className="mb-3">Find us on</h4>
        <ListGroup>
          <ListGroup.Item className="d-flex align-items-center gap-2">
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center gap-2">
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="d-flex align-items-center gap-2">
            <FaLinkedinIn /> Linkedin
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <QZone></QZone>
      </div>
      <div>
        <img src={bg} />
      </div>
    </div>
  );
};

export default RightNav;
