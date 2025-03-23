import React, { useEffect } from "react";
import ProfileImage from "../../assets/ProfilePic.jpg";
import { IoCloudUpload, IoNotifications } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { FiMessageSquare } from "react-icons/fi";
import { FaGear } from "react-icons/fa6";
import { ImExit } from "react-icons/im";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, signOut } from "firebase/auth";
const Slidebar = () => {
  const pagenavigate = useNavigate();
  const location = useLocation();
const auth = getAuth();
  const elimentofSlidebar = [
    {
      id: 1,
      path: "/",
      icon: <FaHome />,
    },
    {
      id: 2,
      path: "/message",
      icon: <FiMessageSquare />,
    },
    {
      id: 3,
      path: "/notification",
      icon: <IoNotifications />,
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
    pagenavigate(path);
  };

  /*
   * todo : handleUploadImage
   */
  const handleUploadImage = () => {
    cloudinary.openUploadWidget(
      {
        cloudName: "df8qz4g9h",
        uploadPreset: "ChatAppFile",
        sources: [
          "local",
          "url",
          "camera",
          "dropbox",
          "unsplash",
          "google_drive",
          "shutterstock",
          "image_search",
          "gettyimages",
          "istock",
        ],
        googleApiKey: "AIzaSyAykP0egZO9VbeFAJ8hBJE5td7ho2gcOXY",
        searchBySites: ["all", "cloudinary.com"],
        searchByRights: true,
      },
      (err, result) => {
        if (err) {
          throw new Error("Failed to upload image ");
        }

        console.log(result.info.sucess_url);
      }
    );
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://upload-widget.cloudinary.com/latest/global/all.js`;
    script.async = true;
    document.body.appendChild(script);
  }, []);
  console.log(window.cloudinary);

  // LogOut fucntion in here
  const handleLogOut = () => {

    signOut(auth).then((result) => {
      console.log("result");
      pagenavigate("/login");
    }).catch((err) => {
      console.log(err);
      
    });
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
          <span
            onClick={handleUploadImage}
            className="absolute hidden left-[50%] top-[50%] text-white text-2xl -translate-[50%] group-hover:block"
          >
            <IoCloudUpload />
          </span>
        </div>
        <div className="flex flex-col justify-center items-center  mt-10 gap-y-10">
          <div className="flex flex-col justify-center gap-[30px] items-center">
            {elimentofSlidebar?.map((item, index) =>
              elimentofSlidebar.length - 1 == index ? (
                <div
                  className="text-[29px] text-white mt-20 cursor-pointer"
                  key={item.id}
                  onClick={handleLogOut}
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
};

export default Slidebar;
