import React, { useEffect, useRef, useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Box,
  IconButton,
  InputBase,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./chat.css";
import { ChatListObject } from "../chatList/ChatList";

const initialChatHistory = [
  { user: "other", message: "Hello!", timestamp: "09:00 AM" },
  { user: "user", message: "Hi there!", timestamp: "09:05 AM" },
  { user: "other", message: "How are you?", timestamp: "09:10 AM" },
  { user: "user", message: "I am good, thanks!", timestamp: "09:15 AM" },
];

function Chat(chatOptions: ChatListObject) {
  const [chatHistory, setChatHistory] = useState(initialChatHistory);
  const [newMessage, setNewMessage] = useState("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView();
    }
  }, [chatHistory]);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    if (newMessage.trim() !== "") {
      setChatHistory([
        ...chatHistory,
        { user: "user", message: newMessage, timestamp: getTime() },
      ]);
      setNewMessage("");
    }
  };

  const getTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`;
  };

  return (
    <div className="chat">
      <div className="chatDetailBar">
        <img src={chatOptions.imgUrl} alt="" className="chatDetailBarImage" />
      </div>
      <div className="chatHistory">
        {chatHistory.map((message, index) => (
          <div key={index}>
            {message.user === "other" ? (
              <div className="leftChat">
                <Typography variant="body1" className="chatTextOverflow">
                  {message.message}
                </Typography>
                <Typography
                  variant="caption"
                  fontSize={"10px"}
                  fontWeight={"400"}
                >
                  {message.timestamp}
                </Typography>
              </div>
            ) : (
              <div className="rightChat">
                <Typography variant="body1" className="chatTextOverflow">
                  {message.message}
                </Typography>
                <Typography
                  variant="caption"
                  fontSize={"10px"}
                  fontWeight={"400"}
                >
                  {message.timestamp}
                </Typography>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>
      <div className="sendMessage">
        <form onSubmit={handleSendMessage}>
          <Box
            sx={{
              maxWidth: "100%",
              display: "flex",
              border: "1px solid #ccc",
              transition: "border-color 0.3s",
              borderRadius: "15px",
              "&:hover": {
                borderColor: "blue",
              },
              "&:focus-within": {
                borderColor: "green",
              },
            }}
          >
            <InputBase
              sx={{ ml: 2, flex: 1 }}
              placeholder="Send Message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
              <SendIcon />
            </IconButton>
          </Box>
        </form>
      </div>
    </div>
  );
}

export default Chat;
