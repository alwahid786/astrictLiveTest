import Image from 'next/image'
import React from 'react'
import ClenderImage from "@public/images/card/cliender.png";

const Clender = () => {
  return (

    <>

       <div className="clender_wraper mt-7 flex justify-center items-center">
       <iframe
          className="calendly-inline-widget"
          scrolling="no"
          src="https://calendly.com/astric/digital-business-solutions"
          style={{ width: '100%', height: '820px', border: 'none', background: 'white' }}
        ></iframe>
       </div>

    </>

  )
}

export default Clender
