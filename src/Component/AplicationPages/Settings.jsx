import React from "react";
import InputboxForpages from "../Comon/InputboxForpages";
import Images from "../../assets/profilesettings.jpg";
const Settings = () => {
  return (
    <>
      <div>
        <InputboxForpages
          SearchIconClass={"absolute top-[35%] left-[20px] text-2xl"}
        />

        <div>
          <div className="w-[50%] p-[26px] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px]">
            <div className="flex flex-col ">
              <h3 className="text-[20px] text-black font-medium">
                Profile Settings
              </h3>
              <div className="felx flex-row gap-[31px] ">
                <div className="w-[100px] h-[100px] rounded-full">
                  <picture>
                    <img
                      src={Images}
                      alt={Images}
                      className="w-[100%] h-[100%] rounded-full object-cover"
                    />
                  </picture>
                </div>
                <h3 className="text-[25px] text-black font-semibold">
                  A B M Shawon Islam
                </h3>
    <p>Programmer</p>
              </div>
            </div>
          </div>
          <div className="w-[50%]"></div>
        </div>
      </div>
    </>
  );
};

export default Settings;
