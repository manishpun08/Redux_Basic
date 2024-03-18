import React from "react";
import { useSelector } from "react-redux";

const ShowUser = () => {
  const { userName } = useSelector((state) => state.user);
  return <div>{userName}</div>;
};

export default ShowUser;
