import React, { useState } from "react";

import ChatingImage from "../assets/Chating.jpg";
import { Registrationinput } from "../lib/Registrationfrom";
import { FaEye } from "react-icons/fa";
import Button from "../Component/Comon/Button";
const Registration = () => {
  const information = Registrationinput();

  const [email, setemail] = useState("");
  const [fullname, setfullname] = useState("");
  const [passward, setpassward] = useState("");
  const [eye, seteye] = useState(false);

  const Takeinput = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setemail(value);
    } else if (name === "fullname") {
      setfullname(value);
    } else {
      setpassward(value);
    }
  };

  const EyeShow = () => {
    seteye(!eye);
  };

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
                information.name === "Passward" ? (
                  <div className="flex flex-col mt-2 relative ">
                    <label
                      htmlFor="#"
                      className="absolute top-[-5px] left-2 bg-white"
                    >
                      {information.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={eye ? "text" : "Password"}
                      placeholder={`This is Your ${information.name}`}
                      name={information.name}
                      className=" px-2 py-3  border border-amber-900 mt-2 rounded-sm"
                      onChange={Takeinput}
                    />
                    <div
                      className=" absolute top-[50%] cursor-pointer right-[20px]"
                      onClick={EyeShow}
                    >
                      <FaEye />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col mt-2 relative">
                    <label
                      htmlFor="#"
                      className="absolute top-[-5px] left-2 bg-white"
                    >
                      {information.name} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type={information.name == "Email" ? "Email" : "text"}
                      placeholder={`Enter Your ${information.name}`}
                      name={information.name}
                      className="px-2 py-3 border border-amber-900 mt-2 rounded-sm"
                      onChange={Takeinput}
                    />
                  </div>
                )
              )}
              <Button
                content={"Sign Up"}
                design={
                  "pt-[20px] pb-[20px] pr-[140px] pl-[140px] rounded-[85px] bg-blue text-[21px] font-semibold text-white mt-[52px] cursor-pointer"
                }
              />
              <h1 className="text-[14px] font-normal text-center mt-[35px]">
                Already have an account ?{" "}
                <span className="font-bold text-sign">Sign In</span>
              </h1>
            </div>
          </div>
          <div className="right w-[40%]">
            <picture>
              <img src={ChatingImage} alt={ChatingImage} />
            </picture>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
