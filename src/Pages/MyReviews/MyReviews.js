import {
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import TittleHeader from "../Shared/TittleHeader/TittleHeader";
import { TbEdit } from "react-icons/tb";
import { FiDelete } from "react-icons/fi";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  console.log(user.email);
  let count = 0;
  useEffect(() => {
    fetch(`http://localhost:4000/userreviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.log(err));
  }, [user]);
  console.log(reviews);
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
                {reviews.map((review) => (
                  <>
                    <tr>
                      <th>{(count = count + 1)}</th>
                      <td>Not yet</td>
                      <td>{review.review}</td>
                      <td>
                        <Tooltip title="Edit">
                          <IconButton onClick={() => console.log(review._id)}>
                            <TbEdit className="inline text-xl"></TbEdit>
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton>
                            <FiDelete className="inline text-xl"></FiDelete>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  </>
                ))}

                {/* <!-- row 2 --> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
