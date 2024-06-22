import Image from "next/image";
import React from "react";
import playIcon from "@public/images/card/play.png";

const testimonialData = [
  { name: "Watch testimonial", button: "Agencies" },
  { name: "Watch testimonial", button: "Agencies" },
  { name: "Watch testimonial", button: "Agencies" },
  { name: "Watch testimonial", button: "Agencies" },
];

const Companies = () => {
  return (
    <div className="companies_wrapper">
      <h1 className="text-4xl text-center font-bold mt-10">
        Trusted by hundreds of companies with <br />
        10+ seven-figure businesses
      </h1>
      <p className="text-center mt-5">
        But dont just take our word, click on the buttons below to see real
        client reviews <br /> and testimonials on how we are getting results
        in all different types of <br />
        industries.
      </p>

      <div className="grid grid-cols-4 gap-x-4 mt-10">
        {testimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center mb-4" // Add mb-4 for margin between cards
          >
            <div className="flex gap-2 items-center mb-2">
              <Image src={playIcon} width={30} height={20} alt="play" />
              <p>{testimonial.name}</p>
            </div>

            <button
              className="py-2 px-4"
              style={{
                background: "#E0592A",
                paddingTop: "17px",
                paddingBottom: "17px",
                paddingLeft: "88px",
                paddingRight: "88px",
                borderRadius: "17px",
                fontSize: "19px",
                color: "white",
                fontWeight: "bold",
                boxShadow: "15px 15px 15px rgba(1, 0, 0, 0)",
              }}
            >
              {testimonial.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
