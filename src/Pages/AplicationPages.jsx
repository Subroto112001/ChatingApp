import React from 'react'

import Home from "../Component/AplicationPages/Home"
import Slidebar from '../Component/HomePageComponent/Slidebar';
import { Outlet } from 'react-router';

const AplicationPages = () => {
  return (
    <div className="flex gap-x-[20px] p-3">
      <Slidebar />
      <div className=" h-[96dvh] w-full rounded-2xl ">
        <Outlet />
      </div>

      {/* <Home/> */}
    </div>
  );
};

export default AplicationPages;