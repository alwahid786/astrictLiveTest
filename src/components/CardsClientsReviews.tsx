import Image from "next/image";
import RatingStarIcon from '@/svg/RatingStarIcon';
import HalfStarRatingIcon from '@/svg/HalfStarRatingIcon';
import { StaticImageData } from 'next/image';
interface CardsClientsReviewsProps {
    title: string;
    text: string;
    IMG: StaticImageData;
    subtitle: string;
  }

  const CardsClientsReviews: React.FC<CardsClientsReviewsProps> = ({ title, text, IMG, subtitle }) => 
  <div className=" min-h-full">
      <div className="w-full md:w-[300px] bg-zinc-100 min-h-full p-5">
          <div className="flex flex-col items-center gap-4 ">
              <div className="flex items-center gap-4">
                  <Image src={IMG} alt='img' className="size-13 rounded-full object-cover" />

                  <div>
                      <div className="text-[#37393f] text-[15px] sm:text-[20px] font-semibold ">{title}</div>
                      <div className="text-slate-500">{subtitle}</div>
                      <div className="flex flex-row items-center"><RatingStarIcon /><RatingStarIcon /><RatingStarIcon /><RatingStarIcon /><HalfStarRatingIcon/></div>
                  </div>
              </div>
          </div>
          <div className="text-[#7d7d7d] mb-6 text-center">{text}</div>
      </div>
  </div>

export default CardsClientsReviews
