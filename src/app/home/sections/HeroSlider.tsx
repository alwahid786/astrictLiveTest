"use client";
import React, { useEffect, useState } from "react";
// @ts-expect-error
import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import SliderImg1 from "@/svg/SliderImgs/slider-img1";
import SliderImg2 from "@/svg/SliderImgs/Slider-img2";
import SliderImg3 from "@/svg/SliderImgs/Slider-img3";
import SliderImg4 from "@/svg/SliderImgs/Slider-img4";
import SliderImg5 from "@/svg/SliderImgs/Slider-img5";
import SliderImg6 from "@/svg/SliderImgs/Slider-img6";
import useViewportWidth from "@/app/hooks/useViewportWidth";

const slideData = [
  SliderImg1,
  SliderImg2,
  SliderImg3,
  SliderImg4,
  SliderImg5,
  SliderImg6,
];

function Slider() {
  const screenWidth: number = useViewportWidth();
  const [perPage, setPerPage] = useState<number>(3);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setPerPage(screenWidth < 920 ? 3 : 6);
    };
    const handleReponsiveness = () => {
      setIsMobile(screenWidth <= 700);
    };

    handleResize();
    handleReponsiveness();
  }, [screenWidth]);
  return (
    <section className="bg-white max-w-[100vw] ">
      {!isMobile && (
        <div className="w-full overflow-hidden flex flex-row items-center justify-center pt-10 pb-10">
            {slideData?.map((Slide, index) => (
                <Slide key={index} />
            ))}
        </div>
      )}
      {isMobile && (
        <div className="flex-wrap w-full flex-row flex justify-center items-center p-5">
          {slideData?.map((Slide, index) => (
            <Slide key={index} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Slider;
