import React from "react";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div class="container">
      <div>
        <h2 className="mt-3">About Us</h2>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to="/" className="text-decoration-none">
                Home
              </NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default AboutUs;
