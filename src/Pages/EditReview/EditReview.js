import { Rating } from "@mui/material";
import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const EditReview = () => {
  const review = useLoaderData();
  const [value, setValue] = useState(review.rating);
  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    const form = event.target;
    const newReview = {
      review: form.review.value,
      rating: value,
    };
    fetch(`http://localhost:4000/editreview/${review._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => {
        toast.success("Updated");
        setTimeout(() => {
          navigate("/my-reviews");
        }, 2000);
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <TittleHeader title={"Edit Review"}></TittleHeader>
      <div className="w-96 mx-auto my-24">
        <p className="font-bold ">{review.serviceName}:</p>
        <Form onSubmit={handleEdit}>
          <Form.TextArea
            label="Edit Review"
            placeholder="Give a feedback about service"
            name="review"
            defaultValue={review.review}
          />

          <Rating
            name="rating"
            value={value}
            onChange={(event, newValue) => {
              event.preventDefault();
              setValue(newValue);
            }}
          />
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

export default EditReview;
