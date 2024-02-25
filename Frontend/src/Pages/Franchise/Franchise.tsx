import React, { useState } from "react";
import Input from "../../Components/Input";
import cookiePicture from "../../assets/cookie-picture.jpeg";
const Franchise: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [pNumber, setPNumber] = useState<string>("");

  const [about, setAbout] = useState<string>("");
  const [interested, setInterested] = useState<string>("");
  const [invest, setInvest] = useState<string>("");
  const [franchise, setFranchise] = useState<string>("");
  return (
    <>
      <div className="min-h-screen w-full flex justify-center align-baseline bg-black px-5">
        <div className="lg:w-2/3 w-full min-h-screen flex justify-start items-center flex-col gap-2 bg-black px-3 py-3">
          <h1 className="text-white sm:text-[42px] text-[5vw] font-bold text-center tracking-normal py-4">
            Franchise Opportunity
          </h1>
          <h2 className="text-white sm:text-[40px] text-[8vw] font-bold text-center tracking-normal leading-none">
            Not just another <br /> Cookie Shoppe
          </h2>
          <h3 className="text-white sm:text-[32px] text-[5vw] font-bold text-center tracking-normal leading-none pb-5">
            TASTE THE DIFFERENCE
          </h3>
          <video className="w-[500px] mb-16" preload="metadata" controls>
            <source
              type="video/mp4"
              src="https://cookieco.com/wp-content/uploads/2023/10/Cookie-Co.-Franchise-Story.mp4?_=1"
            />
            <source src="https://cookieco.com/wp-content/uploads/2023/10/Cookie-Co.-Franchise-Story.mp4?_=1#t=0.1" />
            <a href="https://cookieco.com/wp-content/uploads/2023/10/Cookie-Co.-Franchise-Story.mp4">
              https://cookieco.com/wp-content/uploads/2023/10/Cookie-Co.-Franchise-Story.mp4
            </a>
          </video>

          <form className="w-full flex flex-col justify-start align-middle">
            <h2 className="text-white sm:text-[40px] text-[6vw] underline font-bold text-center tracking-normal leading-none mb-10">
              Learn more about current <br /> franchise opportunities
            </h2>
            <div className="w-full grid gap-2 sm:grid-cols-2 grid-cols-1">
              <Input
                label="First Name"
                value={name}
                style="credentials"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
              />
              <Input
                label="Last Name"
                value={lastName}
                style="credentials"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setLastName(e.target.value)
                }
              />
              <Input
                label="Email Address"
                value={email}
                style="credentials"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <Input
                label="Phone Number"
                type="number"
                value={pNumber}
                style="credentials"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPNumber(e.target.value)
                }
              />
            </div>
            <Input
              label="What area are you interested in?"
              value={interested}
              style="normal"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInterested(e.target.value)
              }
            />
            <Input
              label="Liquid capital available to invest?"
              value={invest}
              style="normal"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInvest(e.target.value)
              }
            />
            <Input
              label="How did you hear about us?"
              value={about}
              style="normal"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setAbout(e.target.value)
              }
            />
            <Input
              label="What interests you in opening a Cookie Co. franchise?"
              type="textarea"
              value={franchise}
              style="normal"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFranchise(e.target.value)
              }
            />
            <button className=" inline-block m-auto py-3 px-6 bg-white hover:bg-orange-400  hover:text-white ease-out duration-150 text-black text-md rounded-full font-bold my-10 ">
              Completed
            </button>
          </form>

          <div className="border-white border-4 p-4 mt-10 flex flex-col justify-start align-middle">
            <h2 className="text-white sm:text-[33px] text-[6vw] underline font-bold text-center tracking-normal leading-none mb-5 ">
              Hear from our franchisees
            </h2>
            <p className="text-white sm:text-[20px] text-[4vw]  font-bold text-center tracking-normal leading-none ">
              What sets Cookie Co. apart is their unwavering commitment to
              quality, from cookies using REAL, quality ingredients, to top
              notch franchisee training & support. The quality of the brand is
              what will make Cookie Co. a household name.
            </p>
          </div>
          <div>
            <h2 className="text-white sm:text-[33px] text-[6vw] underline font-bold text-center tracking-normal leading-none mt-10 ">
              Becoming a Cookie Co. Franchise is a Sweet Deal.
            </h2>
            <ul className="p-4">
              <li className="text-white sm:text-[15px] text-[3vw]  font-bold text-center tracking-normal leading-4 my-5 list-disc">
                Bakery products make up 2.1% of the gross domestic product of
                the US, accounting for $311 Billion in total economic output.
              </li>
              <li className="text-white sm:text-[15px] text-[3vw]  font-bold text-center tracking-normal leading-4 my-5 list-disc">
                Retail bakery sales are expected to increase by an average of
                6.2% per year through 2024.
              </li>
              <li className="text-white sm:text-[15px] text-[3vw]  font-bold text-center tracking-normal leading-4 my-5 list-disc">
                With 25+ open locations, franchisees around North America are
                choosing Cookie Co. to meet the dessert craze.
              </li>
            </ul>

            <img
              src={cookiePicture}
              alt="cookie"
              width={341}
              height="auto"
              className="block sm:w-[341px] w-[300px] m-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Franchise;
