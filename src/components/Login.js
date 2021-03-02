import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";

function Login() {
  const emailRef = useRef();
  const pswRef = useRef();

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log in</h2>
          <Form>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="psw">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pswRef} required />
            </Form.Group>
            <Button type="submit" className="w-100">
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">Forgot Password? Retrieve it</div>
    </>
  );
}

export default Login;
