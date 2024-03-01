import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonial.css";
import myimg from "../assets/startup-india-Registration.webp";

const Testimonial = () => {
  const sliderRef = useRef(null); // Reference to the Slider component

  const CustomPrevArrow = () => {
    return (
      <button
        className="custom-prev-arrow"
        onClick={() => sliderRef.current.slickNext()}
      >
        <span>&#10094;</span> Previous
      </button>
    );
  };

  const CustomNextArrow = () => {
    return (
      <button
        className="custom-next-arrow"
        onClick={() => sliderRef.current.slickNext()}
      >
        Next <span>&#10095;</span>
      </button>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <section className="test-section pt-4 ">
      <div className="test-top relative   ">
        <div className="test-top-left"></div>
        <div className="test-top-right"></div>
        <div className="text-2xl p-4 pt-2 pb-2 ">Testimonials</div>
      </div>
      <div className="test-head">
        <p className="serv-title text-4xl text-center font-bold text-gray-700 pt-6 pb-3">
          See What Our Client's Say <span className="text-red"> Say </span>
          About Our Work
        </p>
        <p className="serv-title text-center text-lg text-gray-700 ">
          An outpour of appreciation for our promise of excellence. This is what{" "}
          <br />
          keeps us delivering only the best to all our customers.
        </p>
      </div>

      <div className="testimonial-container">
        <Slider ref={sliderRef} {...settings}>
          <div className="testimonial-item">
            <img src={myimg} alt="Testimonial Image 1" />
            <div>
              <span className="quote-sign">“</span>
              <p className="quote">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="testimonial-item">
            <img src={myimg} alt="Testimonial Image 2" />
            <div>
              <span className="quote-sign">“</span>
              <p className="quote">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          {/* Add more testimonial items as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
