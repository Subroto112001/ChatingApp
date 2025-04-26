import InputboxForpages from "../Comon/InputboxForpages";

import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue, push, off } from "firebase/database";
import React, { useEffect, useState } from "react";
import Notice from "../Eliment/NotificationEliment/Notice";

const Notification = () => {
  const db = getDatabase();
  const auth = getAuth();
  const [notice, setNotice] = useState([]);

  /**
   * todo : fetch data from notification database
   *
   * */

 useEffect(() => {
   const notificationRef = ref(db, "notification/");

   const fetchData = () => {
     onValue(notificationRef, (snapshot) => {
       let userBlankList = [];

       snapshot.forEach((item) => {
         userBlankList.push({ ...item.val(), userKey: item.key });
       });

       setNotice(userBlankList);
     });
   };

   fetchData();

   // Cleanup function
   return () => {
     off(notificationRef);
   };
 }, []);

  console.log(notice);
  return (
    <>
      <div className="flex flex-col gap-[26px]">
        <InputboxForpages
          SearchIconClass={"absolute top-[35%] left-[20px] text-2xl"}
        />
        <div className="bordercolor pb-6">
          {notice.length > 0 ? (
            notice.map((item) => (
              <p>
                {item.Notificationmsg} from {item.SenderUserName}
              </p>
            ))
          ) : (
            <p>No notifications available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Notification;
