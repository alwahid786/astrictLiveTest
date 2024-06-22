"use client";

import React from "react";
import StarIcon from "@/svg/Staricon";
import Button from "../../../components/buttons/Button";
import Image from "next/image";
import hero_background_img from "@public/images/Herobg.jpg";
import Heading from "@/components/Heading";
import Ratings from "@/components/Ratings";
import VectorDivider from "@/components/VectorDivider";

const data = {
  title: "From concept to success we're with you every step of the way.",
  description:
    "We Understand that the journey from a budding idea to a thriving business is filled with challenges. with us, your vision isn't just a possiblity. it's a blueprint for success.",
  ratings: 5,
};

const slideData = [
  {
    quantity: 7371,
    title: "Global Customer Connections",
  },
  {
    quantity: 11,
    title: "Countries Worldwide Reach",
  },
  {
    quantity: 2017,
    title: "Year Founded",
  },
  {
    quantity: 2,
    title: "Core Divisions",
  },
];

function HeroSection() {
  return (
    <section className="w-full h-full">
      <div className="relative flex flex-col justify-center text-white max-w-[100vw]  bg-black">
        <div className="w-full z-[3] px-4 lg:px-0 py-16">
          <Heading
            text={data.title}
            className="text-xl leading-[1.6] lg:text-2xl w-[70%] xs:w-[60%] md:w-[50%] font-bold mb-6 text-center mx-auto"
          />
          <p className="text-base w-[70%] xs:w-[60%] md:w-[50%] mb-6 text-center mx-auto">
            {data.description}
          </p>
          <div className="justify-center items-center flex flex-col gap-2">
            <p className="text-xs capitalize">Start your business today</p>

            
            <Button
              label="FREE CONSULTATION"
              className="font-medium  md:text-xs text-sm mb-2 mt-2"
              href='https://calendly.com/astric/digital-business-solutions'
            />

            <div className="flex justify-center">
              <Ratings num={data?.ratings} />
            </div>
          </div>
          {/* flex flex-row justify-center items-center gap-4 w-[80%] xs:w-[60%] md:w-[50%] mb-6 text-center mx-auto overflow-x-auto no-scrollbar */}
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 mt-8 lg:max-w-[600px] mx-auto">
            {slideData.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <p className="text-s font-medium text-center">
                  {item.quantity}
                </p>
                <p className="text-xs capitalize text-center">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(18,40,76,0.72) 0%, rgba(18,40,76,0.83) 58%, rgba(18,40,76,1) 100%)",
          }}
          className="absolute z-[2] left-0 top-0 w-full h-full opacity-50"
        />
        <Image
          src={hero_background_img}
          alt=""
          className="absolute z-[1] left-0 top-0 w-full h-full object-cover brightness-50 saturate-150"
        />
      </div>

      <VectorDivider />
    </section>
  );
}
export default HeroSection;
