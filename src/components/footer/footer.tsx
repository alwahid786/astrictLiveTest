"use client";

import AddressIcon from "@/svg/AddressIcon";
import AstricLogo from "@/svg/AstricLogo";
import EmailIcon from "@/svg/EmailIcon";
import PhoneIcon from "@/svg/PhoneIcon";
import SquareIcon from "@/svg/SquareIcon";
import React from "react";
import Heading from "../Heading";
import Button from "../buttons/Button";
import useViewportWidth from "@/app/hooks/useViewportWidth";
import VectorDivider from "../VectorDivider";
import ContentLabel from "../Content-Label/ContentLabel";

function Footer() {
  const screenWidth = useViewportWidth();

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "Call Us",
      content: "+01 569 896 654",
    },
    {
      icon: AddressIcon,
      title: "Mail Us",
      content: "consulting@astric.co",
    },
    {
      icon: EmailIcon,
      title: "Location",
      content: "539 West Commerce Street #3433 Dallas Texas 75208",
    },
  ];

  const footerLinks = [
    {
      title: "Quick Link",
      links: [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "About",
          link: "/about",
        },
        {
          title: "Services",
          link: "/services",
        },
        {
          title: "Blog",
          link: "/blog",
        },
        {
          title: "Contact",
          link: "/contact",
        },
      ],
    },
    {
      title: "Utility Page",
      links: [
        {
          title: "Style Guide",
          link: "/utility/style-guide",
        },
        {
          title: "Licenses",
          link: "/utility/licenses",
        },
        {
          title: "Instructions",
          link: "/utility/instructions",
        },
        {
          title: "Changelog",
          link: "/utility/changelog",
        },
      ],
    },
    {
      title: "Our Services",
      links: [
        {
          title: "Financial Consulting",
          link: "/services/financial-consulting",
        },
        {
          title: "Business Management",
          link: "/services/business-management",
        },
        {
          title: "Consulting & Programs",
          link: "/services/consulting-programs",
        },
        {
          title: "Company Management",
          link: "/services/company-management",
        },
        {
          title: "Insurance & Finance",
          link: "/services/insurance-finance",
        },
      ],
    },
  ];
  return (
    <footer className="max-w-[100vw]">
      <div className="p-4 lg:p-7 bg-white">
        <div className="px-4 md:px-8 lg:px-10 xl:px-12 ">
          <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-4 border-b-2 border-gray-300 border-solid  pb-3 ">
            <a
              href="#"
              className="mb-4 col-span-1 flex justify-center lg:justify-start w-full "
            >
              <AstricLogo />
            </a>
            <div className="px-4 sm:px-8 md:px-0 col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
              {contactInfo?.map((data, index) => (
                <div key={index} className="flex items-center mb-2 gap-x-4">
                  <div className="flex justify-center text-[white] items-center bg-orange min-w-14 max-w-14 min-h-14 max-h-14 rounded-full">
                    <data.icon />
                  </div>
                  <div>
                    <Heading
                      text={data.title}
                      className="text-[#262626] font-poppins text-lg font-[600] leading-[30px] text-left "
                    />
                    <p className="text-[#262626] font-inter text-base font-normal leading-[21.78px] text-left">
                      {data.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-5 mb-4 border-b-2 border-gray-300 border-solid">
            <div className="lg:order-first order-last col-span-3 grid grid-cols-2 gap-6 sm:gap-4 sm:grid-cols-3 py-12 ">
              {footerLinks?.map((data, index) => (
                <div
                  key={data.title}
                  className={` col-span-${
                    footerLinks?.length - 1 == index ? "2" : "1"
                  } sm:col-span-1`}
                >
                  <ContentLabel
                    label={data.title}
                    blockColor="#E0592A"
                    textColor="#333333"
                    className=" font-poppins text-base p-0"
                  />
                  <div className="text-[#414141] flex flex-col gap-3 mt-3 w-full">
                    {data?.links?.map((link, index) => (
                      <a
                        href={link.link}
                        key={index}
                        className=" font-inter text-base font-normal  text-left"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:order-last order-first col-span-3 lg:col-span-2 pt-12  lg:py-12 w-full">
              <div className=" col-span-3 lg:col-span-2 w-full bg-blue-950 h-full px-6 py-7 justify-end items-start flex flex-col ">
                <Heading
                  text={"Subscribe"}
                  className="font-poppins text-base font-semibold text-[white]  text-left"
                />
                <p className=" mt-2 font-inter  font-normal  text-left text-[white]">
                  Join Our Mailing List & to get our news.
                </p>
                <div className="relative mt-4 mb-2 w-full">
                  <input
                    type="email"
                    className="h-14 w-full pl-4  text-black outline-0	placeholder-gray-900"
                    placeholder={
                      screenWidth < 576 ? "Email address" : "your email address"
                    }
                  />
                  <div className="absolute top-2 right-1 text-[#12284C]">
                    <Button
                      label="Subscribe"
                      className="bg-white text-[#12284C] border-[#12284C] border-solid border-[1px] font-semibold px-4 md:px-6"
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-roboto text-sm font-normal leading-[19.6px] text-center text-[#707070]">
            Made with ❤️ in Dallas, Texas.{" "}
          </p>
        </div>
      </div>
      <VectorDivider />
    </footer>
  );
}
export default Footer;
