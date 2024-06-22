import Image from "next/image";
import React from "react";
import helpIcon from "@public/images/card/help.png";

const Card = ({ cardData, iconImg }) => {
  return (
    
    <div className="parent mx-auto" style={{width: "90%"}}>
      <div className="card mb-4" style={{width: "100%"}}>
      <div className="bg-[#12284C] rounded-lg px-[30px] pt-[30px] md:px-[60px] md:pt-[60px] pb-[100px] relative text-[#fff]">
        <h4 className="text-[24px]">Bronze Package</h4>
        <h6  style={{fontSize: "48px", fontWeight: "bold"}}>
          $125
          <span style={{fontSize: "22px", fontWeight: "bold"}}>/ month</span>
        </h6>
        <div className="absolute top-[20px] right-[20px] cursor-pointer">

        <Image src={helpIcon} height={35} width={35} alt="Data" />

        </div>
      </div>
      <div className="px-[20px]">
        <div className="bg-[#fff] rounded-lg p-[30px] mx-auto mt-[-3rem] z-10 relative shadow-sm pt-[60px] md:pt-[130px] px-[16px] md:px-[40px] pb-[16px] md:p-[40px]">
          {cardData?.map((item:any, index:number) => (
            <>
              <div
                key={index}
                className="flex items-center md:flex-row gap-4 mb-4"
              >
                <div className="flex items-center justify-center">
                  <Image src={item.icon} height={35} width={35} alt="Data" />
                </div>
                <p className="text-lg text-[#444444]">{item.text}</p>
              </div>
            </>
          ))}

          <button className="mt-4 py-4 px-9 outline outline-[#12284C] outline-1 border text-lg font-semibold rounded-md transition duration-300 ease-in-out transform hover:bg-[#0F1D38]  hover:text-white">
            Get Started
          </button>

          <div className="absolute top-[-2rem] left-[0.5rem] bg-[#fff] rounded-lg p-4 shadow-md flex items-center " style={{width: "100px", height: "100px"}}>
            <Image src={iconImg} alt="Rocket" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Card;
