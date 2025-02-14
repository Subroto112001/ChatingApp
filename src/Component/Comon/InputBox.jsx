import React, { useState } from 'react'

const InputBox = ({ LabelData, Design }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <div className="flex flex-col relative mt-3">
        <label
          htmlFor="InputField "
          className={`absolute left-2 transition-all text-gray-600 ${
            isFocused || value ? "-top-3  bg-white" : "top-[8px]"
          }`}
        >
          {LabelData}
        </label>
        <input
          type="text"
          id="InputField"
          className={`${Design} border border-amber-800 outline-none px-2 py-3 ${
            isFocused || value
              ? "Border border-blue-400"
              : "border border-amber-800"
          } p-[10px]  pl-2 pr-2`}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </>
  );
};

export default InputBox