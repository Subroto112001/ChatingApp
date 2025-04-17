import React from "react";
import { RxAvatar } from "react-icons/rx";

const EditProfile = () => {
  return (
    <div className="w-[49%]">
      <div className="h-[86dvh] shadow-[0px_12px_23px_-2px_rgba(0,_0,_0,_0.1)] rounded-[20px] p-5 flex flex-col items-center ">
        <h3 className="text-[20px] text-black font-medium">
          Change Profile Information
        </h3>

       

        <div className="informationbox flex justify-center items-center gap-3 mt-9">
          <div class="left flex flex-col items-center gap-3 ">
            <div class="w-full">
              <label
                for="first_name"
                class="block mb-2 text-[20px] font-normal  text-indigo-900"
              >
                Your first name
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                placeholder="Your first name"
                value="Jane"
              />
            </div>

            <div class="w-full">
              <label
                for="last_name"
                class="block mb-2 text-[20px] font-normal  text-indigo-900"
              >
                Your last name
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                placeholder="Your last name"
                value="Ferguson"
                required
              />
            </div>
          </div>
          <div className="right flex flex-col items-center gap-3">
            <div class="email">
              <label
                for="email"
                class="block mb-2 text-[20px] font-normal  text-indigo-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                placeholder="your.email@mail.com"
                required
              />
            </div>

            <div class=" profession">
              <label
                for="profession"
                class="block mb-2 text-[20px] font-normal  text-indigo-900"
              >
                Profession
              </label>
              <input
                type="text"
                id="profession"
                class="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                placeholder="your profession"
              />
            </div>
          </div>
        </div>
        <div class="flex  mt-9">
          <button
            type="submit"
            class="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
