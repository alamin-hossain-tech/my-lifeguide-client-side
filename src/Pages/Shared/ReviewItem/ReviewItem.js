import { Rating } from "@mui/material";
import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const ReviewItem = ({ r }) => {
  const { photoURL, rating, review, displaName } = r;
  console.log(r);
  return (
    <div className="flex gap-3 items-center shadow p-4 mb-5">
      <div className="avatar">
        <div className="w-16 h-16 rounded-full">
          <img src={photoURL} />
        </div>
      </div>
      <div>
        <p>{review}</p>
        <p className="font-bold italic">{displaName}</p>
        <Rating name="read-only" value={rating} readOnly />
      </div>
    </div>
  );
};

export default ReviewItem;
