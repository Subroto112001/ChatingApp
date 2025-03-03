import React, { useState } from 'react'

import Login from "../assets/Login.jpg"


import Button from '../Component/Comon/Button';
import { NavLink } from 'react-router';

import { LoginInfo } from '../lib/LoginInfo';

import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { Sucesstoast } from '../lib/Toast';

function LogInPage() {
   
const auth = getAuth();
const loginInput = LoginInfo();

  const [login, setLogin] = useState({
    Email: "",
    Password: "",
  });

 const [loginError, setLoginError] = useState({
   Emailerror: "",
   Passworderror: "",
 });

// console.log(login);

  const HandleLoginInput = (e) => {
    const { id, value } = e.target
    setLogin({
      ...login,
      [id]: value,
    });
    
  // console.log(`your id is ${id} and your value is ${value}`);
  
  }
  

  const ErrorHandaler = () => {
    const { Email, Password } = login
    if (!Email) {
      setLoginError({...loginError, Emailerror : "Bhaia Apnar Email den nai" });
    } else if (!Password) {
      setLoginError({...loginError,Emailerror: "", Passworderror: "Bhaia PassWord ta diben to naki"})
    } else {
      setLoginError({ ...loginError, Emailerror: "", Passworderror: "" });
     const { Email, Password } = login;
      signInWithEmailAndPassword(auth, Email, Password)
        .then((userinfo) => {
          Sucesstoast("Login Done");
        console.log(userinfo);
        
      }).catch((error) => {
        console.log(error);
        
      });
    }
  }
  
  const HandleGoogleLOgin = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then((userinfo) => {
      console.log(userinfo);
      
    }).catch((err) => {
      console.log(`error from google log in ${err}`);
      
    });
    
}

  return (
    <>
      <div className="container">
        <div className="Wrapper flex justify-center items-center">
          <div className="left w-[60%] flex justify-center items-center">
            <div className="w-[424px]">
              <h1 className="text-[33px] font-bold text-Second">
                Login to your account!!
              </h1>
              <button
                type="button"
                className="text-white cursor-pointer mt-4 mb-4 bg-[#4285F4] hover:bg-[#4285F4]/90  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center  " onClick={HandleGoogleLOgin}
              >
                <svg
                  className="w-4 h-4 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 19"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Sign in with Google
              </button>
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