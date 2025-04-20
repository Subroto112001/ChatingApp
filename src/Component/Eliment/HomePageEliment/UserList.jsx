import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, off, onValue, ref, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import { getAuth } from "firebase/auth";
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
          if (item.val().userUid !== auth.currentUser.uid)
            userBlanklist.push({ ...item.val(), userKey: item.key });
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
  const HandleFriendRequest = () => {
  
  };

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
                <button
                  className={BtnStyle}
                  onClick={() => HandleFriendRequest()}
                >
                  {ButtonText}
                </button>
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
