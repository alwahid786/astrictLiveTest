"use client";

import { useEffect, useRef } from "react";

interface ProgressCircleProps {
  percent: number;
  color: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl"; // Define size prop
}

const ProgressCircle = ({ percent, color, size }: ProgressCircleProps) => {
  const circleRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const circle = circleRef.current;
    if (circle) {
      const circumference = circle.getTotalLength();
      circle.style.strokeDasharray = `${circumference}`;
      circle.style.strokeDashoffset = `${circumference * (1 - percent / 100)}`;
      circle.style.stroke = color; // Set the color dynamically
    }
  }, [percent, color]);

  let circleSize;
  switch (
    size // Determine circle size based on the prop value
  ) {
    case "sm":
      circleSize = "w-10 h-10";
      break;
    case "md":
      circleSize = "w-20 h-20";
      break;
    case "lg":
      circleSize = "w-28 h-28";
      break;
    case "xl":
      circleSize = "w-36 h-36";
      break;
    case "2xl":
      circleSize = "w-48 h-48";
      break;
    default:
      circleSize = "w-20 h-20"; // Default size
      break;
  }

  return (
    <svg className={`stroke-current ${circleSize}`}>
      <circle
        ref={circleRef}
        className="text-transparent stroke-2"
        cx="50%"
        cy="50%"
        r="40%"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
};

export default ProgressCircle;
