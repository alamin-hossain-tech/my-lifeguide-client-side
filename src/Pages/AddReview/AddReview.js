import React, { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import TabTitle from "../../Utility/General";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";

const AddReview = () => {
  TabTitle("Add Review");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const service = useLoaderData();

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
        publishedTime: new Date().getTime(),
      };

      fetch("https://my-life-guide-server.vercel.app/addreview", {
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

          <div className="flex gap-3">
            <Button className="" type="submit">
              Submit
            </Button>
            <Link
              to={`/services/${service._id}`}
              className="btn btn-error text-white hover:text-white hover:bg-opacity-75"
            >
              Cancel
            </Link>
          </div>
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
