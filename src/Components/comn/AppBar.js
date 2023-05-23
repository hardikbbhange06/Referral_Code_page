import { Box } from "@material-ui/core";
import {  Link, Toolbar, Typography } from "@mui/material";
import React from "react";
import SplitButton from "./SplitButton"
import Logo from "../Logo.png";
import "./AppBar.css";

function AppBar() {
  return (
    <div className="nav">
      <Box
        sx={{
          textAlign: "center",
          width: 1366,
          Height: 73.03,
          bgcolor: "",
        }}
      >
        <Toolbar>
          <img className="logo" src={Logo} />{" "}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Link
            className="bu1"
            underline="none"
            href="/" 
            color="rgba(128, 0, 128, 0.25);"
          >
            {"My Assignment"}
          </Link>
          <Link
            className="bu2"
            underline="none"
            href="/"
            color="rgba(128, 0, 128, 0.25);
"
          >
            {"Chat with Mentor"}
          </Link>
          <div>
          < SplitButton  />
          </div>
          
        </Toolbar>
      </Box>
    </div>
  );
}

export default AppBar;
