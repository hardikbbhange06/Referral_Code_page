import React from 'react';
import AppBar from '../comn/AppBar';
import "./Contact.css"
import { Link } from 'react-router-dom';
import Yocode from '../Referred/Yocode';
import Enrolled from './Enrolled';

function Contact() {
  return (
    <div className="main">
    <div className="main1">
    <AppBar />
    <ul >
          <Link  className="ul1" to="/">UI/UX > </Link>

          <Link className="ul2" to="/src/Componets/Shubha/Contact.js"> Refer & Earn </Link>

          <Link className="ul3" to="/">  > Friends Referred  </Link>

        </ul>

        

    </div>
    <Yocode />
    <Enrolled />
    </div>
  )
}

export default Contact;