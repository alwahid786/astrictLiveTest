import SquareBox from "@/svg/SquareBox";
import BusinessSolutionBlock from "../../../components/BusinessSolutionBlock";
import FinancialIcon from "@/svg/FinancialIcon";
import CompanyIcon from "@/svg/CompanyIcon";
import BusinessIcon from "@/svg/BusinessIcon";
import { ConsultantsIcon } from "@/svg/ConsultantsIcon";
import FinancialJobIcon from "@/svg/FinancialJobIcon";
import ContentLabel from "@/components/Content-Label/ContentLabel";

const ProfessionalBusinessSolution = () => {
  const cardsData = [
    {
      title: "Financial   Consultancy",
      svgIcon: <FinancialIcon />,
      text: "Read More",
    },
    {
      title: "Business   Management",
      svgIcon: <BusinessIcon />,
      text: "Read More",
    },
    {
      title: "Consultants & program",
      svgIcon: <ConsultantsIcon />,
      text: "Read More",
    },
    {
      title: "Company   Management",
      svgIcon: <CompanyIcon />,
      text: "Read More",
    },
    {
      title: "Financial & Insurance jobs",
      svgIcon: <FinancialJobIcon />,
      text: "Read More",
    },
    {
      title: "See Our Packages",
    },
  ];

  return (
    <section className="bg-white max-w-[100vw]  text-black">
      <div className="container mx-auto mt-20 relative pb-5">
        <ContentLabel
          label="We Are Expertise In"
          blockColor="#E0592A"
          textColor="#37393F"
          className="justify-center"
        />
        <p className="text-center text-4xl font-bold font-poppins text-[#37393F]">
          We Provide Professional
        </p>
        <p className="text-center text-4xl font-bold font-poppins text-[#37393F]">
          Business Solutions.
        </p>
        <div className=" mx-auto text-[#37393F]  relative grid grid-cols sm:grid-cols-2 lg:grid-cols-3 justify-center gap-2 mt-[20px] md:mt-[40px] p-[20px]">
          {cardsData.map((card, index) => (
            <BusinessSolutionBlock
              key={index}
              title={card.title}
              svgIcon={card.svgIcon}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBusinessSolution;
