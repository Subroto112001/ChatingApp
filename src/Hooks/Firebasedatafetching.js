import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
const useFetchDatafromFirebase = (dbName) => {
  const db = getDatabase();
const auth = getAuth();
  const [infoList, setInfoList] = useState({
    data: [],
    fulldata : [],
    errror: null,
    looading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
        setInfoList((prev) => ({
          ...prev,
          looading: true,
          errror: null,
        }));

      try {
        const snapshot = await get(ref(db, dbName));
        // const snapshot = await get(ref(db, dbName));
        if (snapshot.exists()) {
          const NewListBlankArr = [];
          const fulllistarry = []
          snapshot.forEach((item) => {
            if (auth.currentUser.uid == item.val().adminUid) {
              NewListBlankArr.push({
                ...item.val(),
                [`${dbName.replace("/", "")}key`]: item.key,
              });
            }
         
              fulllistarry.push({
                ...item.val(),
                [`${dbName.replace("/", "")}key`]: item.key,
              });
            
          });

          setInfoList({
            data: NewListBlankArr,
            fulldata : fulllistarry,
            errror: null,
            looading: false,
          });
        } else {
          setInfoList({
            data: [],
            fulldata: [],

            errror: new Error("No data available"),
            looading: false,
          });
        }
      } catch (errror) {
        setInfoList({
          data: [],
          fulldata: [],
          errror,
          looading: false,
        });
        console.error("Firebase get() error:", errror);
      }
    };

    fetchData();
  }, [dbName]);
console.log(infoList);

  return infoList;
};

export { useFetchDatafromFirebase };
