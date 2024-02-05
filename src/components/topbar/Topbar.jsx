// import React from "react";
import "./topbar.css";
import {
  NotificationsNone,
  AccountCircle,
  Settings,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          {/* <span className="logo">Posta E-Board</span> */}
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          {/* <div className="topbarIconContainer">
            <AccountCircle />
          </div> */}
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <Link to={"/profile"}>
            <img
              src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="topAvatar"
            />
          </Link>
          {/* <img
            src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="topAvatar"
          /> */}
        </div>
      </div>
    </div>
  );
}
