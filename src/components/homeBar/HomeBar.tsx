import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import TonalityOutlinedIcon from "@mui/icons-material/TonalityOutlined";
import "./homeBar.css";
import { Divider } from "@mui/material";

function HomeBar() {
  return (
    <div className="homeBar">
      <div className="homeBarWrapper">
        <div className="topIcons">
          <ul className="homeBarIconList">
            <li className="homeBarIcon">
              <HomeOutlinedIcon sx={{ color: "#1877f2", fontSize: 30 }} />
            </li>
            <li className="homeBarIcon">
              <LocalPhoneOutlinedIcon sx={{ color: "#1877f2", fontSize: 30 }} />
            </li>
            <li className="homeBarIcon">
              <TonalityOutlinedIcon sx={{ color: "#1877f2", fontSize: 30 }} />
            </li>
          </ul>
        </div>
        <div className="bottomIcons">
          <ul className="homeBarIconList">
            <li className="homeBarIcon">
              <SettingsOutlinedIcon sx={{ color: "#1877f2", fontSize: 30 }} />
            </li>
            <li className="homeBarIcon">
              <HelpOutlineOutlinedIcon
                sx={{ color: "#1877f2", fontSize: 30 }}
              />
            </li>
          </ul>
        </div>
      </div>
        <Divider orientation="vertical" sx={{
          top:50,
          left:50,
          fontWeight: 'bold',
          position: 'fixed'
        }}/>
    </div>
  );
}

export default HomeBar;
