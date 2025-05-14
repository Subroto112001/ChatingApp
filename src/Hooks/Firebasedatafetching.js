import { getDatabase, ref, get } from "firebase/database";
import { useEffect, useState } from "react";

const useFetchDatafromFirebase = (dbName) => {
  const db = getDatabase();

  const [infoList, setInfoList] = useState({
    data: [],
    error: null,
    loading: false,
  });

  useEffect(() => {
    const fetchData = async () => {
        setInfoList((prev) => ({
          ...prev,
          loading: true,
          error: null,
        }));

      try {
        const snapshot = await get(ref(db, dbName));
        // const snapshot = await get(ref(db, dbName));
        if (snapshot.exists()) {
          const NewListBlankArr = [];
          snapshot.forEach((item) => {
            NewListBlankArr.push({
              ...item.val(),
              [`${dbName.replace("/", "")}key`]: item.key,
            });
          });

          setInfoList({
            data: NewListBlankArr,
            error: null,
            loading: false,
          });
        } else {
            setInfoList({
              data: [],
              error: new Error("No data available"),
              loading: false,
            });
        }
      } catch (error) {
        setInfoList({
          data: [],
          error,
          loading: false,
        });
        console.error("Firebase get() error:", error);
      }
    };

    fetchData();
  }, [dbName]);
console.log(infoList);

  return infoList;
};

export { useFetchDatafromFirebase };
