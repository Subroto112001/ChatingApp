import React from 'react'
import { RxAvatar } from 'react-icons/rx';

const ProfilePhoto = () => {
  return (
    <div className="w-[49%]">
      <div className="h-[86dvh] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px] p-5 flex flex-col items-center ">
        <div className="avatar flex mt-9 justify-center">
          <span>
            <RxAvatar className="font-bold text-7xl" />
          </span>
        </div>
        <div class="flex  flex-col gap-3 items-center mt-6 ">
          <button
            type="button"
            class="py-2 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 "
          >
            Change picture
          </button>
          <button
            type="button"
            class="py-2 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 "
          >
            Delete picture
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePhoto