import React from "react";
import SquareBox from "@/svg/SquareBox";
import CardsClientsReviews from "@/components/CardsClientsReviews";
import CardPic1 from "../../../svg/CardsReviews/Image (3).png";
import CardPic2 from "../../../svg/CardsReviews/Image (4).png";
import ContentLabel from "@/components/Content-Label/ContentLabel";

const ClientReviews = () => {
  const cardsData = [
    {
      img: CardPic1,
      title: "Nattasha Kelvin",
      subtitle: "Designer",
      text: "“ dd an excerpt from your personal biography, or simply let the world know who you are and what you have to offer. Connect with your site visitor’s on a personal level and make sure that your site.",
    },
    {
      img: CardPic2,
      title: "Cincinnati",
      subtitle: "Designer",
      text: " Leverage agile frameworks to provide a robust synopsis for high level overviews",
    },
  ];
  return (
    <section className="h-auto  bg-white max-w-[100vw]  text-black ">
      <div className="lg:w-[90%] w-full flex flex-col p-10 gap-5 lg:flex-row lg:justify-between mx-auto">
        <div className="grow ">
        <ContentLabel
          label="Testimonials"
          blockColor="#E0592A"
          textColor="#37393F"
          className="text-lg"
        />

          <div>
            <p className="text-2xl font-bold font-poppins md:text-4xl w-full lg:text-start text-center text-[#37393F]">
              What Our <br className="hidden lg:block" />
              Clients Say
            </p>
            <p className="text-[#7d7d7d] font-poppins hidden md:block lg:text-start text-center">
              Don’t just take our word for it.{" "}
              <br className="hidden lg:block" />
              See what our clients are saying.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-center lg:justify-end gap-4 items-start">
          {cardsData?.map((card, index) => (
            <CardsClientsReviews
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              text={card.text}
              IMG={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
