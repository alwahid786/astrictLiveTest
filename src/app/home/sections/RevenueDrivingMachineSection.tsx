import Heading from "@/components/Heading";
import Button from "@/components/buttons/Button";
import React from "react";

const RevenueDrivingMachineSection = () => {
  return (
    <section className="bg-[#12284C] text-white flex flex-col justify-center items-center gap-3 py-8 px-12  max-w-[100vw] ">
      <Heading
        text="Make your business a revenue driving machine"
        className="font-inter w-full sm:w-[440px] text-[22px] sm:text-[28px] font-bold leading-tight text-center"
      />
      <Button
        label="FREE CONSULTATION"
        className="uppercase shadow-[1px_1px_5px_1px_rgba(0, 0, 0, 0.75)]"
        href='https://calendly.com/astric/digital-business-solutions'
      />
    </section>
  );
};

export default RevenueDrivingMachineSection;
