import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, off, onValue, push, ref, remove, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import { getAuth } from "firebase/auth";
import moment from "moment";
import { FaMinus, FaUser, FaUserClock, FaUserMinus, FaUserPlus } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
const UserList = ({
  BtnStyle,
  CardEliment,
  HeaderName,
  BoxStyle,
  HeaderText,
  Subheader,
  VariantNumber,
  ButtonText,
  PeraText,
  peraStyle,
}) => {
  const [userlist, setUserlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = getDatabase();
  const auth = getAuth();
  const [loggeduser, setLoggeduser] = useState();
  const [friendRequestlist, setfriendRequestlist] = useState([]);
  const [Requestsent, setRequestsent] = useState([]);

  const [friend, setFriend] = useState([]);
  /**
   * todo : fetching data from database
   * Database : firebase
   * datatype : User Information
   * code date : 20/04/2025
   * author : Subroto Kumar Barman
   */

  useEffect(() => {
    setLoading(true);
    const fetchdata = () => {
      const UseRef = ref(db, "users/");
      onValue(UseRef, (snapshot) => {
        let userBlanklist = [];

        snapshot.forEach((item) => {
          if (item.val().userUid !== auth.currentUser.uid) {
            userBlanklist.push({ ...item.val(), userKey: item.key });
          } else {
            let user = Object.assign({ ...item.val(), userKey: item.key });
            setLoggeduser(user);
          }
        });
        setUserlist(userBlanklist);
        setLoading(false);
      });
    };
    fetchdata();
    // cleanup funtion
    return () => {
      const UseRef = ref(db, "users/");
      off(UseRef);
    };
  }, []);

  /**
   *todo :  friend request database
   * @param({item})
   * return void
   */
  const HandleFriendRequest = (item) => {
    // console.log(item);
    set(push(ref(db, "friendRequest/")), {
      SenderEmail: loggeduser.email,
      SenderProfilePicture: loggeduser.profile_picture,
      SenderUserKey: loggeduser.userKey,
      SenderUid: loggeduser.userUid,
      SenderUserName: loggeduser.username,

      ReciverEmail: item.email,
      ReciverProfilePicture: item.profile_picture,
      ReciverUserKey: item.userKey,
      ReciverUid: item.userUid,
      ReciverUserName: item.username,
      createaDAte: moment().format("MM DD YYYY, h:mm:ss a"),
    }).then(() => {
      set(push(ref(db, "notification/")), {
        Notificationmsg: `Friend Request Sent`,
        SenderEmail: loggeduser.email,
        SenderProfilePicture: loggeduser.profile_picture,
        SenderUserKey: loggeduser.userKey,
        SenderUid: loggeduser.userUid,
        SenderUserName: loggeduser.username,

        ReciverEmail: item.email,
        ReciverProfilePicture: item.profile_picture,
        ReciverUserKey: item.userKey,
        ReciverUid: item.userUid,
        ReciverUserName: item.username,
        createaDAte: moment().format("MM DD YYYY, h:mm:ss a"),
      });
    });
  };

  /**
   * todo : fetch friend Request data from database
   *
   * */

  // Fetch friend requests
  useEffect(() => {
    if (!auth.currentUser) return;
    const UseRef = ref(db, "friendRequest/");
    onValue(UseRef, (snapshot) => {
      let sent = [];
      let received = [];

      snapshot.forEach((item) => {
        const request = item.val();
        if (request.SenderUid === auth.currentUser.uid) {
          sent.push(request.ReciverUid);
        }
        if (request.ReciverUid === auth.currentUser.uid) {
          received.push(request.SenderUid);
        }
      });

      setRequestsent(sent);
      setfriendRequestlist(received);
    });

    return () => off(UseRef);
  }, []);

  /**
   * 
   * todo : ffetch blocklist data
   * */ 
const [blockuser, setBlockuser] = useState([]);
  useEffect(() => {
    if (!auth.currentUser) return;
    const UseRef = ref(db, "blockuser/");
    onValue(UseRef, (snapshot) => {
    let blocklistuser = []

      snapshot.forEach((item) => {
       
        if (
          item.val().SenderUid === auth.currentUser.uid
    
        ) {
          blocklistuser.push(item.val().ReciverUid);
        }
        if (item.val().ReciverUid === auth.currentUser.uid) {
          blocklistuser.push(item.val().SenderUid);
        }
       
      });
      setBlockuser(blocklistuser);
 
      
      
   
    });
 
    return () => off(UseRef);
  }, []);

  console.log("block", blockuser);
  console.log(auth.currentUser.uid);
  

  /**
   * todo : Friend Request remove
   * What we will work:  remove friend request from our database
   * author : Subroto Kumar Barman
   * date l: 28/04/2025
   * */

  const HandleFriendRequestremove = (item) => {
    const db = getDatabase();
    const requestRef = ref(db, "friendRequest/");
console.log(item);

    onValue(
      requestRef,
      (snapshot) => {
        snapshot.forEach((items) => {
         
          // Match only your sent request
          if (
            items.val().SenderUid === auth.currentUser.uid &&
            items.val().ReciverUid === item.userUid
          ) {
            remove(ref(db, `friendRequest/${items.key}`))
              .then(() => {
                console.log("Friend request removed successfully.");
              })
              .catch((error) => {
                console.error("Failed to remove friend request:", error);
              });
          }
        });
      },
      {
        onlyOnce: true, // Ensures it runs once and unsubscribes
      }
    );
  };
 

  /**
   * todo : fetch friend list from database
   *
   * */

  // Fetch friends
  useEffect(() => {
    const UseRef = ref(db, "friend/");
    onValue(UseRef, (snapshot) => {
      let friendUids = [];

      snapshot.forEach((item) => {
       
        if (
          item.val().SenderUid === auth.currentUser.uid ||
          item.val().ReciverUid === auth.currentUser.uid
        ) {
          friendUids.push(
            item.val().SenderUid === auth.currentUser.uid
              ? item.val().ReciverUid
              : item.val().SenderUid
          );
        }
      });

      setFriend(friendUids);
      setLoading(false);
    });

    return () => off(UseRef);
  }, []);

console.log(auth);

  if (loading) {
    return <LoadingSkeliton />;
  }
  return (
    <>
      <div className="Group  mt-[20px]">
        <div className="rounded-[20px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] pl-[29px] pr-[27px] flex flex-col">
          <div className="Header flex justify-between items-center">
            <h2 className="text-[20px] flex flex-row justify-center items-center font-semibold text-black">
              {HeaderText} &nbsp;
              <span className="bg-red-400 text-[18px] w-6 h-6 rounded-full flex justify-center items-center">
                {userlist.length}
              </span>
            </h2>
            <BsThreeDotsVertical className=" text-blue" />
          </div>
          <div className={BoxStyle}>
            {userlist.map((item, index) => (
              <div
                className={
                  "flex justify-between items-center pt-4 pb-5 bordercolor"
                }
                key={item.userUid}
              >
                <div className="flex justify-center items-center  gap-[15px]">
                  <picture>
                    <img
                      src={item.profile_picture}
                      alt={item.profile_picture}
                      className={CardEliment}
                    />
                  </picture>
                  <div>
                    <h3 className={HeaderName}>{item.username}</h3>
                    <p className={Subheader}>Hi Guys, Wassup!</p>
                  </div>
                </div>
                {blockuser.includes(item.userUid) ? (
                  // blocked user UI
                  <button className="text-[20px] text-red-500 font-semibold px-5 py-2 rounded cursor-pointer bg-blue">
                    <FaUser />
                  </button>
                ) : Requestsent.includes(item.userUid) ? (
                  // friend request remove code
                  <button
                    className="text-[20px] text-white font-semibold px-5 py-2 rounded cursor-pointer bg-blue"
                    onClick={() => HandleFriendRequestremove(item)}
                  >
                    <FaUserMinus />
                  </button>
                ) : friendRequestlist.includes(item.userUid) ? (
                  // pending request UI
                  <button className="text-[20px] text-white font-semibold px-5 py-2 rounded cursor-pointer bg-blue">
                    <FaUserClock />
                  </button>
                ) : friend.includes(item.userUid) ? (
                  // already friends UI
                  <button className="text-[20px] text-white font-semibold px-5 py-2 rounded cursor-pointer bg-blue">
                    <RxAvatar className="text-xl" />
                  </button>
                ) : (
                  // send friend request UI
                  <button
                    className="text-[20px] text-white font-semibold px-5 py-2 rounded cursor-pointer bg-blue"
                    onClick={() => HandleFriendRequest(item)}
                  >
                    <FaUserPlus />
                  </button>
                )}

                <p className={peraStyle}>{PeraText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
