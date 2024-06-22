"use client";

import React from "react";
import TickIcon from "@/svg/TickIcon";

export default function CheckMarkLabel({
  label = "Components of a Business Strategy",
  checkColor = "#E0592A",
  textColor = "#37393F",
  className = "",
  titleClassName = "",  
}) {
  return (
    <>
      <div className={"flex items-center gap-1 text-grey" + className}>
        <TickIcon color={checkColor} />
        <p className={`${textColor} font-semibold text-left m-0 ${titleClassName}`}>
          {label}
        </p>
      </div>
    </>
  );
}
