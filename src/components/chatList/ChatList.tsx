import "./chatList.css";

import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Box, CardActionArea, CardMedia } from "@mui/material";

export interface ChatListObject {
  name: string;
  imgUrl: string;
  last_Message: string;
}

interface ChatListProps {
  onChatCardClick: (chatData: ChatListObject) => void;
}

function ChatList({ onChatCardClick }: ChatListProps) {
  const [chatList, setChatList] = useState<ChatListObject[]>([]);

  useEffect(() => {
    const chatLists = [
      {
        name: "John",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/e/e0/JohnAbraham.jpg",
        last_Message:
          "Hey, how's it going how are you whats upall good is it not sfbashvv kdvkbsdu kdvbsdlasd kashdbvasdkjv kasdvbajsd asdhbasfhljkfl skfasfkjadf usygaofajda;u iuffasdknadks shdfbvaksdnva akshfbaskdvnbadv?",
      },
      {
        name: "Sarah",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/91/Sarah_Alami.webp",
        last_Message: "I'll be there in 10 minutes.",
      },
      {
        name: "Michael",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/3/31/Michael_Jackson1_1988.jpg",
        last_Message: "Did you watch the game last night?",
      },
      {
        name: "Emily",
        imgUrl:
          "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcRmNuSKOvCtaORNqsjgghuZ2ZPTN78B2g4Fu0-hUGzD6e0Tr0I_F7aILIDgxkLuXn1V38abF_NR3ujRB1M",
        last_Message: "Let's catch up for coffee soon.",
      },
      {
        name: "David",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/9/94/King_David%2C_the_King_of_Israel.jpg",
        last_Message: "Don't forget to bring the documents.",
      },
      {
        name: "Jessica",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/46/Jessica_Jung_for_Vogue_Taiwan_on_20032021_%281%29.png",
        last_Message: "How's the project coming along?",
      },
      {
        name: "Alexa",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/0/03/Alexa-chung-hair-first-look-at-her-l-oreal-campaign-35539_w1000.jpg",
        last_Message: "When are you coming back from vacation?",
      },
      {
        name: "Lisa",
        imgUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5vR6BJh8C2vIXHYM9rviQzBiIZh1L6aZbAGPnDAWPP_OapDn1",
        last_Message: "I found a great recipe for dinner tonight.",
      },
      {
        name: "Daniel",
        imgUrl:
          "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcRSEEl87q0mudL6xCUxEALrjQX7Vhrg3f4TDX2XE3WE8RSid19bbRdiKsQieBNjz1Q3gEjHuBtNpojdv70",
        last_Message: "Let's plan a hiking trip for the weekend.",
      },
      {
        name: "Olivia",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c3/Olivia_Rodrigo_with_Dr_Fauci_1.png",
        last_Message: "Can you help me with the presentation?",
      },
      {
        name: "Olivia1",
        imgUrl:
          "https://upload.wikimedia.org/wikipedia/commons/c/c3/Olivia_Rodrigo_with_Dr_Fauci_1.png",
        last_Message: "Can you help me with the presentation?",
      },
    ];
    setChatList([...chatLists]);
  }, []);

  return (
    <div className="chatList">
      <div className="chatListWrapper">
        {chatList.map((x) => (
          <div key={x.name} onClick={() => onChatCardClick(x)}>
            <Card
              variant="outlined"
              sx={{
                pt: 2,
                pb: 2,
                pl: 1,
                pr: 1,
                cursor: "pointer",
                display: "flex",
                alignItems: "flex-start",
                minWidth: 70,
                maxWidth: 300,
                ":hover": {
                  backgroundColor: "skyblue",
                },
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 70,
                  height: 70,
                  objectFit: "cover",
                  borderRadius: "25%",
                }}
                image={x.imgUrl}
                alt="I"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  ml: 2.5,
                }}
              >
                <span className="chatUserName">{x.name}</span>
                <span className="chatLastMessage">{x.last_Message}</span>
              </Box>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
