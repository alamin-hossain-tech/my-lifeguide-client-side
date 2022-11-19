import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";
import { GrCertificate, GrLanguage } from "react-icons/gr";
import { GoClock, GoGraph } from "react-icons/go";
import { BiLockAlt } from "react-icons/bi";
import ReviewItem from "../Shared/ReviewItem/ReviewItem";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Tooltip } from "@mui/material";
import TabTitle from "../../Utility/General";

const SingleService = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  TabTitle(service.title);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://my-life-guide-server.vercel.app/reviews/${service._id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [service]);

  return (
    <div>
      <TittleHeader title={service.title}></TittleHeader>
      <div className="my-24 grid grid-cols-1 md:grid-cols-4 gap-5 container mx-auto">
        <div className=" col-span-3 px-5 md:px-0">
          <PhotoProvider>
            <PhotoView src={service.thumbUrl}>
              <Tooltip title="Click to view image">
                <img
                  className="w-full hover:cursor-pointer"
                  src={service.thumbUrl}
                  alt=""
                />
              </Tooltip>
            </PhotoView>
          </PhotoProvider>
          <div className="flex justify-between items-center gap-5 mt-8">
            <h2 className="text-xl lg:text-4xl">{service.title}</h2>
            <p className="text -xl lg:text-4xl font-semibold">
              ${service.price}
            </p>
          </div>
          <div className="w-full border-t py-3 border-slate-200"></div>
          <p className="text-xl ">{service.description}</p>
          <div className=" shadow p-5">
            <div className="mb-3">
              <span className="text-lg font-bold mr-3">
                <GrLanguage className="inline mr-2"></GrLanguage> Language:
              </span>
              <span>{service.language}</span>
            </div>
            <div className="mb-3">
              <span className="text-lg font-bold mr-3">
                <GoGraph className="inline mr-2"></GoGraph> Level:
              </span>
              <span>{service.level}</span>
            </div>
            <div className="mb-3">
              <span className="text-lg font-bold mr-3">
                <GoClock className="inline mr-2"></GoClock> Duration:
              </span>
              <span>{service.duration} hours</span>
            </div>
            <div className="mb-3">
              <span className="text-lg font-bold mr-3">
                <GrCertificate className="inline mr-2"></GrCertificate>{" "}
                Certificate:
              </span>
              <span>{service.certificate} </span>
            </div>
          </div>
        </div>
        <div className="shadow p-5">
          <h2 className="pb-5">Reviews</h2>
          {reviews.length !== 0 ? (
            reviews.map((review) => (
              <ReviewItem key={review._id} r={review}></ReviewItem>
            ))
          ) : (
            <h4> No Review yet 😞</h4>
          )}
          <div className="mt-12">
            <Link
              to={`/addreview/${service._id}`}
              className="btn btn-info text-white"
            >
              {user?.email && "Write a Review"}
              {!user?.email && (
                <>
                  <BiLockAlt className="text-white text-xl mr-2"></BiLockAlt>
                  Loginto Write a Review
                </>
              )}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
