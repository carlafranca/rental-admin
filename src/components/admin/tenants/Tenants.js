import React, { useState, useEffect } from "react";
import { useDash } from "../../../context/DashboardContext";
import { Link } from "react-router-dom";
import TenantList from "./TenantList";

function Tenants() {
  const [isLoading, setLoading] = useState(false);
  const [tenants, setTenants] = useState([]);
  const { getTenants } = useDash();

  useEffect(() => {
    setLoading(false);

    let tenantsData = [];

    function tenantsDocs() {
      getTenants().then((docs) => {
        docs.forEach((doc) => {
          tenantsData.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setTenants(tenantsData);
        setLoading(true);
      });
    }

    tenantsDocs();
  }, [getTenants]);

  return (
    <>
      <Link className="btn btn-primary btn-sm" to="/dashboard/new-tenant">
        Crie Novo Locatário
      </Link>
      {isLoading && (
        <>
          <h2 className="mt-4 mb-3">Lista de Locatários</h2>
          <TenantList isLoading={isLoading} tenants={tenants} />
        </>
      )}
    </>
  );
}

export default Tenants;
