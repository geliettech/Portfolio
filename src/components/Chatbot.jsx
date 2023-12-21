import React from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '1',
    message: 'Welcome to the Chatbot! How can I assist you today?',
    trigger: '2',
  },
  {
    id: '2',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    message: 'You typed: {previousValue}. How can I help you with that?',
    trigger: '2',
  },
];

const Chatbot = () =>{
    return (
      <div>
      <ChatBot steps={steps} />;
      </div>
    );
  };


export default Chatbot;
