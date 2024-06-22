import Image from "next/image";
import img from "@public/about/image.png";
import SquareBox from "@/svg/SquareBox";
import CheckMark from "@/svg/CheckMark";
import CheckMarkWhite from "@/svg/CheckMarkWhite";
import Document from "@/svg/Document";
import EnvelopeGraphic from "@/svg/EnvelopeGraphic";
import Heading from "@/components/Heading";
import Link from "next/link";
import Button from "@/components/buttons/Button";
import ContentLabel from "@/components/Content-Label/ContentLabel";
import CheckMarkLabel from "@/components/Check-Mark-Label/Check-Mark-Label";

const cardData = {
  image: img,
  title: "We're Ready To Grow Your Business",
  text: "With decades of industry experience and deep knowledge of rural businesses, we offer strategies that help you stand out, impact your community, and achieve success.",
  email: "contact@astric.co",
};

const data = {
  title: "We Care About Your Business Plan.",
  description:
    "Our approach encompasses every aspect of your enterprise. We integrate your values and vision into your business strategy, operations, and content, constructing a cohesive and impactful brand identity that builds a loyal customer base.",
  checkMarkPoints: ["Components of a Business Strategy", "Business Consulting"],
};

export default function WelcomeToAstricSection() {
  return (
    <section className="bg-white grid grid-cols-1 lg:grid-cols-2 lg:gap-8 max-w-[100vw] ">
      <div className="hidden lg:block w-full bg-gray-100">
        <div className="max-w-xl ml-auto pt-10">
          <div className="flex flex-col items-end gap-3 p-9">
            <div className="w-[80%]">
              <Image className="z-10 w-[100%]" src={cardData.image} alt="img" />
              <Heading
                text={cardData.title}
                className="text-[25px] font-bold text-left text-black mt-4"
              />
              <p className="text-left text-grey my-2">{cardData.text}</p>
              <Link
                href={`mailto:${cardData.email}`}
                className="underline font-semibold text-orange"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ContentLabel
        label="Welcome to Astric"
        blockColor="#E0592A"
        textColor="#37393F"
        className="lg:hidden mx-auto"
      />
      <div className="relative z-[1] lg:max-w-lg flex flex-col items-start gap-6 p-6 py-10 pt-16   bg-transparent ">
        <ContentLabel
          label="Welcome to Astric"
          blockColor="#E0592A"
          textColor="#37393F"
          className="hidden lg:flex gap-2 py-1 px-0"
        />
        <div>
          <Heading
            text="We Care About Your Business Plan."
            className="text-3xl font-bold text-left lg:text-black mb-4"
          />
          <p className="lg:text-grey ">
            Our approach encompasses every aspect of your enterprise. We
            integrate your values and vision into your business strategy,
            operations, and content, constructing a cohesive and impactful brand
            identity that builds a loyal customer base.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <CheckMarkLabel
            label="Components of a Business Strategy"
            textColor="text-white lg:text-gray-500"
          />
          <CheckMarkLabel
            label="Business Consulting"
            textColor="text-white lg:text-gray-500"
          />
        </div>

        <div className="hidden lg:grid grid-cols-2 gap-2 w-full">
          <div className="flex gap-4 border border-slate-200 p-4 pr-5">
            <div>
              <Document />
            </div>
            <div>
              <Heading
                text="Experience"
                className="font-bold text-lg text-black whitespace-nowrap"
              />
              <p className="text-sm text-grey">
                We have over 20+ years of experience
              </p>
            </div>
          </div>

          <div className="flex gap-4 border border-slate-200 p-4 pr-5">
            <div>
              <EnvelopeGraphic />
            </div>
            <div>
              <Heading
                text="Awards Winner"
                className="font-bold text-lg text-black whitespace-nowrap"
              />
              <p className="text-sm text-grey">
                We are a proud winner of business awards.
              </p>
            </div>
          </div>
        </div>
        <Button label="More About Us" className="text-white font-semibold" />
        <div
          style={{
            background:
              "linear-gradient(0deg, rgba(18,40,76,0.72) 0%, rgba(18,40,76,0.83) 58%, rgba(18,40,76,1) 100%)",
          }}
          className="absolute lg:hidden z-[-1] left-0 top-0 w-full h-full"
        />
        <Image
          src={img}
          alt=""
          className="absolute lg:hidden w-full h-full top-0 left-0 z-[-2] object-cover"
        />
      </div>
    </section>
  );
}
