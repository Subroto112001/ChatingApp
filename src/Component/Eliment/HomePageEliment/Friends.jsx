import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import {
  getDatabase,
  off,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import { getAuth } from "firebase/auth";
import { ActionForFriend } from "../../../features/featureSlice.js/FriendSlice";
import { useDispatch } from "react-redux";

const Friends = ({ showBtn = true }) => {
  const [friendlist, setfriendlist] = useState([]);

  const [loading, setLoading] = useState(false);
  const db = getDatabase();
  const auth = getAuth();
  const dispatch = useDispatch();
  /**
   * todo : fetch data from friend database
   * what we do : we will fetch data from database
   * date : 28/ 04/2025
   * */

  useEffect(() => {
    setLoading(true);
    const fetchfriendData = () => {
      const UseRef = ref(db, "friend/");
      onValue(UseRef, (snapshot) => {
        let ReceiverfriendBlanklist = [];
       
        snapshot.forEach((item) => {
          if (
            auth.currentUser.uid === item.val().ReciverUid ||
            auth.currentUser.uid === item.val().SenderUid
          ) {
            ReceiverfriendBlanklist.push({
              ...item.val(),
              FriendKey: item.key,
            });
          }
          
        });
        setfriendlist(ReceiverfriendBlanklist);
        setLoading(false);
      });
    };
    fetchfriendData();

    return () => {
      const UseRef = ref(db, "friend/");
      off(UseRef);
    };
  }, []);

  /**
   * todo : block user
   * what we will do :
   * 1st we create a databsae name block and we push all data from friend database
   * 2nd we will delete all data from friend database
   * date : 28/04/2025
   * */

  const blockfriend = (item) => {
    set(push(ref(db, "blockuser/")), {
      ...item,
    }).then(() => {
      const dbref = ref(db, `friend/${item.FriendKey}`);
      remove(dbref);
    });
  };

  // handle friend
  const handleFriendInfo = (item) => {
    if (auth.currentUser.uid === item.ReciverUid) {
      console.log(item);

      let userInfo = {
        userUID: item.SenderUid,
        userName: item.SenderUserName,
        userEmail: item.SenderEmail,
        userProfilePicture: item.SenderProfilePicture,
      };

      dispatch(ActionForFriend(userInfo));
    } else {
      let userInfo = {
        userUID: item.ReciverUid,
        userName: item.ReciverUserName,
        userEmail: item.ReciverEmail,
        userProfilePicture: item.ReciverProfilePicture,
      };

      dispatch(ActionForFriend(userInfo));
    }
  };


  console.log(auth.currentUser.uid);
  console.log(friendlist);
  


  if (loading) {
    return <LoadingSkeliton />;
  }
  return (
    <>
      <div className="Group  mt-[20px]">
        <div className="rounded-[20px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] pl-[29px] pr-[27px] flex flex-col">
          <div className="Header flex justify-between items-center">
            <h2 className="text-[20px] flex flex-row justify-center items-center font-semibold text-black">
              Friends &nbsp;
              <span className="bg-red-400 text-[18px] w-6 h-6 rounded-full flex justify-center items-center">
                {friendlist.length}
              </span>
            </h2>
            <BsThreeDotsVertical className=" text-blue" />
          </div>
          <div className="h-[50dvh] overflow-x-scroll">
            {friendlist.map((item, index) =>
              auth.currentUser.uid === item.ReciverUid ? (
                <div
                  className={
                    "flex justify-between items-center pt-4 pb-5 cursor-pointer "
                  }
                  key={index}
                  onClick={() => handleFriendInfo(item)}
                >
                  <div className="flex justify-center items-center  gap-[15px]">
                    <picture>
                      <img
                        src={item.SenderProfilePicture}
                        alt={item.SenderProfilePicture}
                        className={"w-[50px] h-[50px] rounded-full"}
                      />
                    </picture>
                    <div>
                      <h3 className={"text-[14px] font-semibold text-black"}>
                        {item.SenderUserName}
                      </h3>
                      <p className={"text-[12px] font-medium text-sms"}>
                        Hi Guys, Wassup!
                      </p>
                    </div>
                  </div>
                  {showBtn && (
                    <button
                      className={
                        "text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
                      }
                      onClick={() => blockfriend(item)}
                    >
                      Block
                    </button>
                  )}
                </div>
              ) : auth.currentUser.uid === item.SenderUid ? (
                <div
                  className={
                    "flex justify-between items-center pt-4 pb-5 cursor-pointer "
                  }
                  key={index}
                  onClick={() => handleFriendInfo(item)}
                >
                  <div className="flex justify-center items-center  gap-[15px]">
                    <picture>
                      <img
                        src={item.ReciverProfilePicture}
                        alt={item.ReciverProfilePicture}
                        className={"w-[50px] h-[50px] rounded-full"}
                      />
                    </picture>
                    <div>
                      <h3 className={"text-[14px] font-semibold text-black"}>
                        {item.ReciverUserName}
                      </h3>
                      <p className={"text-[12px] font-medium text-sms"}>
                        Hi Guys, Wassup!
                      </p>
                    </div>
                  </div>
                  {showBtn && (
                    <button
                      className={
                        "text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
                      }
                      onClick={() => blockfriend(item)}
                    >
                      Block
                    </button>
                  )}
                </div>
              ) : (
                <div
                  className={
                    "flex justify-between items-center pt-4 pb-5 cursor-pointer "
                  }
                  key={index}
                  onClick={() => handleFriendInfo(item)}
                >
                  <div className="flex justify-center items-center  gap-[15px]">
                    <picture>
                      <img
                        src={item.SenderProfilePicture}
                        alt={item.SenderProfilePicture}
                        className={"w-[50px] h-[50px] rounded-full"}
                      />
                    </picture>
                    <div>
                      <h3 className={"text-[14px] font-semibold text-black"}>
                        {item.SenderUserName}
                      </h3>
                      <p className={"text-[12px] font-medium text-sms"}>
                        Hi Guys, Wassup!
                      </p>
                    </div>
                  </div>
                  {showBtn && (
                    <button
                      className={
                        "text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded cursor-pointer bg-blue"
                      }
                      onClick={() => blockfriend(item)}
                    >
                      Block
                    </button>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
