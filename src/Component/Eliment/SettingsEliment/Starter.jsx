import React from 'react'
import { CgDarkMode } from 'react-icons/cg';
import { FaKey } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const Starter = () => {
  return (
    <div className="w-[49%]">
      <div className="h-[83dvh] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px] ">
        <h3 className="text-[20px] mt-[26px]  ml-[26px] text-black font-medium">
          Account Settings
        </h3>
        <div className="ml-[78px] flex flex-col mt-[43px] gap-[37px] ">
          <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px] hover:cursor-pointer">
            <span>
              <FaKey />
            </span>
            Change Password
          </h4>
          <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer">
            <span>
              <CgDarkMode />
            </span>
            Theme.
          </h4>
          <h4 className="flex items-center text-[20px] text-black font-normal gap-[37px]  hover:cursor-pointer">
            <span>
              <MdDelete />
            </span>
            Delete Account.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Starter