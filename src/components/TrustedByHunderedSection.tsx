'use client';
import Heading from '@/components/Heading';
import Button from '@/components/buttons/Button';
import React, { useEffect, useState } from 'react';
// @ts-expect-error
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import Ratings from '@/components/Ratings';
import { PauseIcon, PlayCircleIcon, PlayIcon } from '@heroicons/react/16/solid';
import useViewportWidth from '@/app/hooks/useViewportWidth';

interface Testimonial {
  name: string;
  thumbnailUrl: string;
  title: string;
  ratings: number;
  videoUrl: string;
}

interface OuterTestimonial extends Array<Testimonial[]> {}

interface VideoState {
  innerIndex: number;
  outerIndex: number;
  isPlaying: boolean;
}

const testimonials: { title: string }[] = [
  {
    title: 'Agencies',
  },
  {
    title: 'Startups',
  },
  {
    title: 'B2B Services',
  },
  {
    title: 'Freelancers',
  },
  {
    title: 'Consultants',
  },
];

const testimonialsData: Testimonial[] = [
  {
    name: 'Nick McGraw',
    thumbnailUrl:
      'https://img.freepik.com/free-photo/man-with-headset-video-call_23-2148854889.jpg?t=st=1714647602~exp=1714651202~hmac=35666bb9d37a9f076f1449b4a55d8369728b7ad5cb2593e37abae3ed40cbe2c6',
    title: 'Founder/Brand Designer',
    ratings: 4,
    videoUrl: 'https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm',
  },
  {
    name: 'Jessica Smith',
    thumbnailUrl:
      'https://img.freepik.com/free-photo/man-with-headset-video-call_23-2148854889.jpg?t=st=1714647602~exp=1714651202~hmac=35666bb9d37a9f076f1449b4a55d8369728b7ad5cb2593e37abae3ed40cbe2c6',
    title: 'CEO - Smith Innovations',
    ratings: 5,
    videoUrl: 'https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm',
  },
  {
    name: 'John Doe',
    thumbnailUrl:
      'https://img.freepik.com/free-photo/man-with-headset-video-call_23-2148854889.jpg?t=st=1714647602~exp=1714651202~hmac=35666bb9d37a9f076f1449b4a55d8369728b7ad5cb2593e37abae3ed40cbe2c6',
    title: 'Creative Director - XYZ Studios',
    ratings: 4.5,
    videoUrl: 'https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm',
  },
  {
    name: 'Alice Johnson',
    thumbnailUrl:
      'https://img.freepik.com/free-photo/man-with-headset-video-call_23-2148854889.jpg?t=st=1714647602~exp=1714651202~hmac=35666bb9d37a9f076f1449b4a55d8369728b7ad5cb2593e37abae3ed40cbe2c6',
    title: 'Marketing Manager - ABC Corp',
    ratings: 4,
    videoUrl: 'https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm',
  },
  {
    name: 'Michael Brown',
    thumbnailUrl:
      'https://img.freepik.com/free-photo/man-with-headset-video-call_23-2148854889.jpg?t=st=1714647602~exp=1714651202~hmac=35666bb9d37a9f076f1449b4a55d8369728b7ad5cb2593e37abae3ed40cbe2c6',
    title: 'Lead Developer - Tech Solutions Inc.',
    ratings: 4.8,
    videoUrl: 'https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm',
  },
  {
    name: 'Emily Wilson',
    thumbnailUrl:
      'https://img.freepik.com/free-photo/man-with-headset-video-call_23-2148854889.jpg?t=st=1714647602~exp=1714651202~hmac=35666bb9d37a9f076f1449b4a55d8369728b7ad5cb2593e37abae3ed40cbe2c6',
    title: 'Product Manager - InnovateX',
    ratings: 5,
    videoUrl: 'https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm',
  },
  {
    name: 'David Lee',
    thumbnailUrl:
      'https://img.freepik.com/free-photo/man-with-headset-video-call_23-2148854889.jpg?t=st=1714647602~exp=1714651202~hmac=35666bb9d37a9f076f1449b4a55d8369728b7ad5cb2593e37abae3ed40cbe2c6',
    title: 'Art Director - Bright Ideas Agency',
    ratings: 4.2,
    videoUrl: 'https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm',
  },
  {
    name: 'Sophia Martinez',
    thumbnailUrl:
      'https://img.freepik.com/free-photo/man-with-headset-video-call_23-2148854889.jpg?t=st=1714647602~exp=1714651202~hmac=35666bb9d37a9f076f1449b4a55d8369728b7ad5cb2593e37abae3ed40cbe2c6',
    title: 'Sales Executive - SalesPro Inc.',
    ratings: 4.5,
    videoUrl: 'https://mazwai.com/videvo_files/video/free/2014-11/small_watermarked/matt_devir--one_minute_drive_preview.webm',
  },
];

