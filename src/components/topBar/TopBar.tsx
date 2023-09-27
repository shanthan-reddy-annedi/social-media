import React from "react";
import "./topBar.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";

function TopBar() {
  return (
    <div className="topbarContainer">
      {/* continas the icon */}
      <div className="topBarLeft">
        <span className="topBarLogo">ThisIsALogo</span>
      </div>
      {/* contains the search bar */}
      <div className="topBarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon" />
          <input placeholder="search for a friend" className="searchInput" />
        </div>
      </div>

      {/* contains the link and profile picture*/}
      <div className="topBarRight">
        <div className="topbarLinks">
          <span className="topbarLinks">Home page</span>
          <span className="topbarLinks">Time line</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <ChatIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <NotificationsIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/profilePic.webp" alt="" className="topbarImg" />
      </div>
    </div>
  );
}

export default TopBar;
