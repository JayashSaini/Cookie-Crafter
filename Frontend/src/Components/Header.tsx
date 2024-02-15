import cookieImage from "../assets/asset 0.svg";
import Signup from "../assets/LoginLogo.svg";
import CookieCount from "../assets/asset 2.svg";
import Hamburgur from "../assets/Hamburgur.svg";
const Header = () => {
  return (
    <>
      <div className="bg-white pt-7 pb-7 pl-6 pr-6 md:pl-16 md:pr-16 w-full">
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
                height="40px"
                width="40px"
                className="cursor-pointer"
              />
              <img
                src={CookieCount}
                alt="Cookie"
                height="35px"
                width="35px"
                className="cursor-pointer"
              />
              <img
                src={Signup}
                alt="Signup"
                height="40px"
                width="40px"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
