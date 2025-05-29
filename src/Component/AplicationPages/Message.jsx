import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaCamera, FaTelegram } from "react-icons/fa";
import { FaRegSmile } from "react-icons/fa";

import PictureForMessage from "../../assets/ProfilePic.jpg";
import InputboxForpages from "../Comon/InputboxForpages";
import EmojiPicker from "emoji-picker-react";
import { getDatabase, off, onValue, push, set, ref } from "firebase/database";
import { getAuth } from "firebase/auth";
import Friends from "../Eliment/HomePageEliment/Friends";
import { useSelector } from "react-redux";
import moment from "moment";

const Message = () => {
  const auth = getAuth();
  const db = getDatabase();
  const { value: user } = useSelector((store) => store.friend);
  // friendlist data will store here
  const [frienddata, setFriendData] = useState([]);
  const [eomjiopen, setEmojiOpen] = useState(false);

  // massege state will here
  const [massege, setMassege] = useState("");
  const [sendermsg, setSendermsg] = useState([]);
  const [receivermsg, setReceivermsg] = useState([]);

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

  /**
   *
   * todo : emoji value handle
   *
   * */

  const handleEmojiPicker = ({ emoji }) => {
    console.log(emoji);

    setMassege((prev) => prev + emoji);
  };

  /**
   *
   * todo : upload database user sending massege
   *
   * */

  const sendMassege = async () => {
    try {
      push(ref(db, "Singlemsg/"), {
        msgSenderUid: auth.currentUser.uid,
        msgSenderUserName: auth.currentUser.displayName,
        msgSenderUserEmail: auth.currentUser.email,
        msgSenderUserProfilePicture: auth.currentUser.photoURL,
        msgReciverUid: user.userUID,
        msgReciverName: user.userName,
        msgReciverEmail: user.userEmail,
        msgReciverProfilePicture: user.userProfilePicture,
        userMsg: massege,
        timestamp: Date.now(),
      });
    } catch (error) {
      console.log("This error from masseage sending option", error);
    } finally {
      setMassege("");
    }
  };

  useEffect(() => {
    const fetchmsgdata = () => {
      const MsgRef = ref(db, "Singlemsg/");
      onValue(MsgRef, (snapshot) => {
        let allMsgs = [];

        snapshot.forEach((item) => {
          
          const isCurrentUser =
            item.val().msgSenderUid === auth.currentUser.uid ||
            item.val().msgReciverUid === auth.currentUser.uid;

          const isChatBetweenCurrentAndSelected =
            (item.val().msgSenderUid === auth.currentUser.uid &&
              item.val().msgReciverUid === user.userUID) ||
            (item.val().msgSenderUid === user.userUID &&
              item.val().msgReciverUid === auth.currentUser.uid);

          if (isCurrentUser && isChatBetweenCurrentAndSelected) {
            allMsgs.push({ ...item.val(), msgKey: item.key });
          }
        });

      
        allMsgs.sort((a, b) => a.timestamp - b.timestamp);
        setSendermsg(allMsgs); 
      });
    };

    fetchmsgdata();
  }, [user.userUID]);



  return (
    <div className="flex justify-between ">
      <div className="w-[36%] h-[96vh] flex flex-col ">
        <InputboxForpages
          SearchIconClass={"absolute top-[35%] left-[20px] text-2xl"}
        />
        {/* friend Request zone */}

        <Friends showBtn={false} />

        {/* friend Request zone */}
      </div>
      {/* Chat zone */}
      <div className="w-[63%] h-[96vh] felx p-[24px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px] relative">
        <div className="flex justify-between items-center bordercolor pb-[24px]">
          <div className="flex justify-center gap-5 items-center">
            <div className="w-[75px] h-[75px] rounded-full relative">
              <picture>
                <img
                  src={user.userProfilePicture}
                  alt={PictureForMessage}
                  className="w-[75px] h-[75px] rounded-full object-cover"
                />
              </picture>
              <span className="w-2 h-2 rounded-full bg-green-400  absolute bottom-1 right-0"></span>
            </div>
            <hr mt-3 />
            <div>
              <h3 className="text-[24px] font-semibold text-black">
                {user.userName}
              </h3>
              <p className="text-[14px] font-normal text-black">
                {navigator.onLine ? "Online" : "Offline"}
              </p>
            </div>
          </div>
          <div>
            <BsThreeDotsVertical className=" text-blue" />
          </div>
        </div>
        {/* message */}
        <div className="flex mt-[56px] flex-col h-[60vh] overflow-scroll  ">
          {sendermsg.map((item) => (
            <div
              key={item.msgKey}
              className={`flex mb-2 ${
                item.msgSenderUid === auth.currentUser.uid
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              <div
                className={`px-4 py-2 rounded-lg max-w-[60%] ${
                  item.msgSenderUid === auth.currentUser.uid
                    ? "bg-blue text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <p>{item.userMsg}</p>
                <p
                  className={`${
                    item.msgSenderUid === auth.currentUser.uid
                      ? "text-xs text-right mt-1 text-gray-300"
                      : "text-xs text-right mt-1 text-gray-500"
                  }`}
                >
                  {moment(item.timestamp).format("h:mm a")}
                </p>
              </div>
            </div>
          ))}

          {/* right side msg */}
        </div>

        {/* msg sending jsx */}
        <div className="absolute w-[96%] bottom-4 flex items-center">
          <input
            type="text"
            className="outline-none font-medium text-white text-[16px] bg-blue rounded-xl w-full px-3 py-2 relative"
            placeholder="Type your message"
            value={massege}
            onChange={(e) => setMassege(e.target.value)}
          />
          <div className=" flex gap-3 absolute right-[60px] top-[24%]">
            <span
              className="text-2xl cursor-pointer"
              onClick={() => setEmojiOpen(!eomjiopen)}
            >
              <FaRegSmile className="text-white" />
            </span>
            <span className="text-2xl cursor-pointer">
              <FaCamera className="text-white" />
            </span>
          </div>
          <span
            className=" cursor-pointer ml-2 rounded-full text-3xl font-medium "
            onClick={sendMassege}
          >
            <FaTelegram className="text-blue" />
          </span>
        </div>

        {/* msg sending jsx */}
      </div>
      {/* Chat zone */}
      <div className="absolute bottom-[90px] right-12">
        <EmojiPicker open={eomjiopen} onEmojiClick={handleEmojiPicker} />
      </div>
    </div>
  );
};

export default Message;
