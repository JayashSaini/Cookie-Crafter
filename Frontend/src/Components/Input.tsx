import React from "react";
import { InputData } from "../types/types";

const Input: React.FC<InputData> = ({
  label,
  type = "text",
  onChange,
  value,
  style,
}) => {
  return (
    <>
      <div className="w-full my-2">
        <label
          className={`${
            style == "credentials"
              ? "text-gray-300 font-normal text-sm"
              : "text-white font-bold text-md"
          }`}>
          {label}
        </label>
        <br />
        <input
          type={type}
          value={value}
          onChange={onChange}
          className=" remove-arrow  w-full  h-8 my-2 bg-transparent border-gray-400 hover:border-gray-300 border-2 rounded-lg text-gray-200 p-1 appearance-none 
           font-medium text-sm tracking-wider focus:border-orange-400 outline-none duration-200 ease-out
          "
        />
      </div>
    </>
  );
};

export default Input;
