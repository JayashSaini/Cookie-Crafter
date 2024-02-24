import Button from "../../Components/Button";
import cookie1 from "../../assets/asset 6.png";
import cookie2 from "../../assets/asset 7.png";
import cookie3 from "../../assets/asset 9.png";
import arrow from "../../assets/asset 8.svg";
import appStoreIMG from "../../assets/asset 21.png";
import playStoreIMG from "../../assets/asset 22.png";
// import Cookie2 from "../../assets/Cookie2.jpeg";
// import cookieBg from "../../assets/cookieBg.svg";

import { useMyContext } from "../../context/ContextProvider";

const Home = () => {
  const { hamburgerState } = useMyContext();
  return (
    <>
      <div
        className={` ${
          hamburgerState ? "hidden" : "block"
        } sm:block w-full min-h-screen bg-white lg:px-16 md:px-24 sm:px-6 pr-1 pl-1 `}>
        <div className="lg:flex lg:flex-row flex-col  justify-start lg:items-center items-start w-full">
          {/* Responsive layout */}
          <div className="lg:w-1/2 w-full  lg:mb-1 lg:mt-1 mt-10 mb-10 flex flex-col m-3 justify-center items-start ">
            <h1 className="font-[1000] lg:text-7xl md:text-6xl sm:text-5xl text-5xl leading-tight">
              TASTE THE DIFFERENCE.
            </h1>
            <h2 className="font-[600] md:text-[25px] sm:text-[20px] text-gray-500 mb-2 mt-2">
              Real Eggs, Real Butter, Real Sugar.
            </h2>
            <div className="flex w-full items-center justify-start gap-4 mt-2">
              <Button
                backgroundColor="bg-orange-500"
                text="ORDER NOW"
                textColor="text-white"
                onClick={() => {}}
              />
              <Button
                backgroundColor="bg-white"
                text="Catering"
                textColor="text-orange-500"
                onClick={() => {}}
              />
            </div>
          </div>

          <div className="lg:w-1/2 md:w-full flex min-h-[800px] flex-col h- overflow-hidden relative gap-3 md:items-start justify-center items-center">
            <img
              src={cookie1}
              alt="cookie1"
              className=" block lg:w-[300px] md:w-[300px] w-[280px] lg:absolute lg:-top-20 md:left-4 rotate-[30deg] pt-5 pb-5

              "
            />
            <img
              src={cookie2}
              alt="cookie2"
              className=" block lg:w-[300px] md:w-[300px] w-[280px] lg:absolute lg:top-56 md:top-64 md:left-5 -rotate-[30deg] pt-5 pb-5"
            />
            <img
              src={cookie3}
              alt="cookie3"
              className=" block lg:w-[300px]  md:w-[300px] w-[280px] lg:absolute md:bottom-1 md:left-2 rotate-[30deg] pt-5 pb-5  "
            />
            <img
              src={arrow}
              alt="arrow"
              className="absolute w-[100px] top-56 left-80 lg:hidden hidden md:block"
            />
            <div className=" lg:hidden hidden md:block absolute w-1/2 top-[270px] right-2">
              <h3 className="font-extrabold tracking-tighter text-2xl">
                MONSTER
              </h3>
              <p className="font-semibold text-gray-500 tracking-normal md:text-[17px] sm:text-[20px]">
                Gluten-friendly peanut butter oatmeal cookie with semi-sweet
                chocolate chips & M&M’s
              </p>
            </div>
          </div>
        </div>
        <div className="w-full my-10  text-center">
          <p className="font-medium text-gray-600 my-4 text-center text-lg">
            Our online ordering is closed as we prepare for next weeks amazing
            cookie flavors. Select stores are open Sunday for in-person orders
            so check out the locations pages for more information. We expect to
            be open for orders after Monday, 01:00 PST.
          </p>
          <div
            className={`px-7 py-5  bg-black bg-cookie-bg bg-center bg-no-repeat bg-cover gap-5 flex md:flex-row flex-col items-center justify-around rounded-2xl`}>
            <div
              className=" md:w-1/2  w-full md:text-start text-center font-extrabold text-white text-4xl
            ">
              DOWNLOAD OUR NEW APP TODAY
            </div>
            <div className="flex gap-2 items-center justify-evenly">
              <img
                src={appStoreIMG}
                alt="appstore"
                className="bg-slate-900 bg-opacity-50 rounded-md  cursor-pointer sm:w-[140px] w-[100px]"
              />
              <img
                src={playStoreIMG}
                alt="playstore"
                className="bg-slate-900  bg-opacity-50 rounded-md cursor-pointer sm:w-[140px] w-[100px]"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" py-3 px-3 flex lg:flex-row flex-col gap-10  items-center">
            <div className="lg:w-1/2 w-full b">
              <h6 className="w-full lg:text-start sm:text-center text-left font-[1000] text-black leading-tight text-[30px] md:text[40px] lg:text-[50px]">
                NOT JUST ANOTHER COOKIE
              </h6>
              <p className="font-medium text-gray-600 my-4 lg:text-left sm:text-center text-left text-lg md:text-xl">
                Cookie Crafter offers six cookies per week including three
                rotating new flavors. We also offer twisted soda drinks.
              </p>
            </div>
            <div
              className={` lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] sm:w-9/12 sm:h-[75vw] w-full h-[100vw]  rounded-2xl bg-cookie-bg2 bg-no-repeat bg-cover bg-center`}></div>
          </div>
          <div className=" py-3 px-3 flex lg:flex-row-reverse flex-col gap-10  items-center">
            <div className="lg:w-1/2 w-full ">
              <h6 className="w-full lg:text-start sm:text-center text-left font-[1000] text-black leading-tight text-[30px] md:text[40px] lg:text-[50px]">
                NOT JUST ANOTHER COOKIE
              </h6>
              <p className="font-medium text-gray-600 my-4 lg:text-left sm:text-center text-left text-lg md:text-xl">
                Cookie Co. was founded in 2020 during the height of the Covid-19
                pandemic by Elise and Matt Thomas. Working behind the scenes to
                open the first Cookie Co. location, Elise baked her signature
                cookie recipes using real eggs, real butter, and real cane sugar
                in her home, preparing hundreds of boxes weekly by hand for
                driveway pick-up. Quickly becoming known as “The Cookie Lady,”
                and amassing an organic social media following, Elise realized
                that her passion project was blooming into a full-blown
                business. The original Cookie Co. shop opened just around the
                corner, allowing the company to serve more loyal Cookie Co.
                fans.
              </p>
            </div>
            <div
              className={`lg:w-[500px] lg:h-[500px] md:w-[400px] md:h-[400px] sm:w-9/12 sm:h-[75vw] w-full h-[100vw]  rounded-2xl  cookieBg3 bg-no-repeat bg-cover bg-center`}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
