import React from "react";
import { Link } from "react-router-dom";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const Error = () => {
  return (
    <div>
      <TittleHeader title={"ERROR Page"}></TittleHeader>
      <div className="container mx-auto px-5 lg:px-0 my-24">
        <h2 className="text-9xl text-center"> 404</h2>
        <p className="font-bold text-center text-2xl">
          OOPPS! THE PAGE YOU WERE LOOKING FOR, COULDN'T BE FOUND.
        </p>
        <div className="text-center">
          <Link className="btn btn-info text-white" to="/">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
