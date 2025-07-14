import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import botAvatarImage from "../assets/Favicon.ico"; 

const steps = [
  {
    id: 1,
    message: "Hello! I am OGE, your friendly chatbot.",
    trigger: 2,
  },
  {
    id: 2,
    message: "What is your name?",
    trigger: 3,
  },
  {
    id: 3,
    user: true,
    trigger: 4,
  },
  {
    id: 4,
    message: "Hi {previousValue}, nice to meet you! How can I help you?",
    trigger: 5,
  },
  {
    id: 5,
    options: [
      { value: 1, label: "About us", trigger: 6 },
      { value: 2, label: "Our services", trigger: 7 },
      { value: 3, label: "Connects", trigger: 8 },
      { value: 4, label: "Contact", trigger: 9 },
    ],
  },
  {
    id: 6,
    message:
      "Frontend Developer, CMS specalist(wordpress) and a BSc computer scientist.",
    trigger: 5,
  },
  {
    id: 7,
    message:
      "Responsive Frontend Development, Search Engine Optimization(SEO), Custom WordPress Solutions, Technical writing, Unit Testing and Scalable, Clean Code.",
    trigger: 5,
  },
  {
    id: 8,
    message:
      "You can connect with OGE via all social media handles @geliettech.",
    trigger: 5,
  },
  {
    id: 9,
    message:
      "Email us @julietogechi27@gmail.com.",
    trigger: 5,
  },
];

const theme = {
  background: "white",
  headerBgColor: "#0891b2",
  headerFontSize: "20px",
  botBubbleColor: "#0891b2",
  headerFontColor: "white",
  botFontColor: "white",
  userBubbleColor: "#1a202c",
  userFontColor: "white",
};

// Set some properties of the bot
const config = {
  botAvatar: botAvatarImage,
};

const Bot = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div>
      <div
        className="fixed bottom-5 sm:right-8 right-4 z-[999] cursor-pointer text-white text-4xl bg-cyan-600 w-16 h-16 flex items-center justify-center rounded-full animate-bounce"
        onClick={toggleChatbot}
      >
        <ion-icon name="chatbubble-ellipses"></ion-icon>
      </div>

      {/* Popup Chatbot */}
      {showChatbot && (
        <div className="text-gray-900 fixed bottom-5 top-20 sm:right-4 z-[1000] bg-white shadow-md rounded-md">
          <ThemeProvider theme={theme}>
            <ChatBot steps={steps} headerTitle="OgeBot" {...config} />
          </ThemeProvider>

          <button
            className="absolute top-0 right-0 z-[1002] p-2 text-2xl text-white rounded-md"
            onClick={toggleChatbot}
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
      )}
    </div>
  );
};

export default Bot;
