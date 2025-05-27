import React, { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Profilegroup from "../../../assets/FriendGroup.jpg";
import { getDatabase, onValue, ref, set } from "firebase/database";
import LoadingSkeliton from "../Skeliton/LoadingSkeliton";
import Modal from "react-modal";
import { closeModal, openModal } from "../../../utiles/modals.utils";
import { validationgroup } from "../../../Validation/grouplist.validation";
import { handleChange } from "../../../utiles/HandleChange.utiles";
import { cloudinaryUploadImage } from "../../../utiles/Cloudinary.utiles";
import { firebaseUpload } from "../../../utiles/UploadFirebase.utiles";
import { getAuth } from "firebase/auth";
import { useFetchData } from "../../../Hooks/FetchData";
import { useFetchDatafromFirebase } from "../../../Hooks/Firebasedatafetching";
import GroupError from "../ErrorPage/GroupError";
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

  const auth = getAuth()
  const inputRef = useRef(null)
  const [userlist, setUserlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const db = getDatabase();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [groupInfo, setGroupInfo] = useState({
    groupName: "",
    groupTagName: "",
    groupImage: "",
  });

  const [error, setError] = useState({});
const [newloading, setNewloading] = useState(false)
  // react modal custom style
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      width: "40%",
      transform: "translate(-50%, -50%)",
    },
  };

  // react modal custom style

  

 
  


  

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
 

  /**
   *
   * todo : Create A group
   *
   * */

  const handleCreateGroup = async () => {
    const eroor = validationgroup(groupInfo, setError);
    if (!eroor) return
    /**
     * 
     * todo : update image to coludinary
     * 
     * */
    
    const formdata = new FormData()
    formdata.append("file", groupInfo.groupImage[0]);
    formdata.append("upload_preset", import.meta.env.VITE_UPLOAD_PRESET);

    setNewloading(true);
    try {
    const Url =  await cloudinaryUploadImage(formdata);
      await firebaseUpload("Grouplist/", {
        adminUid: auth.currentUser.uid,
        adminName: auth.currentUser.displayName,
        adminEmail: auth.currentUser.email,
        adminPhoto: auth.currentUser.photoURL,
        groupName: groupInfo.groupName,
        groupTagName: groupInfo.groupTagName,
       groupImage : Url
      });
    } catch (eroor) {
      console.log( "eroor from casthc error cloudinary",eroor);
      
    } finally {
      setNewloading(false);
      setGroupInfo({
        groupName: "",
        groupTagName: "",
        groupImage: "",
      });
      setError({})
      closeModal(setIsOpen);
      if (inputRef.current) {
        inputRef.current.value = null
      }
    }

  };

console.log(inputRef.current);
const { fulldata, errror } = useFetchDatafromFirebase("Grouplist/");

 
  if (false) {
    return <GroupError/>
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
                {fulldata.length}
              </span>
            </h2>
            <button
              className="p-2 bg-blue text-white font-bold text-[14px] cursor-pointer rounded "
              onClick={() => openModal(setIsOpen)}
            >
              Create Group
            </button>
          </div>
          <div className={BoxStyle}>
            {fulldata.map((item, index) => (
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

      {/* modal code  */}

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <div>
            <button
              onClick={() => closeModal(setIsOpen)}
              className="text-red-600  bg-green-500 p-2 rounded font-bold text-[12px] cursor-pointer"
            >
              Close
            </button>

            <div class=" mt-6 flex flex-col justify-center  w-full p-6 bg-gray-800 border border-gray-200 rounded-lg shadow-sm">
              <div class="mb-6">
                <label
                  for="success"
                  class="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  Group Name
                </label>
                <input
                  onChange={(event) =>
                    handleChange(event, setGroupInfo, setError)
                  }
                  // onKeyUp={handlekey}
                  type="text"
                  id="success"
                  value={groupInfo.groupName}
                  name="groupName"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                  placeholder="Enter Group Name"
                />

                {error.groupNameError && (
                  <span class="mt-2 text-sm text-red-500">
                    {error.groupNameError}
                  </span>
                )}
              </div>
              <div className="mb-6 ">
                <label
                  for="success"
                  className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
                >
                  Group Tag name
                </label>
                <input
                  value={groupInfo.groupTagName}
                  type="text"
                  id="success"
                  onChange={(event) =>
                    handleChange(event, setGroupInfo, setError)
                  }
                  // onKeyUp={handlekey}
                  name="groupTagName"
                  className="bg-green-50 border border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500"
                  placeholder="Enter Group Tag Name"
                />

                {error.groupTagNameError && (
                  <span class="mt-2 text-sm text-red-500">
                    {error.groupTagNameError}
                  </span>
                )}
              </div>

              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>

                    {groupInfo?.groupImage ? (
                      <p className="text-xs text-white ">
                        {groupInfo?.groupImage[0]?.name}
                      </p>
                    ) : (
                      <p className="text-xs text-white ">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    )}

                    {error.groupImageError && (
                      <span class="mt-2 text-sm text-red-500">
                        {error.groupImageError}
                      </span>
                    )}
                  </div>
                  <input
                    id="dropzone-file"
                    name="groupImage"
                    type="file"
                    ref={inputRef}
                    // onKeyUp={handlekey}
                    class="hidden"
                    onChange={(event) =>
                      handleChange(event, setGroupInfo, setError)
                    }
                  />
                </label>
              </div>
              {newloading ? (
                <button className="p-2 mt-2 bg-green-500 text-white font-bold rounded cursor-pointer">
                  Uploading...
                </button>
              ) : (
                <button
                  className="p-2 mt-2 bg-green-500 text-white font-bold rounded cursor-pointer"
                  onClick={handleCreateGroup}
                >
                  Upload
                </button>
              )}
            </div>
          </div>
        </Modal>
      </div>

      {/* modal code  */}
    </>
  );
};

export default GroupList;
