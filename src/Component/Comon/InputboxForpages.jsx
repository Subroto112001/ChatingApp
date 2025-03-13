import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import { IoIosSearch } from 'react-icons/io';

const InputboxForpages = ({ SearchIconClass }) => {
  return (
    <>
      <div className="relative">
        <input
          type="search"
          className="rounded-3xl border pl-[78px] pr-[23px] pb-[18px] pt-[18px] w-full border-none outline-none shadow-[0px_7px_6px_-2px_rgba(0,_0,_0,_0.1)]"
          placeholder="Search Here"
        />
        <IoIosSearch className={SearchIconClass} />

        <BsThreeDotsVertical className="absolute top-[40%] right-[5%] text-blue" />
      </div>
    </>
  );
};

export default InputboxForpages