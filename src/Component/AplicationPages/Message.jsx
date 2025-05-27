import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";


import PictureForMessage from "../../assets/ProfilePic.jpg";
import InputboxForpages from "../Comon/InputboxForpages";

import { getDatabase, off, onValue, push, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
const Message = ({
  BoxStyle,
  CardEliment,
  HeaderName,
  Subheader,
  BtnStyle,
}) => {
  const auth = getAuth();

  const [frienddata, setFriendData] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const fetchfriendData = () => {
      const UseRef = ref(db, "friend/");
      onValue(UseRef, (snapshot) => {
        let friendBlanklist = [];

        snapshot.forEach((item) => {
          if (auth.currentUser.uid === item.val().ReciverUid)
            friendBlanklist.push({ ...item.val(), FriendKey: item.key });
        });
        setFriendData(friendBlanklist);
      });
    };
    fetchfriendData();

    return () => {
      const UseRef = ref(db, "friend/");
      off(UseRef);
    };
  }, []);

  return (
    <div className="flex justify-between ">
      <div className="w-[36%] h-[96vh] flex flex-col ">
        <InputboxForpages
          SearchIconClass={"absolute top-[35%] left-[20px] text-2xl"}
        />
        {/* friend Request zone */}
        <div
          className={
            "rounded-[20px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] pl-[29px] pr-[27px] flex flex-col gap-y-[20px]"
          }
        >
          {frienddata.map((item, index) => (
            <div
              className={
                "flex justify-between items-center pt-4 pb-5 bordercolor "
              }
              key={index}
            >
              <div className="flex justify-center items-center  gap-[15px] w-[80px h-[80px] rounded-full">
                <picture>
                  <img
                    src={item.SenderProfilePicture}
                    alt={item.SenderProfilePicture}
                    className={"w-[70px] h-[70px]  rounded-full object-cover"}
                  />
                </picture>
                <div>
                  <h3 className={"text-[18px] font-bold text-black"}>
                    {item.SenderUserName}
                  </h3>
                  <p className={"text-[14px] font-medium text-sms"}>
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <button className={BtnStyle} onClick={() => blockfriend(item)}>
                Block
              </button>
            </div>
          ))}
        </div>
        {/* friend Request zone */}
      </div>
      {/* Chat zone */}
      <div className="w-[63%] h-[96vh] felx p-[24px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px] relative">
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
            <hr mt-3 />
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
        <div className="flex mt-[56px] flex-col   ">
          <div
            className="self-start
          "
          >
            <div className="flex flex-col items-start ">
              {/* left side msg */}
              <div className="bg-gray-100 text-black px-4 py-2 rounded-lg  text-wrap">
                <h3 className="text-[ ]"> Hey There what's upp !</h3>
              </div>
              <p className="ml-3 mt-1">Today, 2.02 pm</p>
            </div>
          </div>
          {/* left side msg */}
          {/* right side msg */}
          <div className="self-end">
            {" "}
            <div className="flex flex-col items-start ">
              <div className="bg-gray-100 text-black px-4 py-2 rounded-lg  text-wrap">
                <h3 className="text-[ ]"> Hey There what's upp !</h3>
              </div>
              <p className="ml-3 mt-1">Today, 2.02 pm</p>
            </div>
          </div>
          {/* right side msg */}
        </div>

        <hr className="mt-3" />
        {/* msg sending jsx */}
        <div className="absolute w-[810px] bottom-4 flex ">
          <input
            type="text"
            className="outline-none bg-gray-400 rounded-xl w-full px-3 py-2 relative"
          />
          <div>
            <span></span>
          </div>
          <button className="px-2 py-3 bg-blue-500 ml-2 rounded-xl text-[16px] font-medium ">
            Send
          </button>
        </div>

        {/* msg sending jsx */}
      </div>
      {/* Chat zone */}
    </div>
  );
};

export default Message;
