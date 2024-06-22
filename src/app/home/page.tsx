import ProvideSolution from '@/components/ProvideSolution';
import HeroSlider from '@/app/home/sections/HeroSlider';
import WelcomeToAstricSection from './sections/WelcomeToAstricSection';
import TopNav from '@/components/navigation/TopNav';
import GetInTouch from '@/components/get-in-touch/Get-in-touch';
import HeroSection from './sections/Hero';
import IconBar from './sections/Iconbar';
import ProfessionalBusinessSolution from './sections/ProfessionalBusinessSolution';
import ProjectAsInspiration from './sections/ProjectAsInspiration';
import ClientReviews from './sections/ClientReviews';
import TrustedByHundredsSection from '@/components/TrustedByHunderedSection';
import ReuseRevenueDriving from '@/components/ReuseRevenueDriving';
// import ProfessionalBusinessSolution from "./sections/ProfessionalBusinessSolution";

export default function Home() {
  return (
    <div className=" bg-white ">
      <div className="relative mx-auto grid w-fit grid-flow-row auto-rows-min">
        <HeroSection />
        {/* <Slider /> */}
        <HeroSlider />
        <WelcomeToAstricSection />
        <IconBar />
        <ProfessionalBusinessSolution />
        <ProvideSolution />
        <ProjectAsInspiration />
        <ClientReviews />
        <GetInTouch />
        <TrustedByHundredsSection />
        <ReuseRevenueDriving />
      </div>
    </div>
  );
}
