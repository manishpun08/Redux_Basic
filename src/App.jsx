import React from "react";
import "./App.css";
import UserPage from "./component/UserPage";
import ShowUser from "./component/ShowUser";
import CustomSwitch from "./component/CustomSwitch";
import Bulb from "./component/Bulb";

const App = () => {
  return (
    <div>
      {/* <UserPage />
      <ShowUser /> */}
      <CustomSwitch />
      <Bulb />
    </div>
  );
};

export default App;
