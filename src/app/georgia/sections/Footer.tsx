import Image from "next/image";
import BookImage from "@public/images/card/bookImage.png";
import FooterImage from "@public/images/card/footerImage.png";
import Tick from "@public/images/card/tic.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
  return (
    <div className="relative py-12 px-4 lg:px-24 xl:px-32" style={{ background: `url(${FooterImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold leading-tight text-center text-white mb-8">
          Download Free <br /> Rural Startup Blueprint eBook
        </h1>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Side */}
          <div className="flex flex-col justify-center space-y-6  flex-1">
            <div className="space-y-4">
              {/* Input fields */}
              <div className="relative">
                <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full md:w-96 lg:w-108 xl:w-120 p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Email" 
                  className="w-full md:w-96 lg:w-108 xl:w-120 p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="relative">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Zip Code" 
                  className="w-full md:w-96 lg:w-108 xl:w-120 p-3 pl-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Download button */}
              <button className="w-full md:w-96 lg:w-108 xl:w-120 py-3 px-6 text-white rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" style={{background: "#E0592A"}}>
                Download
              </button>

              {/* List with checkmark icons and paragraphs */}
              <div className="list flex items-center gap-1 text-white mt-4">
                <Image src={Tick} width={20} height={20} alt="tic" />
                <p className="ml-2">
                  5 Chapters Explaining How to Start <br /> Your Business
                </p>
              </div>
              <div className="list flex items-center gap-1 text-white mt-4">
              <Image src={Tick} width={20} height={20} alt="tic" />
                <p className="ml-2">
                  Tips from Experts in the Industry
                </p>
              </div>
              <div className="list flex items-center gap-1 text-white mt-4">
              <Image src={Tick} width={20} height={20} alt="tic" />
                <p className="ml-2">
                  Alaska-Specific Deep Dive
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="flex items-center justify-center md:w-80 lg:w-96 xl:w-9/12 2xl:w-3/4">
            {/* Image */}
            <div className="w-full">
              <Image 
                src={BookImage} 
                alt="Book Cover" 
                className="w-full h-full rounded-lg" 
                layout="responsive" 
                objectFit="cover" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
