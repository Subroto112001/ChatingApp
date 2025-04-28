import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, off, onValue, push, ref, remove, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
const BlockUser = ({
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
  const [blockuserlist, setblockuserlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = getDatabase();

  useEffect(() => {
    setLoading(true);
    const fetchdatablockuser = () => {
      const UseRef = ref(db, "blockuser/");
      onValue(UseRef, (snapshot) => {
        let blockBlanklist = [];

        snapshot.forEach((item) => {
          blockBlanklist.push({ ...item.val(), blockKey: item.key });
        });
        setblockuserlist(blockBlanklist);
        setLoading(false);
      });
    };
    fetchdatablockuser();


    return () => {
             const UseRef = ref(db, "friend/");
             off(UseRef);
           };
  }, []);


console.log(blockuserlist);


/**
 * todo : unblock blocked user
 * what we will do : here frist send all data friend database
 * 2nd we will remove all data from block database
 * date : 28/04/2025
 * */
  
  const handleunblock = (item) => {
    set(push(ref(db, "friend/")), {
      ...item,
    }).then(() => {
      console.log(item.FrKey);

      const dbref = ref(db, `blockuser/${item.blockKey}`);
      remove(dbref);
    });
  };

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
                {blockuserlist.length}
              </span>
            </h2>
            <BsThreeDotsVertical className=" text-blue" />
          </div>
          <div className={BoxStyle}>
            {blockuserlist.map((item, index) => (
              <div
                className={
                  
              
                  "flex justify-between items-center pt-4 pb-5 bordercolor"
                }
                key={index}
              >
                <div className="flex justify-center items-center  gap-[15px]">
                  <picture>
                    <img
                      src={item.SenderProfilePicture}
                      alt={Profilegroup}
                      className={CardEliment}
                    />
                  </picture>
                  <div>
                    <h3 className={HeaderName}>{item.SenderUserName}</h3>
                  </div>
                </div>
                <button
                  className={BtnStyle}
                  onClick={() => handleunblock(item)}
                >
                  {ButtonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockUser;
