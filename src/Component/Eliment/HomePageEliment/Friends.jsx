import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, off, onValue, push, ref, remove, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import { getAuth } from "firebase/auth";
const Friends = ({
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
  const [friendlist, setfriendlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = getDatabase();
  const auth = getAuth();

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
        let friendBlanklist = [];

        snapshot.forEach((item) => {
         if (auth.currentUser.uid === item.val().ReciverUid)
           friendBlanklist.push({ ...item.val(), FriendKey: item.key });
         
        });
        setfriendlist(friendBlanklist);
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

  const blockfriend = (item) =>{
   set(push(ref(db, "blockuser/")), {
        ...item, 
      }).then(() => {
       
        
         const dbref = ref(db, `friend/${item.FriendKey}`);
         remove(dbref);
      });
}  
  
  
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
                {friendlist.length}
              </span>
            </h2>
            <BsThreeDotsVertical className=" text-blue" />
          </div>
          <div className={BoxStyle}>
            {friendlist.map((item, index) => (
              <div
                className={"flex justify-between items-center pt-4 pb-5 "}
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
                    <p className={Subheader}>Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button
                  className={BtnStyle}
                  onClick={() => blockfriend(item)}
                >
                  Block
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
