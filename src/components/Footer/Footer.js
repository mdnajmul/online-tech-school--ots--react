import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleRight,
  faHome,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer-part">
      <div className="footer-top mt-5 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="logo d-flex mb-4">
                <img
                  src="./logo.png"
                  width="100"
                  height="70"
                  className="d-inline-block align-top fw-bold text-white"
                  alt="React Bootstrap logo"
                />
                <h1 className="text-white fw-bold fs-3 pt-3">
                  Online Tech School
                </h1>
              </div>
              <p className="text-start text-white fw-normal lh-lg pt-2">
                Onlie Tech School is a lead online based school in Bangladesh.We
                provide quality content which help student to grow their skill.
              </p>
              <p className="text-start">
                <FontAwesomeIcon
                  className="me-1 font-icon fb-icon fs-3"
                  icon={faFacebook}
                />{" "}
                <FontAwesomeIcon
                  className="me-1 font-icon yt-icon fs-3"
                  icon={faYoutube}
                />{" "}
                <FontAwesomeIcon
                  className="me-1 font-icon tw-icon fs-3"
                  icon={faTwitter}
                />{" "}
                <FontAwesomeIcon
                  className="me-1 font-icon in-icon fs-3"
                  icon={faInstagram}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon ln-icon fs-3"
                  icon={faLinkedinIn}
                />
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer-link">
                <div className="footer-title me-5 mb-5 mt-3">
                  <h1 className="text-white fw-bold fs-2">Sitemap</h1>
                </div>
                <div className="d-flex justify-content-between ms-3">
                  <ul className="text-start">
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/home"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Home</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/about"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">About us</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/courses"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Courses</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/news"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">News</span>
                      </Link>
                    </li>
                  </ul>
                  <ul className="text-start">
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/news"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Shop</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/news"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Teachers</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/news"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Support</span>
                      </Link>
                    </li>
                    <li className="lh-lg">
                      <Link
                        className="text-decoration-none text-white"
                        to="/news"
                      >
                        <FontAwesomeIcon
                          className="font-arrow"
                          icon={faAngleRight}
                        />
                        <span className="footer-hover-clr">Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="footer-link">
                <div className="footer-title ms-4 mb-5 mt-3">
                  <h1 className="text-white fw-bold fs-2">Support</h1>
                </div>
                <ul className="text-start ms-1">
                  <li className="lh-lg">
                    <Link
                      className="text-decoration-none text-white"
                      to="/faqs"
                    >
                      <FontAwesomeIcon
                        className="font-arrow"
                        icon={faAngleRight}
                      />
                      <span className="footer-hover-clr">FAQS</span>
                    </Link>
                  </li>
                  <li className="lh-lg">
                    <Link
                      className="text-decoration-none text-white"
                      to="/privacy"
                    >
                      <FontAwesomeIcon
                        className="font-arrow"
                        icon={faAngleRight}
                      />
                      <span className="footer-hover-clr">Privacy</span>
                    </Link>
                  </li>
                  <li className="lh-lg">
                    <Link
                      className="text-decoration-none text-white"
                      to="/policy"
                    >
                      <FontAwesomeIcon
                        className="font-arrow"
                        icon={faAngleRight}
                      />
                      <span className="footer-hover-clr">Policy</span>
                    </Link>
                  </li>
                  <li className="lh-lg">
                    <Link
                      className="text-decoration-none text-white"
                      to="/documentation"
                    >
                      <FontAwesomeIcon
                        className="font-arrow"
                        icon={faAngleRight}
                      />
                      <span className="footer-hover-clr">Documentation</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="footer-address">
                <div className="footer-title mb-5 mt-3">
                  <h1 className="text-white fw-bold fs-2">Contact Us</h1>
                </div>
                <ul className="ms-3">
                  <li className="d-flex">
                    <div className="font-arrow">
                      <FontAwesomeIcon icon={faHome} />
                    </div>
                    <div>
                      <p className="text-start">
                        395 Gawair road, Dakhinkhan, Dhaka 1230, Bangladesh
                      </p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="font-arrow">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </div>
                    <div>
                      <p className="text-start">+880 1712345678</p>
                    </div>
                  </li>
                  <li className="d-flex">
                    <div className="font-arrow">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div>
                      <p className="text-start">info@ots.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container d-flex justify-content-between pt-4 pb-3">
          <p className="text-white fw-bold">
            &copy; Copyrights {new Date().getFullYear()} Online Tech School All
            rights reserved.
          </p>
          <p className="text-white fw-bold">Designed by najmulovi</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
