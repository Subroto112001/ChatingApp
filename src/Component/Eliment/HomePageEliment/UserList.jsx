import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, off, onValue, push, ref, remove, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import { getAuth } from "firebase/auth";
import moment from "moment";
import { FaMinus } from "react-icons/fa";
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

  useEffect(() => {
    if (!loggeduser) return;

    const fetcfriendRequesthdata = () => {
      const UseRef = ref(db, "friendRequest/");
      onValue(UseRef, (snapshot) => {
        let userfriendRequestBlanklist = [];

        snapshot.forEach((item) => {
          if (
            auth.currentUser.uid ||
            loggeduser.userUid === item.val().SenderUid
          ) {
            userfriendRequestBlanklist.push(
              loggeduser.userUid + item.val().ReciverUid
            );
          }
        });

        setfriendRequestlist(userfriendRequestBlanklist);
      });
    };

    fetcfriendRequesthdata();

    // cleanup funtion
    return () => {
      const UseRef = ref(db, "friendRequest/");
      off(UseRef);
    };
  }, [loggeduser]);

  console.log(Requestsent);

  /**
   * todo : Friend Request remove
   * friend request remove from oour database
   * author : Subroto Kumar Barman
   * date l: 28/04/2025
   * */

  const HandleFriendRequestremove = (item) => {
  
console.log(item.userKey);

   const dataToRemoveRef = ref(db, `friendRequest/${item.userKey}`);
   remove(dataToRemoveRef)
     .then(() => {
       console.log("Friend request deleted successfully!");
     })
     .catch((error) => {
       console.error("Error deleting friend request:", error);
     });
  }

  const [Totalnumber, setTotalnumber] = useState(userlist.length);

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
                  Totalnumber - 1 == index
                    ? "flex justify-between items-center pt-4 pb-5 "
                    : "flex justify-between items-center pt-4 pb-5 bordercolor"
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
                {friendRequestlist.includes(
                  auth.currentUser.uid.concat(item.userUid)
                ) ? (
                  <button
                    className={BtnStyle}
                    onClick={() => HandleFriendRequestremove(item)}
                  >
                    <FaMinus />
                  </button>
                ) : (
                  <button
                    className={BtnStyle}
                    onClick={() => HandleFriendRequest(item)}
                  >
                    {ButtonText}
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
