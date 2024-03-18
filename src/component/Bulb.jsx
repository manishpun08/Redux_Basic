import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Bulb = () => {
  const { light } = useSelector((state) => state.user);
  return (
    <div>
      <Box
        sx={{
          height: "200px",
          width: "200px",
          borderRadius: "50%",
          background: light ? "orange" : "black",
        }}
      ></Box>
    </div>
  );
};

export default Bulb;
