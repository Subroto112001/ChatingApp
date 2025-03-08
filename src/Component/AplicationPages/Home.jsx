import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import Profilegroup from "../../assets/FriendGroup.jpg";
import ProfilePicture2 from "../../assets/GroupPicture2.jpg";
import ProfileCar from "../../assets/CarProfile.jpg";
import { IoIosSearch } from 'react-icons/io';
const GroupContet = () => {
  return (
    <>
      <div className="w-[36%] flex flex-col ">
        <div className="relative">
          <input
            type="search"
            className="rounded-3xl border pl-[78px] pr-[23px] pb-[18px] pt-[18px] w-full border-none outline-none shadow-[0px_7px_6px_-2px_rgba(0,_0,_0,_0.1)]"
            placeholder="Search Here"
          />
          <IoIosSearch className="absolute top-[35%] left-[20px] text-2xl" />

          <BsThreeDotsVertical className="absolute top-[40%] right-[35px] text-blue" />
        </div>

        {/* firends group zonde */}
        <div className="Group  mt-[50px]">
          <div className="rounded-[20px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] pl-[29px] pr-[27px] flex flex-col gap-y-[20px]">
            <div className="Header flex justify-between items-center">
              <h2 className="text-[20px] font-semibold text-black">Group</h2>
              <BsThreeDotsVertical className=" text-blue" />
            </div>
            <div className='flex justify-between items-center'>
              <div className="flex justify-center items-center gap-[14px]">
                <picture>
                  <img
                    src={Profilegroup}
                    alt={Profilegroup}
                    className="w-[70px] h-[70px] rounded-full"
                  />
                </picture>
                <div>
                  <h3 className="text-[18px] font-bold text-black">
                    Friends Reunion
                  </h3>
                  <p className="text-[14px] font-medium text-sms">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <button className="text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded bg-blue">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* friend Request zone */}
        {/* <div className="Group  mt-[43px]">
          <div className="rounded-[20px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] pl-[25px] pr-[25px] flex flex-col gap-y-[20px]">
            <div className="Header flex justify-between items-center">
              <h2 className="text-[20px] font-semibold text-black">
                Friend Request
              </h2>
              <BsThreeDotsVertical className=" text-blue" />
            </div>
            <div className="flex items-center  justify-between pb-[13.5px]  bordercolor ">
              <div className="flex justify-center items-center gap-[14px]">
                <picture>
                  <img
                    src={Profilegroup}
                    alt={Profilegroup}
                    className="w-[70px] h-[70px] rounded-full"
                  />
                </picture>
                <div>
                  <h3 className="text-[18px] font-bold text-black">
                    Friends Reunion
                  </h3>
                  <p className="text-[14px] font-medium text-sms">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <button className="text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded bg-blue">
                Join
              </button>
            </div>
            <div className="flex items-center  justify-between pb-[13.5px]  bordercolor ">
              <div className="flex justify-center items-center gap-[14px]">
                <picture>
                  <img
                    src={ProfilePicture2}
                    alt={ProfilePicture2}
                    className="w-[70px] h-[70px] rounded-full"
                  />
                </picture>
                <div>
                  <h3 className="text-[18px] font-bold text-black">
                    Friends Reunion
                  </h3>
                  <p className="text-[14px] font-medium text-sms">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <button className="text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded bg-blue">
                Join
              </button>
            </div>
            <div className="flex items-center  justify-between pb-[13.5px] bordercolor  ">
              <div className="flex justify-center items-center gap-[14px]">
                <picture>
                  <img
                    src={ProfileCar}
                    alt={ProfileCar}
                    className="w-[70px] h-[70px] rounded-full"
                  />
                </picture>
                <div>
                  <h3 className="text-[18px] font-bold text-black">
                    Friends Reunion
                  </h3>
                  <p className="text-[14px] font-medium text-sms">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <button className="text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded bg-blue">
                Join
              </button>
            </div>
            <div className="flex items-center  justify-between pb-[13.5px]   ">
              <div className="flex justify-center items-center gap-[14px]">
                <picture>
                  <img
                    src={ProfileCar}
                    alt={ProfileCar}
                    className="w-[70px] h-[70px] rounded-full"
                  />
                </picture>
                <div>
                  <h3 className="text-[18px] font-bold text-black">
                    Friends Reunion
                  </h3>
                  <p className="text-[14px] font-medium text-sms">
                    Hi Guys, Wassup!
                  </p>
                </div>
              </div>
              <button className="text-[20px] text-white font-semibold pl-[22px] pr-[22px] rounded bg-blue">
                Join
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default GroupContet