import React, { useState, useEffect } from "react";
import { useDash } from "../../../context/DashboardContext";
import FlatsBadge from "./FlatsBadge";
import FlatList from "./FlatList";

function Flats() {
  const [isLoading, setLoading] = useState(false);
  const [flats, setFlats] = useState([]);
  const { getFlats, getTenant } = useDash();

  useEffect(() => {
    setLoading(false);

    let flatsData = [];

    //fix order
    function flatsDocs() {
      getFlats().then((docs) => {
        docs.forEach((doc) => {
          //push all the data to flatsData
          flatsData.push({
            id: doc.id,
            tenantInfo: {},
            data: doc.data(),
          });
          /*
          If doc.data has tenant then get the tenant info
          nd update the flat with the tenant before 
          update flats to keep the order asc
          */
          if (doc.data().tenant) {
            getTenant(doc.data().tenant).then((t) => {
              flatsData.map((item) => {
                if (item.data.tenant) {
                  return Object.assign(item.tenantInfo, t.data());
                }
                return item;
              });

              setFlats(flatsData);
              setLoading(true);
            });
          }
        });
      });
    }

    flatsDocs();
  }, [getFlats, getTenant]);

  return (
    <>
      {isLoading}
      <FlatsBadge />
      <FlatList isLoading={isLoading} flats={flats} />
    </>
  );
}

export default Flats;
