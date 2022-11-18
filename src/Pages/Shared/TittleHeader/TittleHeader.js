import React from "react";
import "./TittleHeade.css";

const TittleHeader = ({ title }) => {
  return (
    <div
      className="py-40 breadcrumb__overlay"
      style={{
        backgroundImage: `url("http://st.ourhtmldemo.com/new/Life_Guide/images/resources/breadcrumb-bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl lg:text-5xl font-bold text-white z-10">
        {title}
      </h2>
    </div>
  );
};

export default TittleHeader;
