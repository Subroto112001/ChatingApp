import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, onValue, ref, set } from "firebase/database";
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
          if (auth.currentUser.uid !== item.val().SenderUid)
            requestBlanklist.push({ ...item.val(), userKey: item.key });
        });
        setRequestlist(requestBlanklist);
        setLoading(false);
      });
    };
    fetchdata();
  }, []);


console.log(requestlist);

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
                  <button className={BtnStyle}>Add</button>
                  <button className={BtnStyle}>Remove</button>
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
