import StarIcon from "@/svg/GiveAway/StarIcon";
import BrandNewIpad from "@/svg/GiveAway/BrandNewIpad.png";
import AstricLogo from "@/svg/GiveAway/AstricLogo";
import WinSm from "@/svg/GiveAway/win-sm.png";
import Heading from "@/components/Heading";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import FormComponent from "./sections/FormComponent";

export default function GiveAway() {
  return (
    <>
      <div className="bg-navy-gradient w-full md:h-screen relative overflow-y-auto no-scrollbar min-h-[100vh]">
        <div className="absolute top-0 left-0 hidden md:block">
          <StarIcon />
        </div>
        <div className="flex flex-col items-center gap-0 relative z-10  ">
          <div className="mt-4">
            <AstricLogo />
          </div>
          <Heading
            text="JOIN US TO WIN"
            className=" text-2xl md:text-4xl uppercase font-bold text-center text-white  mt-6 md:mt-12"
          />
          <Image
            src={BrandNewIpad}
            alt=""
            className=" w-[300px] md:w-[592px]  h-[37] md:h-[79px] object-contain "
          />
          <p className="text-center text-white w-[190px] md:w-auto text-[15px]  md:text-[20px] font-normal mt-4 md:mt-0">
            Participate In Our Contest For a Chance To Win An Ipad, Ipods & Gift
            Cards
          </p>
          <div className="block md:hidden mt-2 ">
            <FormComponent />
          </div>
          <Image
            src={WinSm}
            alt=""
            className="md:hidden w-[400px]  h-auto mt-4 rounded-sm"
          />
          <div className=" relative flex flex-col items-center w-full ">
            <div className="md:relative top-0 left-0 pt-0 md:pt-3.5 ">
              <Image
                src={WinSm}
                alt=""
                className="hidden md:block w-[400px] 2xl:w-100%  h-full mt-2 rounded-sm"
              />
            </div>
            <div className="hidden md:block md:absolute z-10 pt-44 ">
              <FormComponent />
            </div>
          </div>
        </div>
        <Button
          href="#"
          label="Contact us"
          className="hidden md:block cursor-pointer	 uppercase absolute top-6 right-6 font-bold text-white"
        />
      </div>
    </>
  );
}
