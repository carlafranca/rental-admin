import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import { DashProvider } from "../context/DashboardContext";
import PrivateRoute from "./PrivateRoute";
import Login from "./users/Login";
import ResetPassword from "./users/ResetPassword";
import Signup from "./users/Signup";
import Dashboard from "./admin/Dashboard";
import Home from "./web/Home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <DashProvider>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/login" component={Login} />
            <Route path="/reset-password" component={ResetPassword} />
            <PrivateRoute path="/signup" component={Signup} />

            <PrivateRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </DashProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
