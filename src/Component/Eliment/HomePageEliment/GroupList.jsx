import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, onValue, ref, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import Modal from "react-modal";


const GroupList = ({
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
const [modalIsOpen, setIsOpen] = useState(false);

  // react modal custom style
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

  // react modal custom style
/**
 * 
 * This Two function will work for modal opening and closing
 * 
 * */ 
  function openModal() {
    setIsOpen(true);
  }

    function closeModal() {
      setIsOpen(false);
    }


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
            <button
              className="p-2 bg-blue text-white font-bold text-[14px] cursor-pointer rounded "
              onClick={openModal}
            >
              Create Group
            </button>
          </div>
          <div className={BoxStyle}>
            {[...new Array(Totalnumber)].map((_, index) => (
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
                      src={Profilegroup}
                      alt={Profilegroup}
                      className={CardEliment}
                    />
                  </picture>
                  <div>
                    <h3 className={HeaderName}>Friends Reunion</h3>
                    <p className={Subheader}>Hi Guys, Wassup!</p>
                  </div>
                </div>
                <button className={BtnStyle}>{ButtonText}</button>
                <p className={peraStyle}>{PeraText}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* modal code  */}

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div>
            <button
              onClick={closeModal}
              className="text-red-600 bg-blue p-2 rounded font-bold text-[12px] cursor-pointer"
            >
              Close
            </button>

            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
              <div class="mb-6">
                <label
                  for="success"
                  class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="success"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                  placeholder="Success input"
                />
                <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                  <span className="font-medium">Well done!</span> Some success
                  message.
                </p>
              </div>
              <div className="mb-6">
                <label
                  for="success"
                  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="success"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                  placeholder="Success input"
                />
                <p className="mt-2 text-sm text-green-600 dark:text-green-500">
                  <span className="font-medium">Well done!</span> Some success
                  message.
                </p>
              </div>
            </div>
          </div>
        </Modal>
      </div>

      {/* modal code  */}
    </>
  );
};

export default GroupList;
