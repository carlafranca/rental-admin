import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function TenantList({ isLoading, tenants }) {
  return (
    <div className="d-flex">
      {isLoading &&
        tenants.map((tenant) => (
          <Card key={tenant.id} style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>
                {tenant.data.fName} {tenant.data.lName}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Phone: {tenant.data.cellPhone}
              </Card.Subtitle>
              <Card.Text>Apt: {tenant.data.doorNumb}</Card.Text>
              <Link to="/dashboard/edit-tenant">Edit Tenant</Link>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default TenantList;
