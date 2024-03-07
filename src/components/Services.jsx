import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Services = ({ props }) => {
  const { data, updatecate, updateval, mainindex, category } = props;
  const [Data, setData] = useState("");

  const defaultimg = "https://resrv.in/assets/img/placeholder.png";

  useEffect(() => {
    // console.log(category)
    const fetchcatedata = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/web/${subdomain}/${category}`;
          const response = await axios.get(apiUrl);
          // console.log(response.data.ca_services)
          setData(response.data.ca_services);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchcatedata();
  }, [category]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/front/featured/service/${subdomain}`;

          const response = await axios.get(apiUrl);
          setData(response.data.featured_service);
          // console.log(response.data.featured_service)
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();

    // console.log(Data)
  }, []);

  return (
    <section className="services-section relative ">
      <div className="serv-triangle-topright"></div>
      <div className="serv-triangle-bottomright"></div>
      <p className="serv-head text-red text-center pt-4 ">Services</p>
      <p className="serv-title text-4xl text-center font-bold text-gray-700 pt-2 pb-8">
        Some Of Our <span className="text-red"> Service</span> Where We Achieve
        Great Success
      </p>

      <div className="serv-container w-4/5 m-auto">
        <div className="service-card-row ">
          {Data &&
            Data?.map((item, index) => {
              // console.log(item)
              // const alldata = item.company_service;
              if (mainindex == -1) {
                return (
                  // item.company_service.map((items,idx)=>(
                  //   items.image &&
                  <div className="service-card relative">
                    <Link to={`/serv-details/${item.slug}`}>
                      <div className="card-left"></div>
                      <div className="card-right"></div>
                      <img
                        src={item.image || defaultimg}
                        alt={`Service ${index + 1}`}
                      />
                      <p className="">{item.name} </p>
                    </Link>
                  </div>

                  // ))
                );
              } else {
                return (
                  index == mainindex &&
                  item.company_service.map(
                    (items, idx) =>
                      items.image && (
                        <div className="service-card relative">
                          <Link to={`/serv-details/${items.slug}`}>
                            <div className="card-left"></div>
                            <div className="card-right"></div>
                            <img
                              src={items.image}
                              alt={`Service ${index + 1}`}
                            />
                            <p className="">{items.name} </p>
                          </Link>
                        </div>
                      )
                  )
                );
              }
            })}
          {/* Here is the above card template to show the data */}
          {/* <div className="service-card relative">
          <Link to='/serv-details'>
            <div className="card-left"></div>
            <div className="card-right"></div>
            <img src={startupimg} alt="Service 1" />
            <p className="">Text below service 1</p>
          </Link>
          </div> */}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Services;
