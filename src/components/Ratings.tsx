import { StarIcon } from "@heroicons/react/16/solid";
import React from "react";

const Ratings = ({ num, starWidth = 20 }: any) => {
  const roundedStars = Math.round(num);
  const hasHalfStar = num % 1 !== 0;

  const renderStars = () => {
    const stars = [];

    // Filled stars
    for (let i = 0; i < roundedStars; i++) {
      stars.push(<StarIcon key={i} color="#FFB621" width={starWidth} />);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(<StarIcon key="half" color="#FFB621" width={starWidth} />);
    }

    // Unfilled stars
    const remainingStars = 5 - roundedStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <StarIcon key={`empty-${i}`} color="#D0D5DB" width={starWidth} />
      );
    }

    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default Ratings;
