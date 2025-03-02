import React, { useState } from 'react'
import InputBox from '../Component/Comon/InputBox'
import Login from "../assets/Login.jpg"

import { FcGoogle } from 'react-icons/fc';
import Button from '../Component/Comon/Button';
import { NavLink } from 'react-router';

import { LoginInfo } from '../lib/LoginInfo';
import { IoInformation } from 'react-icons/io5';

function LogInPage() {
   

const loginInput = LoginInfo();

  const [login, setLogin] = useState({
    Email: "",
    Password: "",
  });

 const [loginError, setLoginError] = useState({
   Emailerror: "",
   Passworderror: "",
 });

console.log(login);

  const HandleLoginInput = (e) => {
    const { id, value } = event.target
    setLogin({
      ...login,
      [id]: value,
    });
    
  console.log(`your id is ${id} and your value is ${value}`);
  
  }
  

  const ErrorHandaler = () => {
    const { Email, Password } = login
    if (!Email) {
      setLoginError({...loginError, Emailerror : "Bhaia Apnar Email den nai" });
    } else if (!Password) {
      setLoginError({...loginError, Passworderror: "Bhaia PassWord ta diben to naki"})
    }
  }

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
                  Login with Google
                </h4>
              </div>
              {loginInput.map((logininfo) => (
                <div className="flex flex-col ">
                  <label htmlFor="#" className="bg-white">
                    {logininfo.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    onChange={HandleLoginInput}
                    id={logininfo.name}
                    className=" px-2 py-3  border border-amber-900 mt-2 rounded-sm"
                    type={logininfo.name === "Email" ? "email" : "password"}
                    placeholder={
                      logininfo.name == "Email"
                        ? "Enter Your Email"
                        : "Enter Your Password"
                    }
                  />
                  {(logininfo.name == "Email" && loginError.Emailerror && (
                    <span className=" rounded text-[20px] font-semibol mt-2 text-red-500">
                      {loginError.Emailerror}
                    </span>
                  )) ||
                    (logininfo.name == "Password" &&
                      loginError.Passworderror && (
                        <span className=" rounded mt-2 text-[20px] font-semibold text-red-500">
                          {loginError.Passworderror}
                        </span>
                      ))}
                </div>
              ))}
              <p className="mt-4">
                Don't have an account? &nbsp;
                <NavLink
                  to="/signup"
                  className="text-[#5F35F5] cursor-pointer hover:underline"
                >
                  Sign up
                </NavLink>
              </p>
              <Button
                SignHandle={ErrorHandaler}
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