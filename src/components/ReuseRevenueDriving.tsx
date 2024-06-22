import Heading from '@/components/Heading';
import Button from '@/components/buttons/Button';
import React from 'react';

function ReuseRevenueDriving() {
  return (
    <section className="flex max-w-[100vw] flex-col items-center justify-center gap-3 bg-[#12284C] px-12 py-8  text-white ">
      <Heading
        text="Make your business a
revenue driving machine"
        className="font-inter w-full text-center text-[22px] font-bold leading-tight sm:w-[440px] sm:text-[28px]"
      />
      <Button label="FREE CONSULTATION" className="shadow-[1px_1px_5px_1px_rgba(0, 0, 0, 0.75)] uppercase" />
    </section>
  );
}

export default ReuseRevenueDriving;
