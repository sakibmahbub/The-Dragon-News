import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const registerHangle = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch((error) => console.log(error));
  };
  return (
    <Container className="w-25 mt-5 mx-auto">
      <h2 className="mb-4">Please Register</h2>
      <Form onSubmit={registerHangle}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control name="photo" type="text" placeholder="url" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            name="accept"
            label="Accept terms & conditions"
          />
        </Form.Group>
        <Button className="mb-2 w-100" variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text>
          Don't have an account? <Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-dangerr"></Form.Text>
        <Form.Text className="text-success"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
