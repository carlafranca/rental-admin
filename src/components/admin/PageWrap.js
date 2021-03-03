import React from "react";
import { useParams } from "react-router-dom";

function PageWrap() {
  let { topicId } = useParams();
  return <div>Create New Tenant {topicId}</div>;
}

export default PageWrap;
