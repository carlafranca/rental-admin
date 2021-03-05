import React from "react";
import { Alert } from "react-bootstrap";

import moment from "moment";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";
import { useHistory } from "react-router-dom";

function FlatList({ isLoading, flats }) {
  const history = useHistory();
  const today = moment();

  //convert paymentStatus to a hook
  const paymentStatus = (paymentDay, status) => {
    //If is payed
    if (status) return "success";
    //Check if contractStart is a valid date string
    if (!moment(paymentDay, "DD-MM-YYYY").isValid()) return null;

    //ContractStart day is the payment day
    //Get the difference between to payday and today in days
    let dt = moment(paymentDay, "DD-MM-YYYY");
    let diff = Math.abs(today.format("DD") - dt.format("DD"));

    //if payment delay is more than 5 days
    if (diff > 5) return "danger";
    //if payment delay is less than 5 days but
    if (diff > 1 && diff <= 5) return "warning";
  };

  const edit = () => {
    history.push(`/dashboard/flat-update`);
  };

  return (
    <>
      {isLoading &&
        flats.map((flat) => {
          let payStatus = paymentStatus(
            flat.data.contractStart,
            flat.data.paymentStatus
          );
          return (
            <Alert
              key={flat.id}
              variant={!flat.data.isRented ? "secondary" : payStatus}
            >
              <div className="d-flex align-items-center justify-content-start">
                <p className="mb-0">Apt: {flat.data.doorNumb}</p>
                {!(Object.keys(flat.tenantInfo).length === 0) && (
                  <>
                    <p className="mb-0 ml-2">
                      {" | "} Locatário: {flat.tenantInfo.fName}{" "}
                      {flat.tenantInfo.lName}
                    </p>
                    <p className="mb-0 ml-2">
                      {" | "} Phone: {flat.tenantInfo.cellPhone}
                    </p>

                    <EditIcon
                      onClick={edit}
                      style={{ marginLeft: "auto", cursor: "pointer" }}
                    />
                  </>
                )}
              </div>
            </Alert>
          );
        })}
    </>
  );
}

export default FlatList;
