import { useState } from "react";
import CookieLogo from "../assets/WhiteCookie.svg";
import appStoreIMG from "../assets/asset 21.png";
import playStoreIMG from "../assets/asset 22.png";
const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  return (
    <>
      <div className="hidden lg:flex w-full justify-evenly items-center gap-5 bg-black p-14">
        <div className="m-2 p-5">
          <img
            src={CookieLogo}
            alt="cookie"
            width="220px"
            className="cursor-pointer"
          />

          <h3 className="text-white mt-5 mb-5 text-xl">
            Taste the Difference!
          </h3>

          <div className="flex gap-2 items-center justify-evenly">
            <img
              src={appStoreIMG}
              alt="appstore"
              width="100px"
              className="bg-slate-900 rounded-md"
            />
            <img
              src={playStoreIMG}
              alt="playstore"
              width="100px"
              className="bg-slate-900 rounded-md"
            />
          </div>
        </div>
        <div className="m-2 p-5  w-[400px]">
          <h2 className="font-extrabold  text-white text-4xl mb-5">INFO</h2>
          <ul className="columns-2 font-semibold text-white text-[18px]">
            <li className="hover:text-[#ff9330] duration-200 ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="hover:text-[#ff9330] duration-200 ease-in-out cursor-pointer">
              Career
            </li>
            <li className="hover:text-[#ff9330] duration-200 ease-in-out cursor-pointer">
              Contact Us
            </li>
            <li className="hover:text-[#ff9330] duration-200 ease-in-out cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-[#ff9330] duration-200 ease-in-out cursor-pointer">
              Catering
            </li>
            <li className="hover:text-[#ff9330] duration-200 ease-in-out cursor-pointer">
              Franchise
            </li>
            <li className="hover:text-[#ff9330] duration-200 ease-in-out cursor-pointer">
              Nutritional & Allergy Information
            </li>
          </ul>
        </div>
        <div className=" w-1/3 m-2 p-2 ">
          <h1 className=" font-extrabold  text-white text-4xl mb-5 leading-tight cursor-pointer">
            <span className="font-[1000] text-[#ff9330]">SUBSCRIBE</span> TO OUR
            EMAILS.
          </h1>
          <div className="flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-64 px-4 py-2 border font-semibold text-black border-gray-300  focus:outline-none rounded-full rounded-r-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="px-4 py-[10px] bg-orange-500 text-white  font-bold hover:bg-orange-600 focus:outline-none rounded-full rounded-l-none">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
