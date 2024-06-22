"use client";

import React from "react";
import Image from "next/image";
import hero_background_img from "@public/images/HeroImage.png";
import VectorDivider from "@/components/VectorDivider";
import Card from "../card/Card";
import tic from "@public/images/card/tic.png";
import rocket from "@public/images/card/rocket.png";
import horan from "@public/images/card/horan.png";
import airoplan from "@public/images/card/airoplan.png";
import rocket2 from "@public/images/card/rocket2.png";
import Footer from "./Footer";
import Consultation from "./Consultation";
import Clender from "./Clender";

const data = {
  title: "Start Your Business in Georgia Now With Launchpad Package",
  description: `We understand that the journey from a budding idea to a thriving business is filled with challenges. With us, your vision isn’t just a possibility. It’s a blueprint for success`,
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

const cardOne = [
  {
    icon: tic,
    text: "Guides You From Ideation to Launch",
  },
  {
    icon: tic,
    text: "LLC Filing Assistance",
  },
  {
    icon: tic,
    text: "1-1 Business Coaching ",
  },
  {
    icon: tic,
    text: "Basic Marketing Setup",
  },
  {
    icon: tic,
    text: "Financial Planning",
  },
  {
    icon: tic,
    text: "Legal Consultations",
  },
  {
    icon: tic,
    text: "Monthly Marketing Spend Allocation",
  },
  {
    icon: tic,
    text: "Optional Add-Ons Available",
  },
];

const cardTwo = [
  {
    icon: tic,
    text: "Website Setup",
  },
  {
    icon: tic,
    text: "Social Media Profile Setup",
  },
  {
    icon: tic,
    text: "Website Hosting",
  },
  {
    icon: tic,
    text: "Maintenance",
  },
  {
    icon: tic,
    text: "1 Social Media Post Per Month",
  },
  {
    icon: tic,
    text: "Integration of Basic Booking Systems",
  },
  {
    icon: tic,
    text: "Monthly Marketing Spend Allocation",
  },
  {
    icon: tic,
    text: "Optional Add-Ons Available",
  },
];

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen">
      {/* Hero Content */}
      <div className="relative flex flex-col justify-center items-center text-white w-full bg-black lg:h-auto">
        <div className="w-full z-10 px-4 lg:px-0 py-6 flex flex-col items-center">
          {/* Content */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 w-4/5 sm:w-3/5 mx-auto mt-28 lg:mt-32">
              {data.title}
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl w-full md:w-3/4 lg:w-1/2 mb-6 mx-auto">
              {data.description}
            </p>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 mt-10 lg:mt-8 xl:mt-6 lg:max-w-[1100px] mx-auto">
            {slideData.map((item, index) => (
              <div key={index} className="flex flex-col items-center p-3 lg:p-4 xl:p-5">
                <p className="text-base font-medium mb-1 lg:text-lg xl:text-xl">{item.quantity}</p>
                <p className="text-sm lg:text-base xl:text-lg capitalize break-words leading-tight text-center">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Background Overlay */}
        <div className="absolute z-0 left-0 top-0 w-full h-full bg-black opacity-50" />
        {/* Background Image */}
        <Image
          src={hero_background_img}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="absolute z-0"
        />
      </div>

      {/* Divider Component */}
      <VectorDivider />

      {/* Pricing Section */}
      <section className="bg-white w-full text-black pt-10 pb-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Pricing for Our Services
          </h1>
          <p className="text-lg text-gray-700">
            Ask about major discounts for upfront payments. Book a call to learn
            more.
          </p>
        </div>
        <div className="container mx-auto mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 mb-3">
            <Card cardData={cardOne} iconImg={rocket} />
            <Card cardData={cardTwo} iconImg={horan} />
            <Card cardData={cardTwo} iconImg={airoplan} />
            <Card cardData={cardTwo} iconImg={rocket2} />
          </div>
          <Consultation />
          <Clender />
        </div>
        <Footer />
      </section>
    </section>
  );
}

export default HeroSection;
