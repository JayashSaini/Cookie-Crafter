import React from "react";

const Home = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-slate-500 pl-16 pr-pl-16">
        <div className="flex min-h-screen justify-center items-center w-full">
          <div className="w-1/2 flex flex-col  bg-sky-400">
            <h1 className="font-[1000] text-[80px] leading-tight">
              TASTE THE <br />
              DIFFERENCE.
            </h1>

            <h2 className="font-[600] text-[27px] text-slate-700 ">
              Real Eggs, Real Butter, Real Sugar.
            </h2>
          </div>
          <div className="w-1/2 flex flex-col  bg-sky-400"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
