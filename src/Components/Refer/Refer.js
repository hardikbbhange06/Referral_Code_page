import React from "react";
import AppBar from "../comn/AppBar";
import "./Refer.css";
import Ui from "../comn/Ui";
import Withdraw from "./Withdraw";
import How from "./How";
import Hardik from "../comn/Hardik";

function Refer() {
  return (
    <div className="main">
      <div className="main1">
        <AppBar />
        <Hardik />
        {/* <Ui /> */}
      </div>
      <Withdraw />
      <How />
    </div>
  );
}

export default Refer;
