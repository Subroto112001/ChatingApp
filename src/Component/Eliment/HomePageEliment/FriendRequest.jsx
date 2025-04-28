import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, off, onValue, push, ref, remove, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import { getAuth } from "firebase/auth";
import moment from "moment/moment";
const FriendRequest = ({
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
  const [requestlist, setRequestlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = getDatabase();

  const auth = getAuth();

  useEffect(() => {
    setLoading(true);
    const fetchdata = () => {
      const UseRef = ref(db, "friendRequest/");
      onValue(UseRef, (snapshot) => {
        let requestBlanklist = [];

        snapshot.forEach((item) => {
          if (auth.currentUser.uid === item.val().ReciverUid)
            requestBlanklist.push({ ...item.val(), FrKey: item.key });
        });
        setRequestlist(requestBlanklist);
        setLoading(false);
      });
    };
    fetchdata();
    // cleanup funtion
    return () => {
      const UseRef = ref(db, "friendRequest/");
      off(UseRef);
    };
  }, []);

  console.log(requestlist);
  /**
   * todo : accept friend request
   * What we will work: we push our all data in friend database and also remove data from friend request databse
   * author : Subroto Kumar Barman
   * date : 28/04/2025
   * */

  const acceptfriendRequest = (item) => {
console.log(item);
    set(push(ref(db, "friend/")), {
      ...item, 
    }).then(() => {
      console.log(item.FrKey);
      
       const dbref = ref(db, `friendRequest/${item.FrKey}`);
       remove(dbref);
    });
  };

  /**
   * todo : remove friend request
   * What we will work:  remove friend request from our database
   * author : Subroto Kumar Barman
   * date : 28/04/2025
   * */
  const removeFriendrequest = (Frkey) => {
    const dbref = ref(db, `friendRequest/${Frkey}`);
    remove(dbref)
      .then(() => {
        console.log("Friend request deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting friend request:", error);
      });
  };

  const [Totalnumber, setTotalnumber] = useState(VariantNumber);

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
                {Totalnumber}
              </span>
            </h2>
            <BsThreeDotsVertical className=" text-blue" />
          </div>
          <div className={BoxStyle}>
            {requestlist.map((item, index) => (
              <div
                className={
                  Totalnumber - 1 == index
                    ? "flex justify-between items-center pt-4 pb-5 "
                    : "flex justify-between items-center pt-4 pb-5 bordercolor"
                }
                key={index}
              >
                <div className="flex justify-center items-center  gap-[15px]">
                  <picture>
                    <img
                      src={item.SenderProfilePicture}
                      alt={item.SenderProfilePicture}
                      className={CardEliment}
                    />
                  </picture>
                  <div>
                    <h3 className={HeaderName}>{item.SenderUserName}</h3>
                    <p className={Subheader}>
                      {moment(item.createaDAte).toNow()}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    className={BtnStyle}
                    onClick={() => {
                      acceptfriendRequest(item);
                    }}
                  >
                    Add
                  </button>
                  <button
                    className={BtnStyle}
                    onClick={() => removeFriendrequest(item.FrKey)}
                  >
                    Remove
                  </button>
                </div>
                <p className={peraStyle}>{PeraText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendRequest;
