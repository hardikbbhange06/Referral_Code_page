import React from "react";
import "./How.css";
import LocalOfferRoundedIcon from "@mui/icons-material/LocalOfferRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import { Box } from "@material-ui/core";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import PercentIcon from "@mui/icons-material/Percent";

import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import { Link } from "@mui/material";

function How() {
  return (
    <div>
      <div>
        <p className="h1">How does it work ?</p>
      </div>
      <div>
        <div className="h5">
          <div className="h2">
            <div>
              <GroupsRoundedIcon
                style={{
                  color: "rgb(128, 0, 128)",
                  backgroundColor: "#cbbfbf",

                  borderRadius: 50,
                  // borderColor: "red",
                  // fontSize: 50,
                  padding: 8,
                  height: 65,
                  width: 65,
                }}
              />
            </div>
            
            <div className="f1111">
              <div className="h3">Invite your Friends</div>
              <div className="h4">
                Share the link tutedude.com with your friends
              </div>
            </div>
          </div>
          <div className="h22">
            <div>
              <LocalOfferRoundedIcon
                style={{
                  color: "rgb(128, 0, 128)",
                  backgroundColor: "#cbbfbf",

                  borderRadius: 50,
                  // borderColor: "red",
                  // fontSize: 50,
                  padding: 8,
                  height: 70,
                  width: 70,
                }}
              />
            </div>
            <div className="f1111">
              <div className="h3">Friend purchases any course</div>
              <div className="h44">
                Using your REFERRAL CODE in the payments page
              </div>
            </div>
          </div>
        </div>
        <div className="h6">
          <div className="h2">
            <div>
              <CurrencyRupeeRoundedIcon
                style={{
                  color: "rgb(128, 0, 128)",
                  backgroundColor: "#cbbfbf",

                  borderRadius: 50,
                  // borderColor: "red",
                  // fontSize: 50,
                  padding: 8,
                  height: 65,
                  width: 65,
                }}
              />
            </div>
            <div className="f1111">
              <div className="h3">You get ₹ 200 as referral money</div>
              <div className="h4">
                On his overall fee on successful purchase using your referral
                code{" "}
              </div>
            </div>
          </div>
          <div className="h22">
            <div>
              <PercentIcon
                style={{
                  color: "rgb(128, 0, 128)",
                  backgroundColor: "#cbbfbf",

                  borderRadius: 50,
                  // borderColor: "red",
                  // fontSize: 50,
                  padding: 8,
                  height: 65,
                  width: 65,
                }}
              />
            </div>
            <div className="f1111">
              <div className="h3">Your Friend gets ₹ 200 Off </div>
              <div className="h4">
              On his overall fee on successful purchase using your referral code 
              </div>
            </div>
          </div>
        </div>
        <div className="h222" >
          <div>
            <AccountBalanceWalletIcon
              style={{
                color: "rgb(128, 0, 128)",
                backgroundColor: "#cbbfbf",

                borderRadius: 50,
                // borderColor: "red",
                // fontSize: 50,
                padding: 8,
                height: 65,
                width: 65,
              }}
            />
          </div>
          <div className="f1111">
            <div className="h3">Transfer money from wallet</div>
            <div className="h4">
            When the wallet balance reaches
₹200 or more, you can withdraw it
            </div>
          </div>
        </div>
      </div>
      <div className="h7">
        <Link href="/" underline="none"  color={" #800080"}>
          {'Friends Who Enrolled'}
        </Link>
      </div>
      <div className="h8">
        <Link href="/" underline="none" color={" #800080"}>
          {'Terms & Conditions'}
        </Link>
      </div>
    </div>
  );
}

export default How;
