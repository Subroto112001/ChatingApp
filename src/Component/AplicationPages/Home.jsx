import React, { useState } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Profilegroup from "../../assets/FriendGroup.jpg";
import ProfilePicture2 from "../../assets/GroupPicture2.jpg";
import ProfileCar from "../../assets/CarProfile.jpg";
import { IoIosSearch } from 'react-icons/io';
import GroupElimetn from '../Eliment/HomePageEliment/GroupElimetn';
import InputboxForpages from '../Comon/InputboxForpages';
import GroupList from '../Eliment/HomePageEliment/GroupList';
import FriendRequest from '../Eliment/HomePageEliment/FriendRequest';
import Friends from '../Eliment/HomePageEliment/Friends';
import FriendGroup from '../Eliment/HomePageEliment/FriendGroup';
import UserList from '../Eliment/HomePageEliment/UserList';
import BlockUser from '../Eliment/HomePageEliment/BlockUser';

const GroupContet = () => {
  
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="w-[36%]  flex flex-col ">
          <InputboxForpages
            SearchIconClass={"absolute top-[35%] left-[20px] text-2xl"}
          />

          {/* firends group zonde */}
          <GroupList
            CardEliment={"w-[60px] h-[60px] rounded-full"}
            HeaderName={"text-[18px] font-bold text-black"}
            BtnStyle={
              "text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
            }
            BoxStyle={"h-[40dvh] overflow-x-scroll"}
            VariantNumber={10}
            HeaderText={"Group List"}
            ButtonText={"Join"}
          />
          {/* firends Request zonde */}
          <FriendRequest
            nextelimetnclass={" "}
            CardEliment={"w-[50px] h-[50px] rounded-full"}
            HeaderName={"text-[14px] font-bold text-black"}
            BtnStyle={
              "text-[16px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
            }
            HeaderText={"Friend Request"}
            ButtonText={"Accept"}
            BoxStyle={"h-[33dvh] overflow-x-scroll"}
            VariantNumber={6}
          />

          {/* friend Request zone */}
          {/* <div className="Group  mt-[43px]"> */}
        </div>
        <div className="w-[27%]  flex flex-col ">
          {/* firends zonde */}
          <Friends
            CardEliment={"w-[50px] h-[50px] rounded-full"}
            HeaderName={"text-[14px] font-semibold text-black"}
            Subheader={"text-[12px] font-medium text-sms"}
            BtnStyle={
              "text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
            }
            HeaderText={"Friends"}
            BoxStyle={"h-[48dvh] overflow-x-scroll"}
            VariantNumber={7}
            PeraText={"Today, 8:56pm"}
            peraStyle={"text-[10px] text-gray font-medium"}
          />

          {/* firends zonde */}
          {/* friend Group zone */}
          <FriendGroup
            nextelimetnclass={" "}
            CardEliment={"w-[55px] h-[55px] rounded-full"}
            HeaderName={"text-[14px] font-bold text-black"}
            Subheader={"text-[12px] font-medium text-sms"}
            BtnStyle={
              "text-[16px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
            }
            HeaderText={"Group"}
            PeraText={"Today, 8:56pm"}
            peraStyle={"text-[10px] text-gray font-medium"}
            BoxStyle={"h-[33dvh] overflow-x-scroll"}
            VariantNumber={8}
          />

          {/* friend Group zone */}
        </div>
        {/* <div className="Group  mt-[43px]"> */}
        <div className="w-[27%]  flex flex-col ">
          {/* Userlist zonde */}
          <UserList
            CardEliment={"w-[50px] h-[50px] rounded-full"}
            HeaderName={"text-[16px] font-bold text-black"}
            BtnStyle={
              "text-[18px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
            }
            HeaderText={"User List"}
            BoxStyle={"h-[48dvh] overflow-x-scroll"}
            VariantNumber={9}
            ButtonText={"+"}
          />

          {/* Userlist zonde */}
          {/* BlockUser zonde */}
          <BlockUser
            nextelimetnclass={" "}
            CardEliment={"w-[50px] h-[50px] rounded-full"}
            HeaderName={"text-[14px] font-bold text-black"}
            BtnStyle={
              "text-[16px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
            }
            HeaderText={"Blocked User"}
            BoxStyle={"h-[33dvh] overflow-x-scroll"}
            VariantNumber={5}
            ButtonText={"Unblock"}
          />

          {/* friend Request zone */}
          {/* <div className="Group  mt-[43px]"> */}
        </div>
      </div>
    </>
  );
}

export default GroupContet