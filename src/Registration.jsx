import React, { useState } from 'react'
import Image from './assets/Chattingpage.png'
import { Registrationinput } from "./lib/Registrationfrom";
import { FaEye } from 'react-icons/fa';
const Registration = () => {
 const information = Registrationinput();
  
  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [passward, setpassward] = useState("");
  const [eye, seteye] = useState("false");
  
  
  const Takeinput = (event) => {
    const { name, value } = event.target;
  
    if (name === "email") {
      setemail(value);
    }
    else if (name === "fullname") {
      setfullname(value)
    }
    else {
      setpassward(value)
    }
    
  }

  const EyeShow = () => {
    seteye(!eye);
  }
  
  



  return (
    <>
      <div className="container">
        <div className="Wrapper flex justify-center items-center">
          <div className="Left w-[60%] flex justify-center items-center">
            <div className="ChatingRegInfo flex flex-col  ">
              <h1 className="text-blue font-bold text-[34px]">
                Get started with easily register
              </h1>
              <h2 className="mt-[13px] text-blackcus mb-[53px]">
                Free register and you can enjoy it
              </h2>
              {information.map((information) =>
                information.name === "passward" ? (
                  <div className="flex flex-col relative ">
                    <label htmlFor="#">
                      {information.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={eye ? "text" : "password"}
                      placeholder={`This is Your ${information.name}`}
                      name={information.name}
                      className="px-2 py-3 border border-amber-900 mt-2 rounded-sm"
                      onChange={Takeinput}
                    />
                    <div
                      className=" absolute top-[60%] right-[20px]"
                      onClick={EyeShow}
                    >
                      <FaEye />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <label htmlFor="#">
                      {information.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={
                        information.name == "email"
                          ? "email" :"text"
                         
                      }
                      placeholder={`Enter Your ${information.name}`}
                      name={information.name}
                      className="px-2 py-3 border border-amber-900 mt-2 rounded-sm"
                      onChange={Takeinput}
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <div className="right w-[40%]">
            <picture>
              <img src={Image} alt={Image} />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration