import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const emailRef = useRef();
  const pswRef = useRef();
  const confirmPswRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (pswRef.current.value !== confirmPswRef.current.value) {
      return setError("Passwords do not match");
    }
    //review the try/catch
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, pswRef.current.value);
      history.push("/");
    } catch (err) {
      setError(`Fail to create an account ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="psw">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={pswRef} required />
            </Form.Group>
            <Form.Group id="psw">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" ref={confirmPswRef} required />
            </Form.Group>
            <Button disable={loading} type="submit" className="w-100">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
  );
}

export default Signup;
