import React, { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const AddReview = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const service = useLoaderData();
  console.log(service);

  console.log(service);
  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedBack = form.review.value;
    const rating = +form.rating.value || 5;
    if (feedBack === "") {
      toast.error("At least write few words");
    } else {
      const review = {
        serviceId: service._id,
        serviceName: service.title,
        displaName: user?.displayName,
        photoURL: user?.photoURL,
        rating: rating,
        review: feedBack,
        userEmail: user?.email,
      };
      console.log(review);
      fetch("http://localhost:4000/addreview", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(review),
      });
      toast.success("Added Succesfully");
      setTimeout(() => {
        navigate(`/services/${service._id}`);
      }, 2000);
    }
  };
  return (
    <div>
      <TittleHeader title={"Add a Review"}></TittleHeader>
      <div className="w-96 mx-auto my-24">
        <p className="font-bold ">{service.title}:</p>
        <Form onSubmit={handleReview}>
          <Form.TextArea
            label="Add Review"
            placeholder="Give a feedback about service"
            name="review"
          />
          <div className="rating">
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={1}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={2}
              defaultChecked
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={3}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={4}
            />
            <input
              type="radio"
              name="rating"
              className="mask mask-star-2 bg-orange-400"
              value={5}
            />
          </div>
          <br />
          <br />

          <Button className="" type="submit">
            Submit
          </Button>
        </Form>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    </div>
  );
};

export default AddReview;
