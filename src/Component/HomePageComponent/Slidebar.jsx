import React from 'react'
import ProfileImage from "../../assets/ProfilePic.jpg"
import { IoCloudUpload, IoNotifications } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { FaGear } from 'react-icons/fa6';
import { ImExit } from 'react-icons/im';
 import { useState } from "react";
import { useLocation, useNavigate } from 'react-router';
const Slidebar = () => {

  const pagenavigate = useNavigate();
const location = useLocation()
 
    const elimentofSlidebar = [
      {
        id: 1,
        path: "/",
        icon: <FaHome />,
      },
      {
        id: 2,
        path: "/notification",
        icon: <IoNotifications />,
      },
      {
        id: 3,
        path: "/message",
        icon: <FiMessageSquare />,
      },
      {
        id: 4,
        path: "/settings",
        icon: <FaGear />,
      },
      {
        id: 5,
        path: "/login",
        icon: <ImExit />,
      },
    ];

  const handleNavigatePage = (path = "/") => {
    console.log(path);
    pagenavigate(path)
   
  };
 
 

  return (
    <>
      <div className="Slidebar w-[10%] h-[96dvh] bg-blue rounded-md flex flex-col items-center ">
        <div className="w-[70px] h-[70px] relative cursor-pointer rounded-full  mt-10 group">
          <picture>
            <img
              src={ProfileImage}
              alt={ProfileImage}
              className="w-full h-full rounded-full object-cover "
            />
          </picture>
          <span className="absolute hidden left-[50%] top-[50%] text-white text-2xl -translate-[50%] group-hover:block">
            <IoCloudUpload />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center  mt-10 gap-y-10">
          <div className="flex flex-col justify-center gap-[30px] items-center">
            {elimentofSlidebar?.map((item, index) =>
              elimentofSlidebar.length - 1 == index ? (
                <div
                  className="text-[28px] text-white mt-20 cursor-pointer"
                  key={item.id}
                  onClick={() => handleNavigatePage(item.path)}
                >
                  {item.icon}
                </div>
              ) : (
                <span
                  className={
                    location.pathname == item.path
                      ? "active  text-[28px] text-blue cursor-pointer "
                      : "text-[28px] text-white cursor-pointer"
                  }
                  key={item.id}
                  onClick={() => handleNavigatePage(item.path)}
                >
                  {item.icon}
                </span>
              )
            )}
          </div>

          {/* <div className=" bg-white pt-[20px] pb-[20px] pr-[45px] pl-[45px] bordericon">
                        <IoHomeOutline className="text-blue text-2xl" />
                      </div>
        
                      <RiMessage2Fill className="text-2xl text-[#BAD1FF]" />
                      <RiMessage2Fill className="text-2xl text-[#BAD1FF]" />
                      <IoSettingsSharp className="text-2xl text-[#BAD1FF]" />
                      <IoNotifications className="text-2xl text-[#BAD1FF]" />
                      <TbLogout className="mt-[100px] mb-[47px] text-2xl text-white" /> */}
        </div>
      </div>
    </>
  );
}

export default Slidebar