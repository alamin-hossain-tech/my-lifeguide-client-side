import { IconButton, Tooltip } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";
import { TbEdit } from "react-icons/tb";
import { FiDelete } from "react-icons/fi";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import TabTitle from "../../Utility/General";

const MyReviews = () => {
  TabTitle("My Reviews");
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

  let count = 0;
  useEffect(() => {
    fetch(
      `https://my-life-guide-server.vercel.app/userreviews/${user?.email}`,
      {
        headers: {
          authorization: ` Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          handleLogout();
        }
        return res.json();
      })
      .then((data) => {
        setReviews(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure want to delete?")) {
      fetch(`https://my-life-guide-server.vercel.app/review/delete/${id}`, {
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
                {reviews.length > 0 &&
                  reviews.map((review) => (
                    <React.Fragment key={review._id}>
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
                    </React.Fragment>
                  ))}

                {/* <!-- row 2 --> */}
              </tbody>
            </table>
            {reviews.length === 0 && (
              <h2 className="text-center py-8"> No reviews were added</h2>
            )}
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
      </div>
    </div>
  );
};

export default MyReviews;
