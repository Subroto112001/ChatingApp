import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import GroupElimetn from "../Eliment/HomePageEliment/GroupElimetn";
import PictureForMessage from "../../assets/ProfilePic.jpg"
const Message = () => {
  return (
    <div className="flex justify-between ">
      <div className="w-[36%]  flex flex-col ">
        <div className="relative">
          <input
            type="search"
            className="rounded-3xl border pl-[78px] pr-[23px] pb-[18px] pt-[18px] w-full border-none outline-none shadow-[0px_7px_6px_-2px_rgba(0,_0,_0,_0.1)]"
            placeholder="Search Here"
          />
          <IoIosSearch className="absolute top-[35%] left-[20px] text-2xl" />

          <BsThreeDotsVertical className="absolute top-[40%] right-[35px] text-blue" />
        </div>

        {/* firends group zonde */}
        <GroupElimetn
          CardEliment={"w-[60px] h-[60px] rounded-full"}
          HeaderName={"text-[18px] font-bold text-black"}
          BoxStyle={"h-[40dvh] overflow-x-scroll"}
          VariantNumber={10}
          HeaderText={"Group"}
        />
        <GroupElimetn
          nextelimetnclass={" "}
          CardEliment={"w-[50px] h-[50px] rounded-full"}
          HeaderName={"text-[14px] font-bold text-black"}
          HeaderText={"Friends"}
          BoxStyle={"h-[33dvh] overflow-x-scroll"}
          VariantNumber={6}
        />

        {/* friend Request zone */}
        {/* <div className="Group  mt-[43px]"> */}
      </div>
      <div className="w-[63%] felx p-[24px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px]">
        <div className="flex justify-between items-center bordercolor pb-[24px]">
          <div className="flex justify-center gap-5 items-center">
            <div className="w-[75px] h-[75px] rounded-full relative">
              <picture>
                <img
                  src={PictureForMessage}
                  alt={PictureForMessage}
                  className="w-[75px] h-[75px] rounded-full object-cover"
                />
              </picture>
              <span className="w-2 h-2 rounded-full bg-green-400  absolute bottom-1 right-0"></span>
            </div>
            <div>
              <h3 className="text-[24px] font-semibold text-black">Subroto</h3>
              <p className="text-[14px] font-normal text-black">Online</p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical className=" text-blue" />
          </div>
        </div>
        {/* message */}
        <div className="flex mt-[56px] justify-between ">
          <div className="bg-gray-100 text-black px-4 py-2 rounded-lg relative">
            Hey There !
            <div
              className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 
                        border-t-8 border-t-transparent border-b-8 border-b-transparent 
                        border-r-8 border-r-gray-100"
            ></div>
          </div>
          <div className="bg-gray-100 text-black px-4 py-2 rounded-lg relative">
            Hey There !
            <div
              className="absolute right-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 
                        border-t-8 border-t-transparent border-b-8 border-b-transparent 
                        border-r-8 border-r-gray-100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
