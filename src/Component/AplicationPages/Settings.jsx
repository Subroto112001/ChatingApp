import React from "react";
import InputboxForpages from "../Comon/InputboxForpages";
import Images from "../../assets/profilesettings.jpg";
import { FaKey, FaPen, FaRegQuestionCircle } from "react-icons/fa";
import { TbMessageReportFilled, TbPhotoEdit } from "react-icons/tb";
import { CgDarkMode } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
const Settings = () => {
  return (
    <>
      <div>
        <InputboxForpages
          SearchIconClass={"absolute top-[35%] left-[20px] text-2xl"}
        />

        <div className="flex justify-between items-center">
          <div className="w-[49%] p-[26px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px]">
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
                <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer">
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
          <div className="w-[49%] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px] h-[87dvh]">
            <h3 className="text-[20px] mt-[26px]  ml-[26px] text-black font-medium">
              Account Settings
            </h3>
            <div className="ml-[78px] flex flex-col mt-[43px] gap-[37px] ">
              <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px] hover:cursor-pointer">
                <span>
                  <FaKey />
                </span>
                Change Password
              </h4>
              <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer">
                <span>
                  <CgDarkMode />
                </span>
                Theme.
              </h4>
              <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer">
                <span>
                  <MdDelete />
                </span>
                Delete Account.
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
