import React from "react";
import {
  MdEmojiPeople,
  MdOutlineEscalatorWarning,
  MdOutlineFamilyRestroom,
  MdOutlineHiking,
} from "react-icons/md";

const Reason = () => {
  return (
    <div className="bg-dark-c py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-normal text-white">
          REASON BEHIND CHOOSING
        </h2>
        <h2 className="text-4xl font-bold text-white">MY LIFEGUIDE.</h2>
        <div className="flex gap-x-5 justify-between mt-12">
          <div className="card rounded w-72 bg-base-100 shadow-xl">
            <figure className="py-12 bg-sky-c">
              <MdEmojiPeople className="mx-auto text-7xl"></MdEmojiPeople>
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl font-bold justify-center">
                Fulfillment
              </h2>
              <p className="text-center text-xl">
                Ever undertakes laborious physical exercise, except obtain
                advantage it.
              </p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
          {/* ------------------ */}
          <div className="card rounded w-72 bg-base-100 shadow-xl">
            <figure className="py-12 bg-sky-c">
              <MdOutlineFamilyRestroom className="mx-auto text-7xl"></MdOutlineFamilyRestroom>
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl font-bold justify-center">
                Guidance
              </h2>
              <p className="text-center text-xl">
                There anyone who loves to pursues or desire to obtain pain of
                itself it is pain.
              </p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
          {/* ------------------ */}
          <div className="card rounded w-72 bg-base-100 shadow-xl">
            <figure className="py-12 bg-sky-c">
              <MdOutlineEscalatorWarning className="mx-auto text-7xl"></MdOutlineEscalatorWarning>
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl font-bold justify-center">
                Beingness
              </h2>
              <p className="text-center text-xl">
                Which of us ever undertakes laborious except to obtain some
                advantage from it.
              </p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
          {/* ------------------ */}
          <div className="card rounded w-72 bg-base-100 shadow-xl">
            <figure className="py-12 bg-sky-c">
              <MdOutlineHiking className="mx-auto text-7xl"></MdOutlineHiking>
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-2xl font-bold justify-center">
                Success
              </h2>
              <p className="text-center text-xl">
                How pursues nor rationally encount that extremely painful again
                there anyone.
              </p>
              {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div> */}
            </div>
          </div>
          {/* ------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Reason;
