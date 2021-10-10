import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="./slider/slider-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className="text-info fw-bold">HTML</h3>
          <p className="text-white text-start">
            The HyperText Markup Language, or HTML is the standard markup
            language for documents designed to be displayed in a web browser. It
            can be assisted by technologies such as Cascading Style Sheets and
            scripting languages such as JavaScript.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="./slider/slider-2.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-info fw-bold">JavaScript</h3>
          <p>
            JavaScript is the world's most popular programming language.
            JavaScript is the programming language of the Web. JavaScript is
            easy to learn.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="./slider/slider-3.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className="text-info fw-bold">Bootstrap</h3>
          <p className="text-start">
            Bootstrap is a free front-end framework for faster and easier web
            development.Bootstrap includes HTML and CSS based design templates
            for typography, forms, buttons, tables, navigation, modals, image
            carousels and many other, as well as optional JavaScript
            plugins.Bootstrap also gives you the ability to easily create
            responsive designs
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="./slider/slider-4.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-warning fw-bold">NodeJS</h3>
          <p>
            Node.js is an open source server environment.It allows you to run
            JavaScript on the server.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{ height: "500px" }}
          src="./slider/slider-5.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className="text-danger fw-bold">ReactJs</h3>
          <p className="text-warning">
            React is a JavaScript library for building user interfaces.It is
            used to build single-page applications.It allows us to create
            reusable UI components.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
