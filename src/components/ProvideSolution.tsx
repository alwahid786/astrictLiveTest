import React from "react";
import Image from "next/image";
import Photo from "../svg/ProvideSolutionImages/Photo.svg";
import ProgressCircle from "./ProgressCircle";
import ContentLabel from "./Content-Label/ContentLabel";
import { StarIcon } from "@heroicons/react/16/solid";

const ProvideSolution = () => {
  return (
    <section className="relative bg-[rgb(224,89,42)] min-h-[541px] md:min-h-[741px] flex items-center max-w-[100vw] ">
      <div className="px-4 xs:px-14 w-full 2.5xl:container mx-auto h-full xl:h-[70%]">
        <div className="px-4  h-full pb-8 pt-12 w-full md:w-[50%] flex justify-end items-start gap-4  flex-col">
          <ContentLabel
            textColor="white"
            blockColor="white"
            className="p-0"
            label="Why Choose Us"
          />
          <h3 className="font-poppins text-3xl font-semibold leading-10 text-left text-white ">
            We Provide Launchpad To Grow Your Business
          </h3>
          <p className="font-inter text-base font-normal leading-7 text-left text-[white]">
            Our Astric Launchpad is an all-encompassing digital hub that guides
            you from ideation to launch.
          </p>
          <div className="w-full grid grid-cols-1 gap-[10px] md:gap-[15px] sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-2">
            <div className="p-4 bg-[#D74816] flex justify-center items-center gap-2">
              <div className="relative flex justify-center items-center">
                <h3 className="text-lg text-[white] font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  95%
                </h3>
                <ProgressCircle percent={95} color="#FFFFFF" />
              </div>
              <div className="flex flex-col justify-start items-start gap-1 text-[white]">
                <h6 className="font-inter text-base font-normal leading-[21.63px] text-left">
                  Clients
                </h6>
                <p className="font-poppins text-xl font-semibold leading-[27px] text-left">
                  Quick Response
                </p>
              </div>
            </div>
            <div className="p-4 bg-[#D74816] flex justify-center items-center gap-2">
              <div className="relative flex justify-center items-center">
                <h3 className="text-lg text-[white] font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  85%
                </h3>
                <ProgressCircle percent={85} color="#FFFFFF" />
              </div>
              <div className="flex flex-col justify-start items-start gap-1">
                <h6 className="font-inter text-[white] text-base font-normal leading-[21.63px] text-left">
                  Project
                </h6>
                <p className="font-poppins text-[white] text-xl font-semibold leading-[27px] text-left">
                  Finished Jobs
                </p>
              </div>
            </div>
          </div>
          <p className="font-poppins text-lg font-normal leading-[30px] text-left text-[white]">
            <span className="font-bold">2,800+ </span>Active Clients
          </p>
          <p className="font-poppins text-lg font-normal leading-[30px] text-left flex gap-1 items-center text-[white]">
            <span className="font-bold">1,670 +</span> 5{" "}
            <StarIcon color="white" className="w-[16px] h-[16px] " /> Stars
            Reviews
          </p>
          <a
            href="/"
            className="mt-4 underline font-inter text-base font-bold leading-[21.78px] text-center text-[white]"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="md:inline-block min-w-[45%] max-w-[45%]  hidden min-h-[541px] lg:min-h-[741px]  absolute right-0 top-0 bottom-0">
        <Image
          src={Photo}
          alt=""
          className="min-h-[541px] lg:min-h-[741px] h-full max-h-full w-full object-cover"
        />
      </div>
    </section>
  );
};

export default ProvideSolution;
//
