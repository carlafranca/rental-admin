import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const emailRef = useRef();
  const pswRef = useRef();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //review the try/catch
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, pswRef.current.value);
      history.push("/");
    } catch (err) {
      setError(`Fail to Login ${err.message}`);
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
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
            <Button disable={loading} type="submit" className="w-100">
              Log In
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Forgot Password? <Link to="/reset-password">Reset Password</Link>
      </div>
    </>
  );
}

export default Login;
