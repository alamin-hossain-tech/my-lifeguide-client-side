import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import logo from "../../../Assets/Logo/logo-main.png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Footer = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    if (window.confirm("Are you sure want to logout?")) {
      logOut()
        .then(() => {
          toast.warn("Logout Success");
        })
        .catch((error) => console.error(error));
    }
  };
  return (
    <div className="bg-base-200">
      <footer className="footer p-10 container mx-auto text-base-content">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <span className="footer-title">Visit Us</span>
          425 Cowly Brown Road <br /> Apartment 4C, New York 10013, USA.
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link to="/" className="link link-hover">
            Home
          </Link>
          <Link to="/services" className="link link-hover">
            Services
          </Link>
          <Link to="/blog" className="link link-hover">
            Blog
          </Link>
          {user ? (
            <Link onClick={handleLogOut} className="link link-hover">
              Logout
            </Link>
          ) : (
            <Link to="/login" className="link link-hover">
              Login
            </Link>
          )}
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link link-hover">Terms of use</Link>
          <Link className="link link-hover">Privacy policy</Link>
          <Link className="link link-hover">Cookie policy</Link>
        </div>
      </footer>
      <div className="text-center py-6 bg-dark-c text-white">
        Copyright © 2022 My Lifeguide. All Rights Reserved.
      </div>
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
  );
};

export default Footer;
