import React from 'react';
import "./Ui.css";
import AppBar from './AppBar';
import { Link } from '@mui/material';

function Ui() {
  return (
    <>
    <AppBar />
    <div className='uii'>
    
    <div className='ui'>
    UI/UX >  <Link  to="/" underline="hover" color={"#000000"}>
        {' Refer & Earn '}
      </Link> 
    </div>
    </div>
    </>
  )
}

export default Ui;