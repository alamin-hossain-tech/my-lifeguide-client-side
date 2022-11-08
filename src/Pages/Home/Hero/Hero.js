import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="http://st.ourhtmldemo.com/new/Life_Guide/images/slides/3.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute  transform -translate-y-1/2 left-44  top-1/2">
            <h2 className="text-6xl ">Make a better life for</h2>
            <h2 className="text-6xl font-bold">You & Your Family</h2>
            <p className="text-xl pt-5">
              Expound Teachings Master Builder of Human Happiness.
            </p>
            <button className="btn btn-info mt-5 text-white">Read More</button>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="http://st.ourhtmldemo.com/new/Life_Guide/images/slides/2.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute  transform -translate-y-1/2 right-1/4  top-1/2">
            <h2 className="text-6xl ">Make a better life for</h2>
            <h2 className="text-6xl font-bold">You & Your Family</h2>
            <p className="text-xl pt-5">
              Expound Teachings Master Builder of Human Happiness.
            </p>
            <button className="btn btn-info mt-5 text-white">Read More</button>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="http://st.ourhtmldemo.com/new/Life_Guide/images/slides/1.jpg"
            className="w-full"
            alt=""
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute  transform -translate-y-1/2 left-1/4  top-1/2">
            <h2 className="text-6xl ">Make a better life for</h2>
            <h2 className="text-6xl font-bold">You & Your Family</h2>
            <p className="text-xl pt-5">
              Expound Teachings Master Builder of Human Happiness.
            </p>
            <button className="btn btn-info mt-5 text-white">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
