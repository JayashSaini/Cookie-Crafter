import React from "react";
import cookieImage from "../assets/asset 0.svg";
import signinbg1 from "../assets/signinBg1.svg";
import signinbg2 from "../assets/signinBg2.svg";
import { useMyContext } from "../context/ContextProvider";
import axios from "axios";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Signin: React.FC = () => {
  const navigate = useNavigate();
  const { toggleSignInModel } = useMyContext();

  const signInHandler = () => {
    axios
      .get(`/api/auth/google`)
      .then((res) => {
        console.log("res is : ", res);
        toggleSignInModel();
        navigate("/catering");
      })
      .catch((err) => {
        console.log("error is : ", err);
      });
  };

  // Handler to close the modal when clicking outside
  const handleOutsideClick = () => {
    document.body.classList.remove("modal-open");
    toggleSignInModel();
  };

  // Prevent event propagation when clicking inside the modal content
  const handleInsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        className="modal-open z-10 fixed inset-0  h-screen w-full bg-gray-500/30 backdrop-blur-sm flex items-center justify-center p-6"
        onClick={handleOutsideClick}>
        <div
          className="min-h-48 z-50 md:w-[330px] sm:w-4/5 w-full bg-white rounded-2xl border-none shadow-xl shadow-black px-6 py-2 relative"
          onClick={handleInsideClick}>
          <div className="md:w-4/5 w-full m-auto">
            <img
              src={cookieImage}
              alt="cookieBG"
              className="mx-auto mt-4 mb-8 w-[150px]"
            />
            <div className="w-full my-5 z-auto">
              <h1 className="text-center my-2 text-xl font-semibold ">
                Sign In
              </h1>
              <p className="text-center text-gray-500 font-normal text-xs w-[170px] m-auto">
                to save your billing details, review your order history
              </p>
            </div>
          </div>
          <hr className="border-gray-300" />
          <div className="flex justify-center my-5">
            <Button
              backgroundColor="bg-black"
              text="Sign in with Google"
              textColor="text-white"
              onClick={signInHandler}
            />
          </div>
          <img src={signinbg1} className=" w-[50px] absolute top-24 left-0" />
          <img src={signinbg2} className=" w-[40px] absolute top-12 right-5" />
        </div>
      </div>
    </>
  );
};

export { Signin };
