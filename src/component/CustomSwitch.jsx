import { Switch } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleLIght } from "../store/slice/userSlice";

const CustomSwitch = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <Switch
        onChange={(_, value) => {
          dispatch(toggleLIght(value));
        }}
      />
    </div>
  );
};

export default CustomSwitch;
