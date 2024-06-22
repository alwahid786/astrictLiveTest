"use client";

import SquareBox from "@/svg/SquareBox";
import React from "react";

export default function ContentLabel({
  label = "Welcome to Astric",
  blockColor = "#E0592A",
  textColor = "#37393F",
  className = "",
}) {
  return (
    <>
      <span
        className={"flex items-center gap-2 p-3 text-lg " + className}
        style={{ color: textColor }}
      >
        <SquareBox color={blockColor} />
        <p className="font-semibold">{label}</p>
      </span>
    </>
  );
}
