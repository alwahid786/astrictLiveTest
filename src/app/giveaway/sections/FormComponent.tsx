"use client";
import React, { useState } from "react";
import Button from "@/components/buttons/Button";
import InputField from "@/components/input/InputField";
import MailIcon from "@/svg/GiveAway/MailIcon";
import LocationIcon from "@/svg//GiveAway/LocationIcon";

const FormComponent = () => {
  const [email, setEmail] = useState("");
  const [zipCode, setZipCode] = useState("");
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, email);
    setEmail(event.target.value);
  };

  const handleZipCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value, zipCode);
    setZipCode(event.target.value);
  };
  return (
    <div className="flex flex-col md:flex-row items-center mt-[5px] md:mt-0 gap-[18px] md:gap-[34px]">
      <InputField
        type="email"
        placeholder="Email Address"
        className="text-[#37393f]"
        icon={<MailIcon />}
        value={email}
        onChange={handleEmailChange}
      />
      <InputField
        type="text"
        placeholder="US Zip Code"
        className="text-[#37393f]"
        icon={<LocationIcon />}
        value={zipCode}
        onChange={handleZipCodeChange}
      />
      <Button
        label="Enter"
        className="uppercase  px-[28px] font-bold text-white"
      />
    </div>
  );
};

export default FormComponent;
