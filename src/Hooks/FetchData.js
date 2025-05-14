
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
const useFetchData = () => {
    const [info, setInfo] = useState({
      data: [],
      error: {},
      loading: false,
    });

    useEffect(() => {

        
        const fetchdata = (dbName) => {
            const db = getDatabase();
            const starCountRef = ref(db, dbName);
            onValue(starCountRef, (snapshot) => {

                let NewBlankListArray = []
                snapshot.forEach((item) => {
              NewBlankListArray.push({...item.val(), [`${dbName}Key`]: item.key})
                  
                })
                setInfo({
                    ...info,
                    data : NewBlankListArray
                })
            });
        }
        fetchdata()
    }, [])
    // here we will log the data
    console.log(info);
    
}

export { useFetchData};