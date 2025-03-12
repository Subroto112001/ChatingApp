import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import GroupElimetn from "../Eliment/HomePageEliment/GroupElimetn";

const Message = () => {
  return (
    <div className="flex justify-between items-center">
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
          <div className="w-[63%] felx p-[24px]">
              
            
          </div>
    </div>
  );
};

export default Message;
