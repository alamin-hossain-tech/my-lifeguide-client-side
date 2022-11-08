import React from "react";
import logo from "../../../Assets/Logo/logo.png";

const Footer = () => {
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
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <div className="text-center py-6 bg-dark-c text-white">
        Copyright © 2022 My Lifeguide. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
