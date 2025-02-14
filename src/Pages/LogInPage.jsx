import React, { useState } from 'react'
import InputBox from '../Component/Comon/InputBox'
import Login from "../assets/Login.jpg"
import { FaGoogle } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Button from '../Component/Comon/Button';
function LogInPage() {
   
  return (
    <>
      <div className="container">
        <div className="Wrapper flex justify-center items-center">
          <div className="left w-[60%] flex justify-center items-center">
            <div className="flex w-[424px] flex-col ">
              <h1 className="text-[33px] font-bold text-Second">
                Login to your account!!
              </h1>
              <div className="flex justify-center items-center max-w-[220px] pt-[23px] pb-[21px] pl-[50px] pr-[50px] border border-Second rounded-[8px] mt-[30px] mb-[32px]">
                <span className="font-semibold text-[13px]">
                  <FcGoogle />
                </span>
                &nbsp;
                <h4 className="font-semibold text-[13px] text-Second">
                  {" "}
                  Login with Google
                </h4>
              </div>
              <InputBox Design={"w-[352px]"} LabelData={`Email Adress`} />
              <InputBox
                Design={"w-[352px]"}
                LabelData={`Enter Your PassWord`}
              />
              <Button
                content={"Log In"}
                design={
                  "pt-[20px] pb-[20px] pr-[140px] pl-[140px] rounded-[8px] bg-blue text-[21px] font-semibold text-white mt-[52px] cursor-pointer"
                }
              />
            </div>
          </div>
          <div className="right w-[40%]">
            <picture>
              <img src={Login} alt={Login} />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default LogInPage