import cookieImage from "../assets/asset 0.svg";
import Signup from "../assets/LoginLogo.svg";
import CookieCount from "../assets/asset 2.svg";
import Hamburgur from "../assets/Hamburgur.svg";
import locationWhite from "../assets/LocationWhite.svg";
import phoneLogo from "../assets/phoneLogo.svg";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const container = useRef(null);
  const { contextSafe } = useGSAP({ scope: container });
  const [menuState, setMenuState] = useState(false);
  const hamburgerHandler = contextSafe(() => {
    if (!menuState) {
      gsap.to(".hamburger", {
        display: "block",
        duration: 0.5,
        y: 0,
        opacity: 1,
      }); // Slide container from bottom to top
      setMenuState(true);
    } else {
      gsap.to(".hamburger", {
        display: "none",
        duration: 0.5,
        y: 500,
        opacity: 0,
      }); // Slide container from top to bottom
      setMenuState(false);
    }
  });

  const totalHeight = window.innerHeight; // Get the total height of the window
  const minHeight = `calc(${totalHeight}px - 300px)`; // Calculate min-height

  return (
    <>
      <div
        className="bg-white pt-7 pb-7 pl-6 pr-6 md:pl-16 md:pr-16 w-full relative"
        ref={container}>
        <div className="flex justify-start items-center w-full">
          <img
            src={cookieImage}
            alt="Cookie Crafters"
            className="w-40 md:w-auto"
          />
          <div className="flex justify-between w-full items-center">
            <ul className="flex justify-start items-center pl-8 gap-2">
              <li className="md:block hidden text-slate-600 hover:text-orange-400 p-2 text-lg font-sm hover:border-b-2 hover:border-orange-400 duration-200 ease-in-out cursor-pointer">
                Franchise
              </li>
              <li className="md:block hidden text-slate-600 hover:text-orange-400 p-2 text-lg font-sm hover:border-b-2 hover:border-orange-400 duration-200 ease-in-out cursor-pointer">
                Catering
              </li>
              <li className="md:block hidden text-slate-600 hover:text-orange-400 p-2 text-lg font-sm hover:border-b-2 hover:border-orange-400 duration-200 ease-in-out cursor-pointer">
                Locations
              </li>
            </ul>
            <div className="flex justify-start gap-2 items-center">
              <img
                src={Signup}
                alt="Signup"
                height="35px"
                width="35px"
                className="cursor-pointer  md:w-10 lg:w-12"
              />
              <img
                src={CookieCount}
                alt="Cookie"
                height="35px"
                width="35px"
                className="cursor-pointer  md:w-10 lg:w-12"
              />
              <img
                src={Hamburgur}
                alt="Hamburger"
                height="35px"
                width="35px"
                onClick={hamburgerHandler}
                className="cursor-pointer  md:w-40px lg:w-35px sm:hidden block"
              />
            </div>
          </div>
        </div>

        <div className=" hamburger sm:hidden  h-auto  hidden w-full absolute top-0 left-0   backdrop-blur-sm bg-slate-500/30 translate-y-full opacity-0">
          <div
            className=" sm:hidden h-[100px] w-full"
            onClick={hamburgerHandler}></div>

          <div className=" sm:hidden  h-[200px] w-full bg-black flex flex-col justify-center items-center">
            <div className="flex justify-evenly items-center gap-3">
              <img src={locationWhite} alt="location" />
              <h3 className="font-medium text-white text-xl">Store Location</h3>
              <h4 className="font-bold text-[#ff9330]">Change</h4>
            </div>
            <div>
              <h3 className="font-medium text-white text-sm text-center m-2">
                Rajasthan Jaipur Sodala <br /> Govindpuri D-77
              </h3>
            </div>
            <div className="flex justify-evenly items-center gap-1">
              <img src={phoneLogo} alt="phone" height="30px" width="25px" />
              <h3 className="font-medium text-white text-xl text-center m-2">
                9782466675
              </h3>
              <a href="*" className="font-bold  text-[#ff9330]">
                Email
              </a>
            </div>
          </div>

          <div
            className=" sm:hidden min-h-calc(totalheight - 300px)  w-full bg-white flex flex-col justify-start items-center p-5 relative"
            style={{ minHeight }}>
            <h2 className="font-bold text-black text-xl">
              Looking for a delivery?
            </h2>
            <p className="font-bold text-slate-600 text-sm mb-10">
              Visit one of our partner site
            </p>
            <a
              href="*"
              className="m-2 font-bold text-black text-[18px] text-center">
              About Us
            </a>
            <a
              href="*"
              className="m-2 font-bold text-black text-[18px] text-center">
              Careers
            </a>
            <a
              href="*"
              className="m-2 font-bold text-black text-[18px] text-center">
              Contact Us
            </a>
            <a
              href="*"
              className="m-2 font-bold text-black text-[18px] text-center">
              Terms & Conditions
            </a>
            <a
              href="*"
              className="m-2 font-bold text-black text-[18px] text-center">
              Franchise
            </a>
            <a
              href="*"
              className="m-2 font-bold text-black text-[18px] text-center">
              Nutritional & Allergy Informations
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
