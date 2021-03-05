import React from "react";
import { Badge } from "react-bootstrap";

function FlatsBadge() {
  return (
    <div className="d-flex align-items-center mb-3">
      Pagamento e Disponibilidade:
      <Badge variant="secondary" className="ml-2">
        Livre
      </Badge>
      <Badge variant="success" className="ml-2">
        Em dia
      </Badge>
      <Badge variant="warning" className="ml-2">
        Atrasado 5 dias
      </Badge>
      <Badge variant="danger" className="ml-2">
        Atrasado mais de 5 dias
      </Badge>
    </div>
  );
}

export default FlatsBadge;
