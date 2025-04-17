import React from "react";
import InputboxForpages from "../Comon/InputboxForpages";
import Images from "../../assets/profilesettings.jpg";
import { FaKey, FaPen, FaRegQuestionCircle } from "react-icons/fa";
import { TbMessageReportFilled, TbPhotoEdit } from "react-icons/tb";
import { useNavigate } from "react-router";

const Settings = () => {

  const pagenavigate = useNavigate();
   const handleNavigatePage = (path = "/") => {
     console.log(path);
     pagenavigate(path);
   };



  return (
    <>
      <div className="w-[49%]">
        <div className="">
          <div className=" p-[26px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px]">
            <div>
              <h3 className="text-[20px] text-black font-medium">
                Profile Settings
              </h3>
              <div className="flex  gap-[31px] mt-[49px] pb-[29px] bordercolor  ">
                <div className="w-[100px] h-[100px] rounded-full">
                  <picture>
                    <img
                      src={Images}
                      alt={Images}
                      className="w-[100%] h-[100%] rounded-full object-cover"
                    />
                  </picture>
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-[25px] text-black font-semibold">
                    A B M Shawon Islam
                  </h3>
                  <h4 className="text-[20px] text-black font-normal ">
                    Stay home stay safe
                  </h4>
                </div>
              </div>
              <div className="ml-[40px] flex flex-col mt-[43px] gap-[37px] h-[43dvh]">
                <h4
                  className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer"
                  onClick={() => handleNavigatePage("/settings/edit")}
                >
                  <span>
                    <FaPen />
                  </span>
                  Edit Profile Name
                </h4>
                <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer">
                  <span>
                    <TbMessageReportFilled />
                  </span>
                  Edit Profile Status Info.
                </h4>
                <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer">
                  <span>
                    <TbPhotoEdit />
                  </span>
                  Edit Profile Photo.
                </h4>
                <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer">
                  <span>
                    <FaRegQuestionCircle />
                  </span>
                  Help
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
