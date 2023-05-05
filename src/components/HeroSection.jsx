import React from "react";
import { AiOutlineAim, AiOutlineMail } from "react-icons/ai";
import { RiTelegramLine } from "react-icons/ri";
import {  FaInstagram } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 ml-[24px] mr-[4px] flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-purple-500 shi">
            Делюсь вкусами.
          </p>
          <h1 className="py-4 text-purple-500">
            Привет. <span className="text-[#ec6840]"> Я Рыжий Шеф. </span>
          </h1>
          <h1 className="py-3 text-purple-500">
            Последние 10 лет собираю рецепты.
          </h1>
          <h1 className="py-3 text-purple-500  m-auto">
            И готовлю для вас.
          </h1>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">

            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <a
                href="https://instagram.com/redhead_chef_"
                target="_blank"
                rel="noreferrer"
              >
              <FaInstagram size='34'/>
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <a
                href="https://t.me/Redhead_guy1"
                target="_blank"
                rel="noreferrer"
              >
              <RiTelegramLine size='34'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;