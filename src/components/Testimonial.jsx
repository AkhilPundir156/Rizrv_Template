import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Testimonial.css";
import axios from "axios";

const Testimonial = () => {
  const sliderRef = useRef(null); // Reference to the Slider component
  const [Data, setData] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/front/testimonials/${subdomain}`;
          
          const response = await axios.get(apiUrl);

          // console.log("this is response ",response.data.data)
          setData(response.data.data)
        } else {
          console.error("Domain not found in the URL.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

     fetchData();
    //  console.log("this is data",Data)
  }, [])
  


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

  return ( Data &&
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
          {
            Data.map((item,index)=>(
              
          <div className="testimonial-item">
            <img src={item.image} alt="Testimonial Image 1" />
            <div>
              {/* <span className="quote-sign">“</span> */}
              <p className="quote">
                <div className="text-2xl font-bold">{item.name} </div>
                <div className="text-xl">{item.designation}</div>
               <br/>
               {item.description} 

              </p>
            </div>
          </div>
            ))
          }
          {/* Add more testimonial items as needed */}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
