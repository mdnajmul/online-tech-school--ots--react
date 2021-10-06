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
    <div>
      <secion className="container">
        <div>
          <div>
            <img
              src="./logo.png"
              width="100"
              height="70"
              style={{ fontWeight: "bold" }}
              f-w
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            <h1>Online Tech School</h1>
          </div>
          <p>
            Onlie Tech School is a lead online based school in Bangladesh.We
            provide quality content which help student to grow their skill.
          </p>
          <br />
          <span>
            <FontAwesomeIcon
              className="ms-2 me-1 font-icon fb-icon"
              icon={faFacebook}
            />{" "}
            <FontAwesomeIcon
              className="me-1 font-icon yt-icon"
              icon={faYoutube}
            />{" "}
            <FontAwesomeIcon
              className="me-1 font-icon tw-icon"
              icon={faTwitter}
            />{" "}
            <FontAwesomeIcon
              className="me-1 font-icon in-icon"
              icon={faInstagram}
            />{" "}
            <FontAwesomeIcon
              className="font-icon ln-icon"
              icon={faLinkedinIn}
            />
          </span>
        </div>
        <div>
          <div>
            <h1>Sitemap</h1>
          </div>
          <ul>
            <li>
              <Link to="/home">
                <FontAwesomeIcon icon={faAngleRight} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FontAwesomeIcon icon={faAngleRight} />
                About us
              </Link>
            </li>
            <li>
              <Link to="/courses">
                <FontAwesomeIcon icon={faAngleRight} />
                Courses
              </Link>
            </li>
            <li>
              <Link to="/news">
                <FontAwesomeIcon icon={faAngleRight} />
                News
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/news">
                <FontAwesomeIcon icon={faAngleRight} />
                Shop
              </Link>
            </li>
            <li>
              <Link to="/news">
                <FontAwesomeIcon icon={faAngleRight} />
                Teachers
              </Link>
            </li>
            <li>
              <Link to="/news">
                <FontAwesomeIcon icon={faAngleRight} />
                Support
              </Link>
            </li>
            <li>
              <Link to="/news">
                <FontAwesomeIcon icon={faAngleRight} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h1>Support</h1>
          </div>
          <ul>
            <li>
              <Link to="/faqs">
                <FontAwesomeIcon icon={faAngleRight} />
                FAQS
              </Link>
            </li>
            <li>
              <Link to="/privacy">
                <FontAwesomeIcon icon={faAngleRight} />
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/policy">
                <FontAwesomeIcon icon={faAngleRight} />
                Policy
              </Link>
            </li>
            <li>
              <Link to="/documentation">
                <FontAwesomeIcon icon={faAngleRight} />
                Documentation
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div>
            <h1>Contact Us</h1>
          </div>
          <ul>
            <li>
              <div>
                <FontAwesomeIcon icon={faHome} />
              </div>
              <div>
                <p>395 Gawair road, Dakhinkhan, Dhaka 1230, Bangladesh</p>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div>
                <p>+880 1712345678</p>
              </div>
            </li>
            <li>
              <div>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p>info@ots.com</p>
              </div>
            </li>
          </ul>
        </div>
      </secion>
    </div>
  );
};

export default Footer;
