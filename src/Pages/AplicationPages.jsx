import React, { useEffect, useState } from "react";

import Home from "../Component/AplicationPages/Home";
import Slidebar from "../Component/HomePageComponent/Slidebar";
import { Outlet, useNavigate } from "react-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Errorpage from "../Component/Eliment/ErrorPage/Errorpage";
const AplicationPages = () => {
  const auth = getAuth();
  const [isVerified, setIsVerified] = useState(false);
const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user.emailVerified) {
        setIsVerified(user.emailVerified);
      }
      else {
        navigate("/login");
        
      }
    });
  }, []);
  return (
    <div>
      {isVerified ? (
        <div className="flex gap-x-[20px] p-3">
          <Slidebar />
          <div className=" h-[96dvh] w-full rounded-2xl ">
            <Outlet />
          </div>
        </div>
      ) : (
        <Errorpage />
      )}
    </div>
  );
};

export default AplicationPages;
