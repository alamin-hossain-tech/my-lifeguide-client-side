import React from "react";
import signature from "../../../Assets/Home/signature.png";

import experience from "../../../Assets/Home/experience-img.jpg";

import { TbArrowNarrowRight, TbFileCertificate } from "react-icons/tb";

const Feature = () => {
  return (
    <div className="bg-sky-c">
      <div className="container mx-auto  flex">
        <div className="w-1/2 flex items-center">
          <div className=" w-2/3 mx-auto">
            <h2 className="text-4xl font-medium">SINCE 1994 IAM SERVING AS</h2>
            <h2 className="text-4xl font-bold">LIFE COACHER.</h2>
            <p className="text-ancent text-xl font-bold my-10">
              Positive behavioral supports is a behavior management system used
              to understand behavior.
            </p>
            <p>
              Pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the
              great explorer of the truth, the master-builder of human
              happiness.
            </p>
            <div className="flex justify-between mt-10">
              <img src={signature} alt="" />
              <button>
                <TbArrowNarrowRight className="inline"></TbArrowNarrowRight>{" "}
                Read More
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="relative">
            <div>
              <img src={experience} className="opacity-25 " alt="" />
              <div className="absolute -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 border-4 border-sky-c bg-white  rounded-full w-72 h-72 flex justify-center items-center">
                <div className="text-center">
                  <TbFileCertificate className="inline text-5xl text-ancent"></TbFileCertificate>
                  <h2 className="text-5xl font-bold pt-3">05</h2>
                  <h2 className="text-xl">Certificates Holded</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
