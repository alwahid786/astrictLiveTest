import Image from "next/image";
// import background_img from "@public/group-people-working-out-business-plan-office 1.jpg";
import background_img from "@public/images/HeroImage.png";
import join_to_win_img from "@public/images/join-to-win.png";
import Heading from "@/components/Heading";
import Button from "@/components/buttons/Button";
import Link from "next/link";
import { ConstructorLogo } from "@/svg/ConstructorLogo";

export default function InConstructionPage() {
  return (
    <main className="relative min-h-[100vh] max-h-full w-full p-4 lg:p-16 text-white">
      <div className="flex flex-col items-center gap-4">
     <ConstructorLogo/>
        <Heading
          text="Celebrate with us"
          className="text-4xl uppercase font-bold text-center"
        />
        <p className="text-center">
          We are Revamping Our Website for an Enhanced Client Experience!
        </p>
        <p className="text-center">Come celebrate with us!</p>
        <Link href="/campaigns/giveaway">
          <Image
            src={join_to_win_img}
            alt=""
            className="w-[350px] drop-shadow-xl shadow-black mb-6 lg:mb-0 shadow-[0px_4px_6px_2px_rgba(0,0,0,0.15)] rounded-sm"
          />
        </Link>
        <Button
          href="mailto:contact@astric.co"
          label="Contact Us"
          className="lg:hidden uppercase font-bold"
        />
      </div>

      <div
        style={{
          background:
            "linear-gradient(0deg, rgba(18,40,76,0.6) 0%, rgba(18,40,76,0.8) 58%, rgba(18,40,76,1) 100%)",
        }}
        className="absolute w-full h-full object-cover top-0 left-0 z-[-1] opacity-80"
      ></div>
      <Image
        src={background_img}
        alt=""
        className="absolute w-full h-full object-cover left-0 z-[-2] bottom-0 top-0"
      />
      <Button
        href="mailto:contact@astric.co"
        label="Contact Us"
        className="hidden lg:block uppercase absolute top-6 right-6 font-bold"
      />
    </main>
  );
}
