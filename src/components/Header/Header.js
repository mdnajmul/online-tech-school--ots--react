import { NavLink } from "react-router-dom";
import React from "react";
import {
  Container,
  Nav,
  Navbar,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faSearch,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faYoutube,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="d-flex justify-content-between top-nav">
        <div className="container me-5">
          <FontAwesomeIcon className="me-2" icon={faEnvelope} />
          <span role="button"> info@ots.com </span>
          <FontAwesomeIcon className="ms-5 me-2" icon={faPhoneAlt} />
          <span> +8801712345678 </span>
        </div>
        <div className="container">
          <span>
            Follow Us :{" "}
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
          <NavLink
            className="text-decoration-none ms-5 me-3 header-top-btn"
            to="/login"
          >
            Login
          </NavLink>
          <span className="header-top-btn me-3">/</span>
          <NavLink
            className="text-decoration-none header-top-btn"
            to="/register"
          >
            Register
          </NavLink>
        </div>
      </div>
      <div>
        <Navbar className="bg-lightgrey nav-menu-bg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="./logo.png"
                width="100"
                height="70"
                style={{ fontWeight: "bold" }}
                f-w
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Brand className="me-auto fw-bold nav-menu-clr">
              Online Tech School
            </Navbar.Brand>
            <InputGroup className="w-25 me-auto">
              <FormControl
                placeholder="type here to search"
                aria-label="type here to search"
                aria-describedby="search-btn"
              />
              <Button variant="outline-info" id="search-btn">
                <FontAwesomeIcon icon={faSearch} />
              </Button>
            </InputGroup>
            <Nav className="me-0 fw-bold">
              <NavLink
                className="text-decoration-none me-5 nav-menu-clr"
                to="/home"
                active
              >
                Home
              </NavLink>
              <NavLink
                className="text-decoration-none me-5 nav-menu-clr"
                to="/courses"
              >
                Courses
              </NavLink>
              <NavLink
                className="text-decoration-none me-5 nav-menu-clr"
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink className="text-decoration-none nav-menu-clr" to="/shop">
                Shop
              </NavLink>
            </Nav>
            <span className="text-warning fw-bold ms-3 mt-1">
              <FontAwesomeIcon
                className="cart-icon me-2"
                icon={faShoppingCart}
              ></FontAwesomeIcon>
              0
            </span>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
