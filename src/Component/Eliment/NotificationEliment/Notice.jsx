import React from 'react'
import { IoNotifications } from 'react-icons/io5';

const Notice = () => {
  return (
    <>
      <div className="bordercolor pb-6" >
        <p className="flex justify-center items-center gap-[42px] text-[16px] font-medium  ">
          <span className="text-3xl text-gray-600 font-semibold">
            <IoNotifications />
          </span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A deleniti
          doloribus dicta non est reiciendis beatae atque rerum, pariatur sed ex
          tenetur facilis natus inventore nostrum libero? Ad, magnam doloremque.
        </p>
      </div>
    </>
  );
}

export default Notice