import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { changeUserName } from "../store/slice/UerSlice";

const UserPage = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <TextField
        label="Enter Your Name"
        onChange={(event) => {
          const name = event.target.value;
          dispatch(changeUserName(name));
        }}
      />
    </div>
  );
};

export default UserPage;
