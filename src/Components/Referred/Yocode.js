import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./Yocode.css";
import { Box, Card, CardContent } from "@mui/material";

function Yocode() {
  return (
    <div>
      <div>
        <p className="arr11">
          <ArrowBackIcon
            style={{
              //   color: "rgb(128, 0, 128)",
              //   backgroundColor: "#cbbfbf",

              borderRadius: 50,
              // borderColor: "red",
              // fontSize: 50,
              //   padding: 8,
              height: 15,
              width: 35,
            }}
         

          />
          
           go back
        </p>
      </div>
      <div className="bo2525">
        <Box>
          <div className="h159h">
            <p className="yrc11">Your Referral Code </p>
            <p className="">
              <p className="w5511">EDCH54</p>
            </p>
          </div>
        </Box>
        <Box>
          <Card  className="wb115" sx={{}}>
            <CardContent>
                <p  className="wal5522">Wallet Balance</p>
                <p className="r500">₹ 500</p>
            </CardContent>
          </Card>
        </Box>
      </div>
    </div>
  );
}

export default Yocode;
