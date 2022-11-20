import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow rounded">
      <PhotoProvider>
        <PhotoView src={service.thumbUrl}>
          <figure className="hover:cursor-pointer ">
            <img
              className="hover:scale-105 overflow-hidden transition-all duration-500 "
              src={service.thumbUrl}
              alt="Shoes"
              height={"300px"}
              width={"400px"}
            />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body">
        <h2 className="card-title text-xl ">{service.title}</h2>
        <p className="text-lg">{service.description.slice(0, 100) + " ...."}</p>
        <div className="card-actions flex justify-between ">
          <p className="text-xl font-semibold">${service.price}</p>
          <Link to={`/services/${service._id}`}>
            <button className=" text-info text-lg hover:cursor-pointer">
              view details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
