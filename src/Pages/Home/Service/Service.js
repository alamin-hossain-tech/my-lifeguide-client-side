import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

const Service = () => {
  return (
    <div className="container mx-auto my-16">
      <h1 className="text-center text-4xl uppercase font-semibold mb-10">
        Area of services
      </h1>
      <div className="flex justify-center gap-x-5">
        <div className="card card-compact w-96 bg-base-100 shadow-xl hover:-translate-y-6 transition-all duration-500 rounded">
          <PhotoProvider>
            <PhotoView src="https://placeimg.com/400/225/arch">
              <figure className="hover:cursor-pointer">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
            </PhotoView>
          </PhotoProvider>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <PhotoProvider>
            <PhotoView src="https://placeimg.com/400/225/arch">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
            </PhotoView>
          </PhotoProvider>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <PhotoProvider>
            <PhotoView src="https://placeimg.com/400/225/arch">
              <figure>
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
              </figure>
            </PhotoView>
          </PhotoProvider>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-10">
        <button className="btn btn-info text-white ">View All Services</button>
      </div>
    </div>
  );
};

export default Service;
