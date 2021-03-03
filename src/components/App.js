import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import NewTenant from "./NewTenant";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/new-tenant" component={NewTenant} />
              <PrivateRoute path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/reset-password" component={ResetPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
