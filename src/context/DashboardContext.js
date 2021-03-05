import React, { useContext } from "react";
import { db } from "../firebase";

//Create Context
const DashContext = React.createContext();

//Hook to use the context state and fn on components
export function useDash() {
  return useContext(DashContext);
}

//Create the provider
export function DashProvider({ children }) {
  const getFlats = async () => {
    const data = await db.collection("flats").orderBy("doorNumb", "asc").get();
    return data.docs;
  };

  const getTenant = async (id) => {
    const data = await db.collection("tenants").doc(id).get();
    return data;
  };

  const getTenants = async () => {
    const tenants = await db.collection("tenants").get();
    return tenants.docs;
  };

  const updateFlat = (id) => {};

  const value = {
    getFlats,
    getTenant,
    getTenants,
    updateFlat,
  };

  return <DashContext.Provider value={value}>{children}</DashContext.Provider>;
}
