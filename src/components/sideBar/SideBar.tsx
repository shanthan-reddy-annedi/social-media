import React from "react";
import "./sideBar.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import SchoolIcon from "@mui/icons-material/School";
import PersonIcon from "@mui/icons-material/Person";
import { Button } from "@mui/material";

function SideBar() {
  const profiles = [
    {
      name: "Anjali",
      imgUrl:
        "https://www.pinterest.com/pin/nazriya-nazim-in-2023--67413325664826135/",
    },
    {
      name: "Priya",
      imgUrl: "https://www.pinterest.com/pin/702280135632939180/",
    },
    {
      name: "Neha",
      imgUrl: "https://www.pexels.com/photo/woman-holding-pink-tulips-1386604/",
    },
    { name: "Swati", imgUrl: "https://unsplash.com/photos/JqLazH2s0fY" },
    { name: "Pooja", imgUrl: "https://unsplash.com/photos/W7b3eDUb_2I" },
    { name: "Kavita", imgUrl: "https://unsplash.com/photos/_7xm_xn4yDI" },
    { name: "Meera", imgUrl: "https://unsplash.com/photos/6PROVhY2Yq4" },
    { name: "Meera", imgUrl: "https://unsplash.com/photos/6PROVhY2Yq4" },
    { name: "Meera", imgUrl: "https://unsplash.com/photos/6PROVhY2Yq4" },
    { name: "Meera", imgUrl: "https://unsplash.com/photos/6PROVhY2Yq4" },
    { name: "Meera", imgUrl: "https://unsplash.com/photos/6PROVhY2Yq4" },
  ];

  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <RssFeedIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Feed</span>
          </li>

          <li className="sideBarListItem">
            <ChatIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Chat</span>
          </li>

          <li className="sideBarListItem">
            <PlayCircleIcon className="sideBarIcon" />
            <span className="sideBarListItemText">Play</span>
          </li>

          <li className="sideBarListItem">
            <GroupsIcon className="sideBarIcon" />
            <span className="sideBarListItemText">GroupsIcon</span>
          </li>

          <li className="sideBarListItem">
            <SchoolIcon className="sideBarIcon" />
            <span className="sideBarListItemText">SchoolIcon</span>
          </li>

          <li className="sideBarListItem">
            <InsertInvitationIcon className="sideBarIcon" />
            <span className="sideBarListItemText">InsertInvitationIcon</span>
          </li>

          <li className="sideBarListItem">
            <BookmarkIcon className="sideBarIcon" />
            <span className="sideBarListItemText">BookmarkIcon</span>
          </li>

          <li className="sideBarListItem">
            <QuestionMarkIcon className="sideBarIcon" />
            <span className="sideBarListItemText">QuestionMarkIcon</span>
          </li>

          <li className="sideBarListItem">
            <WorkOutlineIcon className="sideBarIcon" />
            <span className="sideBarListItemText">WorkOutlineIcon</span>
          </li>
        </ul>
        <Button variant="outlined" className="showMoreButton">
          show More
        </Button>
        <hr className="sideBarHr"></hr>
        <ul className="SideBarprofiles">
          {profiles.map((x) => (
            <li className="sideBarprofileItems" key={x.name}>
              <PersonIcon className="sideBarprofileIcon" />
              <img src={x.imgUrl} alt="" className="sideBarProfileImages" />
              <p className="sideBarprofileText"> {x.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
