import React from "react";
const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <div className="bg-gray-800 text-sm p-4 text-center text-white">
      Copyright &copy; 2023 - { currentYear } Ogechi Juliet Uhegbu. All Rights reserved.
    </div>
  );
};

export default Footer;
