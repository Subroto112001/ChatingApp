import React from 'react'
import InputboxForpages from '../Comon/InputboxForpages'

import Notice from '../Eliment/NotificationEliment/Notice';

const Notification = () => {
  return (
    <>
      <div className="flex flex-col gap-[26px]" >
        <InputboxForpages
          SearchIconClass={"absolute top-[35%] left-[20px] text-2xl"}
        />
        <div className="flex flex-col justify-center gap-y-3 shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px] p-[35px]">
         <Notice/>
         <Notice/>
         <Notice/>
         <Notice/>
         <Notice/>
         <Notice/>
        </div>
      </div>
    </>
  );
}

export default Notification