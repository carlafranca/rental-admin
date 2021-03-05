import React, { useState } from "react";
import { Switch, Link, useHistory, useRouteMatch } from "react-router-dom";
import { Container, Row, Col, Button, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import PrivateRoute from "../PrivateRoute";
import Flats from "./flats/Flats";
import FlatUpdate from "./flats/FlatUpdate";
import NewTenant from "./NewTenant";
import Tenants from "./tenants/Tenants";

function Dashboard() {
  let { path, url } = useRouteMatch();
  const history = useHistory();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch (err) {
      setError(`Fail to Logout ${err.message}`);
    }
  };

  return (
    <>
      <header
        className="w-100 mb-4"
        style={{ background: "#000", color: "#fff" }}
      >
        <Container className="align-items-center navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
          <h1>Dashboard</h1>
          <p className="mb-0 mt-0" style={{ marginLeft: "auto" }}>
            Usuario: {currentUser.email}
          </p>
          <Button className="ml-3" variant="light" onClick={handleLogout}>
            Log Out
          </Button>
        </Container>
      </header>
      <main>
        <Container>
          <Row className="bd-sidebar">
            <ul lg="3" className="list-group">
              <Link to="/" className="list-group-item">
                Home
              </Link>
              <Link to={`${url}`} className="list-group-item">
                Dashboard
              </Link>
              <Link to={`${url}/flats`} className="list-group-item">
                Apartamentos
              </Link>
              <Link to={`${url}/tenants`} className="list-group-item">
                Locatários
              </Link>
              <Link to={`${url}/new-tenant`} className="list-group-item">
                Criar Novo Locatário
              </Link>
            </ul>
            <Col lg="9">
              {error && <Alert variant="danger">{error}</Alert>}
              <Switch>
                <PrivateRoute exact path={`${path}/`} component={Flats} />
                <PrivateRoute path={`${path}/flats`} component={Flats} />
                <PrivateRoute path={`${path}/tenants`} component={Tenants} />
                <PrivateRoute
                  path={`${path}/new-tenant`}
                  component={NewTenant}
                />
                <PrivateRoute
                  path={`${path}/flat-update`}
                  component={FlatUpdate}
                />
              </Switch>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Dashboard;
