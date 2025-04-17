import React from 'react'
import Settings from './Settings'
import { Outlet } from 'react-router'
import InputboxForpages from '../Comon/InputboxForpages';

const SettingsRoute = () => {
  return (
    <div >
      <InputboxForpages
        SearchIconClass={"absolute top-[35%] left-[20px] text-2xl"}
      />

      <div className="flex items-center justify-between">
        <Settings />
        <Outlet />
      </div>
    </div>
  );
}

export default SettingsRoute