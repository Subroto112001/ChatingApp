import React from 'react'
import ProfileImage from "../../assets/ProfilePic.jpg"
import { IoCloudUpload, IoNotifications } from 'react-icons/io5';
import { FaHome } from 'react-icons/fa';
import { FiMessageSquare } from 'react-icons/fi';
import { FaGear } from 'react-icons/fa6';
import { ImExit } from 'react-icons/im';
const Slidebar = () => {

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

    const SlideActive = () => {
        
    }

  return (
    <>
      <div className="w-[10%] h-[100vh] bg-blue flex flex-col items-center ">
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

        <div className="flex flex-col justify-center gap-[30px] items-center mt-10">
          {elimentofSlidebar?.map((item, index) =>
            elimentofSlidebar.length - 1 == index ? (
              <span className="text-[28px] text-white mt-20" key={item.id}>
                {item.icon}
              </span>
            ) : (
              <span className=" active  text-[28px] text-blue " key={item.id}>
                {item.icon}
              </span>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Slidebar