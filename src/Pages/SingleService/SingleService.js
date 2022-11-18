import React from "react";
import { useLoaderData } from "react-router-dom";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";
import { GrLanguage, IconName } from "react-icons/gr";

const SingleService = () => {
  const service = useLoaderData();
  return (
    <div>
      <TittleHeader title={service.title}></TittleHeader>
      <div className="my-24 grid grid-cols-4 gap-12 container mx-auto">
        <div className=" col-span-3 ">
          <img className="w-full" src={service.thumbUrl} alt="" />
          <h2>{service.title}</h2>
          <div className="w-full border-t border-slate-200"></div>
          <p className="text-xl">{service.description}</p>
          <div className="flex shadow rounded p-5">
            <div>
              <span className="text-lg font-bold mr-3">
                <GrLanguage className="inline mr-2"></GrLanguage> Language:
              </span>
              <span>{service.language}</span>
            </div>
          </div>
        </div>
        <div className="border">
          <h2 className="text-center">Reviews</h2>
        </div>
      </div>
    </div>
  );
};

export default SingleService;
