import React from 'react'
import ProfileImage from "../../assets/ProfilePic.jpg"
import { IoCloudUpload, IoNotifications } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { FaGear } from 'react-icons/fa6';
import { ImExit } from 'react-icons/im';
 import { useState } from "react";
const Slidebar = () => {

 

  const [activeId, setActiveId] = useState(1);
    const elimentofSlidebar = [
      {
        id: 1,
        icon: <FaHome />,
      },
      {
        id: 2,
        icon: <IoNotifications />,
      },
      {
        id: 3,
        icon: <FiMessageSquare />,
      },
      {
        id: 4,
        icon: <FaGear />,
      },
      {
        id: 5,
        icon: <ImExit />,
      },
    ];

 

  return (
    <>
      <div className="Slidebar w-[10%]  bg-blue rounded-md flex flex-col items-center ">
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
            {elimentofSlidebar?.map((item,index) =>
              elimentofSlidebar.length - 1 == index ? (
                <span
                  className="text-[28px] text-white mt-20"
                  key={item.id}
                 
                >
                  {item.icon}
                </span>
              ) : (
                <span className=" active  text-[28px] text-blue " key={item.id}>
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