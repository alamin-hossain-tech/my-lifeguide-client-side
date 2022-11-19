import { IconButton, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";
import { TbEdit } from "react-icons/tb";
import { FiDelete } from "react-icons/fi";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  let count = 0;
  useEffect(() => {
    fetch(`http://localhost:4000/userreviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [user]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      fetch(`http://localhost:4000/review/delete/${id}`, {
        method: "POST",
        headers: {
          "content-type": "aplication/json",
        },
        body: JSON.stringify(id),
      })
        .then((res) => {
          setReviews(reviews.filter((review) => review._id !== id));
          toast.success("Deleted");
        })
        .catch((err) => console.error(err));
    }
  };

  return (
    <div>
      <TittleHeader title={"My Reviews"}></TittleHeader>
      <div className="container mx-auto my-24 shadow">
        <div></div>
        <div>
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>Service Name</th>
                  <th>Review</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <>
                      <tr>
                        <th>{(count = count + 1)}</th>
                        <td>{review.serviceName}</td>
                        <td>{review.review}</td>
                        <td>
                          <Link to={`/review/edit/${review._id}`}>
                            <Tooltip title="Edit">
                              <IconButton>
                                <TbEdit className="inline text-xl"></TbEdit>
                              </IconButton>
                            </Tooltip>
                          </Link>
                          <Tooltip title="Delete">
                            <IconButton
                              onClick={() => handleDelete(review._id)}
                            >
                              <FiDelete className="inline text-xl"></FiDelete>
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    </>
                  ))
                ) : (
                  <th>
                    <p className="py-24">You didn't add any review yet</p>
                  </th>
                )}

                {/* <!-- row 2 --> */}
              </tbody>
            </table>
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
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box relative">
                <label
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle absolute right-2 top-2"
                >
                  ✕
                </label>
                <h3 className="text-lg font-bold">
                  Congratulations random Internet user!
                </h3>
                <p className="py-4">
                  You've been selected for a chance to get one year of
                  subscription to use Wikipedia for free!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
