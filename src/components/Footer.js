//PACKAGES
import React from "react";

//ICONS
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="border-t border-black pt-9 pl-10 flex items-center">
      <p className="text-tBrown">FOLLOW ME HERE:</p>
      <ul className="flex ml-10">
        <a
          href="https://github.com/furkanlebit7"
          className="ml-10"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex items-center">
            <div className="text-md bg-tRed rounded-full p-1 text-white">
              <AiFillGithub />
            </div>
            <span className="ml-2 text-sm">/furkanlebit7</span>
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/furkanlebit7/"
          className="ml-10"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex items-center">
            <div className="text-md bg-tRed rounded-full p-1 text-white">
              <AiFillLinkedin />
            </div>
            <span className="ml-2 text-sm">/furkanlebit7</span>
          </li>
        </a>
        <a
          href="https://www.instagram.com/furkanlebit7/"
          className="ml-10"
          target="_blank"
          rel="noreferrer"
        >
          <li className="flex items-center">
            <div className="text-md bg-tRed rounded-full p-1 text-white">
              <AiOutlineInstagram />
            </div>
            <span className="ml-2 text-sm">/furkanlebit7</span>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default Footer;
