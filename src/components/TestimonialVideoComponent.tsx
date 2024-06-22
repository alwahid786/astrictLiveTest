import { PlayCircleIcon } from "@heroicons/react/16/solid";
import React from "react";
import Heading from "./Heading";
import Ratings from "./Ratings";
import Image from "next/image";

const TestimonialVideoComponent = ({ data }: any) => {
  // const [isPlay, setIsPlay] = React.useState(false);
  const isPlay = false;
  return (
    <div className="relative rounded-lg border-none">
      {isPlay ? (
        <Image className="w-full" src={data?.thumbnailUrl} alt="" />
      ) : (
        <video width="100%" controls preload="none">
          <source src="/path/to/video.mp4" type="video/mp4" />
          <track
            src="/path/to/captions.vtt"
            kind="subtitles"
            srcLang="en"
            label="English"
          />
          Your browser does not support the video tag.
        </video>
      )}
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <PlayCircleIcon />
      </span>
      <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-center gap-4 p-4 bg-white ">
        <div>
          <Heading text={data?.name} className="" />
          <p>{data?.title}</p>
        </div>
        <div>
          <Ratings num={data?.ratings} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialVideoComponent;
