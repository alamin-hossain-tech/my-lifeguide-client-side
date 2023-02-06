import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Hero = () => {
  return (
    <div>
      {/* <div className="carousel w-full h-80 lg:h-auto">
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
          <div className="absolute  transform -translate-y-1/2 left-20 lg:left-44  top-1/2">
            <h2 className="text-2xl lg:text-6xl my-0">
              Make a better life for
            </h2>
            <h2 className="text-2xl font-bold lg:text-6xl my-0">
              You & Your Family
            </h2>
            <p className="text-xl pt-5 w-2/3 lg:w-full">
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
          <div className="absolute  transform -translate-y-1/2 left-20 lg:left-1/2  top-1/2">
            <h2 className="text-2xl lg:text-6xl my-0 ">
              Make a better life for
            </h2>
            <h2 className="text-2xl lg:text-6xl my-0 font-bold">
              You & Your Family
            </h2>
            <p className="text-xl pt-5 w-2/3 lg:w-full">
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
          <div className="absolute  transform -translate-y-1/2 left-20 lg:left-44  top-1/2">
            <h2 className="text-2xl lg:text-6xl my-0  ">
              Make a better life for
            </h2>
            <h2 className="text-2xl lg:text-6xl  my-0 font-bold">
              You & Your Family
            </h2>
            <p className="text-xl pt-5 w-2/3 lg:w-full">
              Expound Teachings Master Builder of Human Happiness.
            </p>
            <button className="btn btn-info mt-5 text-white">Read More</button>
          </div>
        </div>
      </div> */}
      {/* Swiper Carousel */}
      <div>
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(
                  "http://st.ourhtmldemo.com/new/Life_Guide/images/slides/3.jpg"
                )`,
                backgroundSize: "cover",
                backgroundPosition: "center right",
              }}
            >
              <div className="container mx-auto py-20 lg:py-60 px-20 lg:px-0">
                <h2 className="text-2xl lg:text-6xl my-0">
                  Make a better life for
                </h2>
                <h2 className="text-2xl font-bold lg:text-6xl my-0">
                  You & Your Family
                </h2>
                <p className="text-xl pt-5 w-2/3 lg:w-full">
                  Expound Teachings Master Builder of Human Happiness.
                </p>
                <button className="btn btn-info mt-5 text-white">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(
                  "http://st.ourhtmldemo.com/new/Life_Guide/images/slides/2.jpg"
                )`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              // className="bg-contain lg:bg-cover"
            >
              <div className="container mx-auto py-20 lg:py-60">
                <div className="w-1/2 ml-auto">
                  {" "}
                  <h2 className="text-2xl lg:text-6xl my-0">
                    Make a better life for
                  </h2>
                  <h2 className="text-2xl font-bold lg:text-6xl my-0">
                    You & Your Family
                  </h2>
                  <p className="text-xl pt-5 w-2/3 lg:w-full">
                    Expound Teachings Master Builder of Human Happiness.
                  </p>
                  <button className="btn btn-info mt-5 text-white">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(
                  "http://st.ourhtmldemo.com/new/Life_Guide/images/slides/1.jpg"
                )`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="container mx-auto py-20 lg:py-60 px-20 lg:px-0">
                <h2 className="text-2xl lg:text-6xl my-0">
                  Make a better life for
                </h2>
                <h2 className="text-2xl font-bold lg:text-6xl my-0">
                  You & Your Family
                </h2>
                <p className="text-xl pt-5 w-2/3 lg:w-full">
                  Expound Teachings Master Builder of Human Happiness.
                </p>
                <button className="btn btn-info mt-5 text-white">
                  Read More
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
