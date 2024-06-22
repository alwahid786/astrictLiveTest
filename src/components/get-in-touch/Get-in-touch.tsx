import SquareBox from "@/svg/SquareBox";
import React from "react";
import Heading from "../Heading";
import Button from "../buttons/Button";
import Image from "next/image";
import logo from "../../svg/GetInTouch/logo.svg";
import ProgressCircle from "../ProgressCircle";
import ContentLabel from "../Content-Label/ContentLabel";
import CheckMarkLabel from "../Check-Mark-Label/Check-Mark-Label";
import TimeIcon from "@/svg/TimeIcon";

const companyData = [
  {
    title: "Planning",
    description:
      "Comprehensive strategies that outline the steps necessary to achieve business goals, providing a clear roadmap for success.",
  },
  {
    title: "Briefing",
    description:
      "Articulating the company's vision and objectives clearly and succinctly to ensure alignment and understanding among stakeholders.",
  },
  {
    title: "Evaluation",
    description:
      "Tracking key performance indicators (KPIs) to measure progress toward established objectives and identify areas for improvement.",
  },
];

function GetInTouch() {
  return (
    <section className="flex justify-center bg-blue-950 pt-12 pb-12  max-w-[100vw] ">
      <div className="w-[95%] sm:w-[90%]  md:w-9/12 h-auto grid lg:grid-cols-2 grid-cols-1">
        <div className="w-full p-4">
          <ContentLabel
            label="How We Work"
            blockColor="#E0592A"
            textColor="white"
            className="text-lg"
          />
          <Heading
            text="To Get Your Business To The Next Level"
            className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-white mt-6"
          />
          <div className="mt-6 mb-6">
            <p className="text-lg font-normal text-white">
              Although we often see quick results, we do not chase short-term
              results. Our priority is to build a strong foundation for your
              long-term growth. We align business success with positive change,
              creating a ripple effect in your industry and beyond.
            </p>
          </div>
          <div className=" bg-orange p-4 sm:p-6 md:p-7 lg:p-8  flex items-center ">
            {/* <div className="rounded-full border-2 border-solid mr-4 border-white min-w-28 max-w-28 min-h-28 max-h-28 flex flex-col justify-center items-center">
              <p className="text-white text-2xl  md:text-3xl font-bold">562+</p>
              <p className="text-white text-lg">Project</p>
            </div> */}
            <div className="relative flex justify-center items-center">
              <h3 className="text-lg font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {/* 95% */}
                <p className="text-white text-md sm:text-xl font-bold">562+</p>
                <p className="text-white text-xs sm:text-sm text-center">
                  Project
                </p>
              </h3>
              <ProgressCircle percent={85} color="#FFFFFF" size="md" />
            </div>
            <p className=" sm:block hidden  text-2xl text-white font-normal ">
              We have <span className="font-bold">50+</span>years of experience.
            </p>
            <p className=" sm:hidden block text-sm text-white font-normal ">
              We have <span className="font-bold">50+</span>years of experience.
              We offer <span className="font-bold">whitecollar </span>
              services to you.
            </p>
          </div>
          {companyData?.map((data, index) => (
            <div className="mt-6 flex items-start pr-8" key={index}>
              {/* <div className="mt-2">
                <TickIcon />
              </div> */}

              <div
                className={`ml-2 ${
                  index != companyData.length - 1
                    ? "border-b-white border-b-[1px] pb-3"
                    : ""
                }`}
              >
                {/* <p className="text-white text-2xl font-semibold m-0">
                  {data.title}
                </p> */}
                <CheckMarkLabel
                  label={data.title}
                  textColor="text-[white]"
                  titleClassName="text-2xl"
                />
                <p className="text-white text-xs  font-normal  mt-1">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full p-4 md:block hidden">
          <ContentLabel
            label="Book Now"
            blockColor="#E0592A"
            textColor="white"
            className="text-lg"
          />
          <Heading
            text="Get Free Business Appointment"
            className="text-2xl md:text-3xl lg:text-4xl uppercase font-bold text-white mt-6 mb-4 text-center lg:text-start"
          />
          <GetInTouchForm />
        </div>
        <div className="w-full p-4 md:hidden flex flex-col justify-start items-start">
          <div className="w-full flex items-center lg:justify-start justify-center">
            <SquareBox />
            <p className="text-white ml-2 text-lg font-medium">Book Now</p>
          </div>
          <Heading
            text="Schedule your 15-minute free consultation."
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mt-6 lg:text-start"
          />
          <div className="mt-6 mb-6">
            <p className="text-lg font-normal text-white">
              Learn how we are helping companies like yours predictably drive
              qualified leads, close deals, hire top talent, and generate more
              revenue.
            </p>
          </div>
          <div className="border-t-[1px] border-t-white w-[95%] mx-auto " />

          <div className="flex flex-col items-center justify-center gap-3 my-4 sm:w-[50%] w-[60%] mx-auto">
            <Image src={logo} alt="" className="w-[54px] " />
            <Heading
              text="Astric Introduction"
              className="text-2xl  uppercase font-bold text-white text-center"
            />
          </div>
          <span className="flex justify-start items-center gap-2 text-white">
            <TimeIcon />
            <p className="font-bold text-lg sm:text-xl">15min</p>
          </span>
          <p className="mt-6 mb-6 text-lg font-normal text-white">
            We will provide a complete overview on how Astric can help your
            business.
          </p>
          <GetInTouchForm />
        </div>
      </div>
    </section>
  );
}
export default GetInTouch;

const GetInTouchForm = () => {
  return (
    <div className="w-full bg-white text-black py-10 px-5 sm:px-7  md:px-10 ">
      <form className="flex flex-col gap-6">
        <input
          type="text"
          placeholder="Your name"
          className="lg:text-xl md:text-lg text-md bg-gray-100 h-10 px-4 py-3 border-2 border-solid border-#DDDDDD placeholder:text-[#37393F] focus:border-none active:border-none"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="lg:text-xl md:text-lg text-md bg-gray-100 h-10 px-4 py-3 border-2 border-solid border-#DDDDDD placeholder:text-[#37393F]"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="lg:text-xl md:text-lg text-md bg-gray-100 h-10 px-4 py-3 border-2 border-solid border-#DDDDDD placeholder:text-[#37393F]"
        />
        <div className="flex gap-1">
          <input
            type="Date"
            value="date"
            placeholder="Date"
            className="lg:text-xl md:text-lg text-md bg-gray-100 h-10 px-4 py-3 border-2 border-solid border-#DDDDDD placeholder:text-[#37393F] w-1/2"
          />
          <input
            type="Time"
            placeholder="Time"
            className="lg:text-xl md:text-lg text-md bg-gray-100 h-10 px-4 py-3 border-2 border-solid border-#DDDDDD placeholder:text-[#37393F] w-1/2"
          />
        </div>
        <textarea
          placeholder="Service Discription"
          className="lg:text-xl md:text-lg text-md bg-gray-100 h-32 px-4 py-3 border-2 border-solid border-#DDDDDD  placeholder:text-[#37393F]"
        ></textarea>
        <div className="flex justify-start">
          <Button
            label="Submit"
            className="bg-orange px-6 py-2 border border-solid border-orange text-white hover:opacity-80 w-fit lg:text-xl text-md md:text-lg"
          />
        </div>
      </form>
    </div>
  );
};
