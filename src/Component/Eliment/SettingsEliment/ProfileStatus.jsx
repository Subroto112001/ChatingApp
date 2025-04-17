import React, { useState } from 'react'

const ProfileStatus = () => {

    const [status, setStatus] = useState(false)
    const handleChange = () => {
       setStatus(prev=> !prev)
   };
  return (
    <div className="w-[49%]">
      <div className="h-[86dvh] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px] p-5 flex gap-4 justify-center items-center">
       

              <span className='bg-blue-500 px-4 py-2 rounded font-bold text-[22px] text-blue-50'>{ status? "ON": "OFF"}</span>
            
<button className='bg-blue px-4 py-2 font-bold text-[22px] rounded '  onClick={handleChange}>Change</button>
         
       
      </div>
    </div>
  );
}

export default ProfileStatus