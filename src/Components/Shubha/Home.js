import React from "react";
import { Link } from "react-router-dom";
import AppBar from "../comn/AppBar";
import "./Home.css";
import Withdraw from "../Refer/Withdraw";
import How from "../Refer/How";

function Home() {
  return (
    <div className="main">
      <div className="main1">
        <AppBar />

        <ul >
          <Link className="ul1" to="./">UI/UX > </Link>

          <Link className="ul2" to="/src/Componets/Shubha/Contact.js"> Refer & Earn </Link>
        </ul>
       
      </div>
      <Withdraw />
      <How />
    </div>
  );
}

export default Home;
