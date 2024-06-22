"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import internet_img from "../../../svg/BarImgs/internet-thing.png.png";
import agile_img from "../../../svg/BarImgs/agile-icon.png.png";
import business_img from "../../../svg/BarImgs/business-int.png.png";
import containerisation_img from "../../../svg/BarImgs/containerisation.png.png";
import devops_img from "../../../svg/BarImgs/devops.png.png";
import digital_img from "../../../svg/BarImgs/digital-transformation.png.png";
import replatforming_img from "../../../svg/BarImgs/replatforming.png.png";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import useViewportWidth from "@/app/hooks/useViewportWidth";

const imageData = [
  { src: internet_img, label: "Internet of Things" },
  { src: digital_img, label: "Digital Transformation" },
  { src: business_img, label: "Business Intelligence" },
  { src: replatforming_img, label: "Replatforming" },
  { src: devops_img, label: "DevOps" },
  { src: containerisation_img, label: "Containerisation" },
  { src: agile_img, label: "Agile" },
];

const calculatePerPage = (width: number): number => {
  if (width > 1000) return 7;
  if (width > 800) return 5;
  if (width > 600) return 4;
  return 2;
};

const IconBar = () => {
  const viewportWidth = useViewportWidth();
  const [perPage, setPerPage] = useState<number>(
    calculatePerPage(viewportWidth)
  );

  useEffect(() => {
    setPerPage(calculatePerPage(viewportWidth));
  }, [viewportWidth]);

  return (
    <section className="p-4 bg-white w-full max-w-[100vw]">
      <div className="max-w-[90%] mx-auto">
        {viewportWidth < 1024 ? (
          <Splide
            options={{
              perPage,
              perMove: 1,
              gap: "18px",
              autoplay: true,
              loop:true,
              pauseOnHover: false,
              resetProgress: false,
              interval: 2000,
              arrows: false,
              pagination: false,
            }}
            className="h-28"
          >
            {imageData.map((item, index) => (
              <SplideSlide
                key={index}
                className="grid place-items-center gap-6"
              >
                <div className="flex flex-col justify-center items-center h-full">
                  <Image
                    src={item.src}
                    alt={item.label}
                    width={56}
                    height={56}
                  />
                  <p className="text-black font-roboto text-sm font-extralight mt-3 text-center">
                    {item.label}
                  </p>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 w-full h-28 items-center justify-center mx-auto">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <Image src={item.src} alt={item.label} width={56} height={56} />
                <p className="text-black font-roboto text-base font-normal leading-[20px] mt-3 text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default IconBar;
