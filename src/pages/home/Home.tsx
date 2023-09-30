import React, { useState } from "react";
import TopBar from "../../components/topBar/TopBar";
import "./home.css";
import HomeBar from "../../components/homeBar/HomeBar";
import ChatList, { ChatListObject } from "../../components/chatList/ChatList";
import Chat from "../../components/chat/Chat";

function Home() {
  const [selectedChat, setSelectedChat] = useState<ChatListObject | null>(null);

  const handleChatCardClick = (chatData: ChatListObject) => {
    setSelectedChat(chatData);
  };

  return (
    <div>
      <TopBar />
      <div className="homeContainer">
        <HomeBar />
        <ChatList onChatCardClick={handleChatCardClick} />
        {selectedChat && <Chat {...selectedChat} />}
      </div>
    </div>
  );
}

export default Home;
