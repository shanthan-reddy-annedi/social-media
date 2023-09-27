import React from "react";
import TopBar from "../../components/topBar/TopBar";
import RightBar from "../../components/rightBar/RightBar";
import SideBar from "../../components/sideBar/SideBar";
import Feed from "../../components/feed/Feed";
import "./home.css"

function Home() {
  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
}

export default Home;
