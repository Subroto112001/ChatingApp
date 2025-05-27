import {
  getDatabase,
  off,
  onValue,
  push,
  ref,
  remove,
  set,
} from "firebase/database";

const friendFetchData = () => {
  const [friendData, setfriendData] = {
    friend: [],
  };

  seEffect(() => {
    setLoading(true);
    const fetchfriendData = () => {
      const UseRef = ref(db, "friend/");
      onValue(UseRef, (snapshot) => {
        let friendBlanklist = [];

        snapshot.forEach((item) => {
          if (auth.currentUser.uid === item.val().ReciverUid)
            friendBlanklist.push({ ...item.val(), FriendKey: item.key });
        });
          setfriendData({
            friend: friendBlanklist,
          });
        
      });
    };
    fetchfriendData();

    return () => {
      const UseRef = ref(db, "friend/");
      off(UseRef);
    };
  }, []);
    console.log("friend", friendData);
    
};
export { friendFetchData };
