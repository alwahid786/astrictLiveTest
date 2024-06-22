import React from "react";
import SquareBox from "@/svg/SquareBox";
import Button from "@/components/buttons/Button";
import PicIns2 from "../../../svg/ProjectAsInspiration/PicIns1.png";
import PicIns1 from "../../../svg/ProjectAsInspiration/PicIns2.png";
import PicIns3 from "../../../svg/ProjectAsInspiration/PicIns3.png";
import PicIns4 from "../../../svg/ProjectAsInspiration/PicIns4.png";
import Image from "next/image";
import ContentLabel from "@/components/Content-Label/ContentLabel";

const ProjectAsInspiration = () => {
  return (
    <section className="bg-white max-w-[100vw]  text-black">
      <div className="sm:flex justify-center md:justify-around items-center space-x-8 py-6">
        <div>
          <div className="text-center mb-4 sm:mb-0">
            <ContentLabel
              label="Our Project"
              blockColor="#E0592A"
              textColor="#37393F"
              className="text-lg"
            />
          </div>
          <div className=" md:pl-0 text-[#37393F]">
            <p className="text-2xl font-bold font-poppins md:text-4xl text-center md:text-start ">
              You can check our projects
              <br />
              as inspiration.
            </p>
          </div>
        </div>
        <div>
          <Button label="More Work" className="hidden md:block text-white" />
        </div>
      </div>
      <div>
        <div className="p-5 md:p-8">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            <Image src={PicIns1} alt="img" />
            <Image src={PicIns2} alt="img" />
            <Image src={PicIns3} alt="img" />
            <Image src={PicIns4} alt="img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectAsInspiration;
