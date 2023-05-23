import { AppBar, Box, Button, Card, Toolbar, Typography } from "@mui/material";
import React from "react";
import "./Withdraw.css";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Withdraw() {
  return (
    <div className="ww11" >
      <Card
        className="w1"
        style={{
          paddingRight: "20px",
          backgroundColor: "#FFFFFF",
         
        }}
      >
        <div className="www11" >
          <Box>
            <Toolbar>
              <Typography className="w2" color="#800080;">
                Referral Earning
              </Typography>
            </Toolbar>
            <Toolbar variant="dense">
              <Typography className="w3" variant="h5" component="div">
                <CurrencyRupeeIcon /> 2,500
              </Typography>
            </Toolbar>
          </Box>
          <Box className="q7">
            <Toolbar>
              <Typography className="w2" color="#800080;">
                Total Referrals{" "}
              </Typography>
            </Toolbar>
            <Toolbar variant="dense">
              <Typography className="w3" variant="h5" component="div">
                7
              </Typography>
            </Toolbar>
          </Box>
          
          <Box className="a1111">
            <Toolbar>
              <Typography className="w2" color="#800080;">
                Wallet Balance{" "}
              </Typography>
            </Toolbar>
            <Toolbar variant="dense">
              <Typography className="w3" variant="h5" component="div">
                <CurrencyRupeeIcon /> 500
              </Typography>
            </Toolbar>
          </Box>
        </div>
        <Button  className="bu1111"
          variant="contained"
          style={{
            backgroundColor: "#800080",
            borderRadius: 20,
           
          }}
        >
          Withdraw Balance
        </Button>
      </Card>

      <Box>
        <p className="w4"> Your Referral Code </p>
        <p className="w6">
          <p className="w5">EDCH54</p>
        </p>
      </Box>
    </div>
  );
}

export default Withdraw;
