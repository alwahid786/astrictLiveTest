import React from 'react';
import Heading from '@/components/Heading';

function ScheduleTime() {
  return (
    <section>
      <div className="mt-5 bg-white">
        <div className="mx-auto w-full text-center">
          <Heading
            className="mx-auto w-5/6 text-2xl font-bold text-[#141F2B] sm:w-2/3 sm:text-3xl lg:w-1/2"
            text="Schedule your 15-minute free consultation."
          />
          <p className="m-auto max-w-2xl py-4 text-center text-lg text-gray-500  sm:w-5/6 sm:text-xl">
            Discover how our services enable businesses similar to yours to consistently forecast qualified leads, secure deals, recruit top-tier talent, and
            boost revenue.
          </p>
        </div>
        <iframe
          className="calendly-inline-widget"
          scrolling="no"
          src="https://calendly.com/astric/digital-business-solutions"
          style={{ width: '100%', height: '820px', border: 'none', background: 'white' }}
        ></iframe>
      </div>
    </section>
  );
}

export default ScheduleTime;
