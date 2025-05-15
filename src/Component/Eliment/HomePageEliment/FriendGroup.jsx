import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, onValue, ref, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import { useFetchDatafromFirebase } from "../../../Hooks/Firebasedatafetching";
const FriendGroup = ({
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

  useEffect(() => {
    setLoading(true);
    const fetchdata = () => {
      const UseRef = ref(db, "users/");
      onValue(UseRef, (snapshot) => {
        let userBlanklist = [];

        snapshot.forEach((item) => {
          userBlanklist.push({ ...item.val(), userKey: item.key });
        });
        setUserlist(userBlanklist);
        setLoading(false);
      });
    };
    fetchdata();
  }, []);
  // console.log(userlist);
  const { data } = useFetchDatafromFirebase("Grouplist/");

  if (loading) {
    return <LoadingSkeliton />;
  }
  return (
    <>
      <div className="Group  mt-[20px]">
        <div className="rounded-[20px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] pl-[29px] pr-[27px] flex flex-col">
          <div className="Header flex justify-between items-center">
            <h2 className="text-[20px] flex flex-row justify-center items-center font-semibold text-black">
              Group &nbsp;
              <span className="bg-red-400 text-[18px] w-6 h-6 rounded-full flex justify-center items-center">
               {data.length}
              </span>
            </h2>
            <BsThreeDotsVertical className=" text-blue" />
          </div>
          <div className={BoxStyle}>
            {data.map((item, index) => (
              <div
                className={
                  "flex justify-between items-center pt-4 pb-5 bordercolor"
                }
                key={index}
              >
                <div className="flex justify-center items-center  gap-[15px]">
                  <picture>
                    <img
                      src={item.groupImage}
                      alt={Profilegroup}
                      className={CardEliment}
                    />
                  </picture>
                  <div>
                    <h3 className={HeaderName}>{item.groupName}</h3>
                    <p className={Subheader}>{item.groupTagName}</p>
                  </div>
                </div>
                <button className={BtnStyle}>{ButtonText}</button>
                <p className={peraStyle}>{PeraText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendGroup;