const slidesContent = [
  {
    orangeText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cumque, eos cupiditate ut earum, delectus veniam, quae dolore dolor ipsa officiis perferendi',
    blackText: 'Lorem ipsum dolor sit ame adipisicing elit. Numquam, dicta',
  },
  {
    orangeText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cumque, eos cupiditate ut earum, delectus veniam, quae dolore dolor ipsa officiis perferendi',
    blackText: 'Lorem ipsum dolor sit ame adipisicing elit. Numquam, dicta',
  },
  {
    orangeText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas cumque, eos cupiditate ut earum, delectus veniam, quae dolore dolor ipsa officiis perferendi',
    blackText: 'Lorem ipsum dolor sit ame adipisicing elit. Numquam, dicta',
  },
];

const TrustedByHundredsSection: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState<VideoState>({
    isPlaying: false,
    innerIndex: 0,
    outerIndex: 0,
  });
  const [outerTestimonial, setOuterTestimonial] = useState<OuterTestimonial>([]);
  const screenWidth = useViewportWidth();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 668px)').matches);
    };

    handleResize();
  }, [screenWidth]);

  useEffect(() => {
    const chunkSize = isMobile ? 2 : 4;
    const tempOuterTestimonial = [];

    for (let i = 0; i < testimonialsData.length; i += chunkSize) {
      tempOuterTestimonial.push(testimonialsData.slice(i, i + chunkSize));
    }

    setOuterTestimonial(tempOuterTestimonial);
  }, [isMobile]);

  const handlePlayVideo = (outerIndex: number, innerIndex: number) => {
    if (isVideoPlaying.innerIndex === innerIndex && isVideoPlaying.outerIndex === outerIndex && isVideoPlaying.isPlaying) {
      setIsVideoPlaying({
        isPlaying: false,
        outerIndex: outerIndex,
        innerIndex: innerIndex,
      });
    } else {
      setIsVideoPlaying({
        isPlaying: true,
        outerIndex: outerIndex,
        innerIndex: innerIndex,
      });
    }
  };

  const isVideoPlay = (outerIndex: number, innerIndex: number): boolean => {
    return isVideoPlaying.isPlaying && isVideoPlaying.innerIndex === innerIndex && isVideoPlaying.outerIndex == outerIndex;
  };

  return (
    <section className="w-full max-w-[100vw] overflow-hidden  bg-white ">
      <div className="mx-auto mb-10 w-full px-0  py-12  md:py-16">
        <div className="mx-auto w-full text-center">
          <Heading
            text="Trusted by hundreds of companies with 10+ seven figure businesses"
            className="mx-auto w-5/6 text-2xl font-bold text-[#141F2B] sm:w-2/3 sm:text-3xl lg:w-1/2"
          />
          <p className="text-gray-500 text-center py-4 max-w-2xl text-lg m-auto  sm:w-5/6 sm:text-xl">
            But do not just take our word, click on the buttons below to see real client reviews and testimonials on how we are getting results in all different
            types of industries.
          </p>
        </div>

        <div className={`mt-10 flex w-full flex-col flex-wrap items-center justify-center gap-8 px-4 sm:flex-row sm:px-6 lg:px-8`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-span-2 flex flex-col gap-3">
              <span className="font-inter flex items-center justify-center gap-2 text-base font-normal text-black">
                <PlayCircleIcon className="" width={20} />
                Watch testimonial
              </span>
              <Button label={testimonial.title} className=" mx-auto min-w-[180px] rounded-lg text-white  shadow-[0_0px_5px_0.5px_rgba(0,0,0,0.6)]" />
            </div>
          ))}
        </div>

        <div className={` my-6 w-full flex-row items-center justify-center overflow-hidden  px-0 py-12 md:py-0 ${isMobile ? ' bg-orange' : ' bg-white'}`}>
          <div className="mx-auto w-[100%] md:w-[600px] lg:w-[660px] ">
            <Splide
              className="h-full w-full "
              options={{
                perPage: 1,
                perMove: 1,
                type: 'loop',
                autoplay: true,
                arrows: true,
                focus: 'center',
                pagination: true,
              }}
            >
              {outerTestimonial.map((innerTestimonials: Testimonial[], outerIndex: number) => (
                <SplideSlide key={`outer-${outerIndex}`} className="h-full w-full px-12 py-8">
                  <div className={`grid h-full w-full items-center justify-center gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
                    {innerTestimonials.map((testimonial: Testimonial, innerIndex: number) => (
                      <div
                        key={`inner-${innerIndex}`}
                        className="group relative aspect-[20/14] w-full overflow-hidden rounded-lg bg-transparent shadow-sm hover:shadow-lg"
                      >
                        <div className="h-full w-full">
                          {isVideoPlay(outerIndex, innerIndex) ? (
                            <div className="flex h-full w-full items-center justify-center bg-transparent">
                              <video
                                src={testimonial.videoUrl}
                                autoPlay
                                // controls={true}
                                className="h-full w-full object-cover"
                                loop={true}
                              ></video>
                            </div>
                          ) : (
                            <img alt="" src={testimonial.thumbnailUrl} className="absolute h-full w-full object-cover" />
                          )}
                          <div className="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center ">
                            <span
                              className={`h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#c14d2d] bg-opacity-80 ${
                                isVideoPlay(outerIndex, innerIndex) ? 'hidden group-hover:flex' : 'flex'
                              }`}
                              onClick={() => handlePlayVideo(outerIndex, innerIndex)}
                            >
                              {isVideoPlay(outerIndex, innerIndex) ? (
                                <PauseIcon color="#FFFFFF" opacity={0.8} className="w-8" />
                              ) : (
                                <PlayIcon color="#FFFFFF" opacity={0.8} className="w-8" />
                              )}
                            </span>
                          </div>
                          {!isVideoPlay(outerIndex, innerIndex) && (
                            <div className="font-inter absolute bottom-0 top-0 z-20 flex h-full w-full flex-col items-end justify-end px-2 text-xs text-white shadow-[inset_0_-15px_10px_1px_rgba(0,0,0,0.8)]">
                              <div className="flex w-full items-end justify-between gap-4 p-2 pe-3">
                                <div className="flex flex-col items-start justify-end">
                                  <h3 className="text-left font-extrabold">{testimonial.name}</h3>
                                  <p className="font-medium">{testimonial.title}</p>
                                </div>
                                <Ratings num={testimonial.ratings} starWidth={15} />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>

        <div className="my-6 flex w-full items-center justify-center overflow-hidden bg-white">
          <div className="mx-auto w-[90%] md:w-[500px] lg:w-[500px]">
            <Splide
              className="h-full w-full"
              options={{
                perPage: 1,
                perMove: 1,
                type: 'loop',
                gap: '1rem',
                autoplay: true,
                interval: 3000,
                arrows: false,
                focus: 'center',
                pagination: true,
              }}
            >
              {slidesContent.map((content, index) => (
                <SplideSlide key={index} className="pb-8">
                  <div className="shadow-[0px_4px_6px_2px_rgba(0, 0, 0, 0.25)] flex h-full w-full max-w-full items-center justify-center rounded-xl border-2 border-slate-50 bg-white p-5 drop-shadow-xl">
                    <div>
                      <p className="text-orange font-inter text-center text-base font-normal">{content.orangeText}</p>
                      <p className=" font-inter mt-6 text-center text-[11px] font-normal italic leading-tight tracking-wide text-black">
                        — {content.blackText}
                      </p>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TrustedByHundredsSection;
