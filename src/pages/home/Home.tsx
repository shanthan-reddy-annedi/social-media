import React from "react";
import TopBar from "../../components/topBar/TopBar";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import Feed from "../../components/feed/Feed";
import "./home.css";
import HomeBar from "../../components/homeBar/HomeBar";
import ChatList from "../../components/chatList/ChatList";

function Home() {
  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <HomeBar />
        <ChatList />
        {/* <SideBar /> */}
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
