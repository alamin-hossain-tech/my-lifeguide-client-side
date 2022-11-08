import React from "react";

import {
  IoArrowForwardCircleOutline,
  IoCalendarOutline,
} from "react-icons/io5";

const News = () => {
  return (
    <div className=" py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-medium text-center ">
          LATEST NEWS AND UPDATES
        </h2>
        <h2 className="text-4xl font-bold text-center">FROM BLOG.</h2>
        <div className="flex gap-x-8 justify-center my-12">
          <div className="card card-compact w-96 rounded bg-base-100 shadow-xl">
            <figure>
              <img
                className=""
                src="https://i.ibb.co/RhSQjjC/krakenimages-376-KN-ISpl-E-unsplash.jpg"
                alt=""
              />
            </figure>
            <div className="card-body">
              <p className="flex items-center gap-x-2 font-bold ">
                <IoCalendarOutline className="inline text-ancent"></IoCalendarOutline>
                February 21th, 2022
              </p>
              <h2 className="card-title">
                Easy steps to move from fear to confidence.
              </h2>
              <div>
                <button className="flex items-center gap-x-2">
                  <IoArrowForwardCircleOutline className="inline"></IoArrowForwardCircleOutline>{" "}
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 card-compact rounded bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/G3K965P/tim-gouw-bwki71ap-y8-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="flex items-center gap-x-2 font-bold ">
                <IoCalendarOutline className="inline text-ancent"></IoCalendarOutline>
                April 26th, 2022
              </p>
              <h2 className="card-title">
                How to get more done and have more fun.
              </h2>
              <div>
                <button className="flex items-center gap-x-2">
                  <IoArrowForwardCircleOutline className="inline" /> Read More
                </button>
              </div>
            </div>
          </div>
          <div className="card w-96 card-compact rounded bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/VMxRQyc/kenny-eliason-y-6rq-St-QBYQ-unsplash.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <p className="flex items-center gap-x-2 font-bold ">
                <IoCalendarOutline className="inline text-ancent"></IoCalendarOutline>
                December 16th, 2021
              </p>
              <h2 className="card-title">
                Financial growth in your down economy.
              </h2>
              <div>
                <button className="flex items-center gap-x-2">
                  <IoArrowForwardCircleOutline className="inline" /> Read More
                </button>
              </div>
            </div>
          </div>
          {/* ------------------ */}
        </div>
      </div>
    </div>
  );
};

export default News;
