import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import busimg from "../assets/bus-img.jpg";
import axios from "axios";

function htmlToText(html) {
  return html.replace(/<[^>]+>/g, "");
}

const Carousel = () => {
  const [compdata, setcompdata] = useState();

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/setup/info/${subdomain}`;

          const response = await axios.get(apiUrl);

          setcompdata(response?.data?.company_data?.theme);
        } else {
          console.error("Domain not found in the URL.");
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <Slider {...settings} className="caro  max-w-full">
      {compdata?.theme_data?.map(
        (item, index) =>
          item.type === "slider_one" && (
            <div className="caro-item cursor-grab relative  w-3/4  ">
              <img
                src={item.media}
                className="w-full  opacity-50 object-cover"
                alt="Image 1"
              />
              <div className="carousel-overlay absolute  w-full bottom-10 text-center">
                <h1
                  className={`pb-4 px-8 text-5xl font-bold text-${compdata?.title_color}`}
                >
                  {htmlToText(item.text)}
                </h1>
                {/* <a href="#" className=" text-2xl">
              <button
                type="button"
                class="text-white bg-red hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Link {index}
              </button>
            </a> */}
              </div>

              <div className="caro-triangle-topright"></div>
              <div className="caro-triangle-bottomright"></div>
            </div>
          )
      )}
      {/* <div className="caro-item cursor-grab relative  w-3/4  ">
        <img
          src={busimg}
          className="w-full  opacity-50 object-cover"
          alt="Image 1"
        />
        <div className="carousel-overlay absolute  w-full top-20 text-center">
          <h1 className=" pb-4 text-5xl font-bold text-gray-700">
            India's Trusted legal Business service platform
          </h1>
          <a href="#" className=" text-2xl">
            <button
              type="button"
              class="text-white bg-red hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Link 1
            </button>
          </a>
        </div>

        <div className="caro-triangle-topright"></div>
        <div className="caro-triangle-bottomright"></div>
      </div>
      <div className="caro-item cursor-grab relative  w-3/4  ">
        <img
          src={busimg}
          className="w-full  opacity-50 object-cover"
          alt="Image 1"
        />
        <div className="carousel-overlay absolute  w-full top-20 text-center">
          <h1 className=" pb-4 text-5xl font-bold text-gray-700">
            India's Trusted legal Business service platform
          </h1>
          <a href="#" className=" text-2xl">
            <button
              type="button"
              class="text-white bg-red hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Link 1
            </button>
          </a>
        </div>

        <div className="caro-triangle-topright"></div>
        <div className="caro-triangle-bottomright"></div>
      </div>
      <div className="caro-item cursor-grab relative  w-3/4  ">
        <img
          src={busimg}
          className="w-full  opacity-50 object-cover"
          alt="Image 1"
        />
        <div className="carousel-overlay absolute  w-full top-20 text-center">
          <h1 className=" pb-4 text-5xl font-bold text-gray-700">
            India's Trusted legal Business service platform
          </h1>
          <a href="#" className=" text-2xl">
            <button
              type="button"
              class="text-white bg-red hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            >
              Link 1
            </button>
          </a>
        </div>

        <div className="caro-triangle-topright"></div>
        <div className="caro-triangle-bottomright"></div>
      </div> */}
    </Slider>
  );
};

export default Carousel;
