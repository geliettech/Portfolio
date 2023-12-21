// Bot.js
import React, { useState } from 'react';
import Chatbot from './Chatbot';

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
        <div className="fixed bottom-12 right-4 z-[1000] bg-white shadow-md rounded-md p-4 max-w-xs">
          <Chatbot />
          <button
            className="mt-4 p-2 bg-cyan-600 text-white rounded-md"
            onClick={toggleChatbot}
          >
            Close Chat
          </button>
        </div>
      )}
    </div>
  );
};

export default Bot;
