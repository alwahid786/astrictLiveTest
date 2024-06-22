import TrustedByHundredsSection from '@/components/TrustedByHunderedSection';
import ReuseRevenueDriving from '@/components/ReuseRevenueDriving';
import ScheduleTime from './sections/ScheduleTime';

export default function Consulting() {
  return (
    <>
      <div className="bg-white">
        <div className="relative mx-auto grid w-fit grid-flow-row auto-rows-min ">
          <ScheduleTime />
          <TrustedByHundredsSection />
          <ReuseRevenueDriving />
        </div>
      </div>
    </>
  );
}
