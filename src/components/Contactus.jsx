import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import { IoMdTimer } from "react-icons/io";

const ContactForm = () => {
  const [compdata, setcompdata] = useState();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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
          console.log(response);
          setcompdata(response);
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
    <section className="mb-10">
      <h2 className="text-3xl font-bold text-center pt-6 pb-6">Get In Touch</h2>

      <div className="contact-main flex flex-wrap justify-center items-center">
        <div className="w-1/2 contact-first  bg-contact bg-opacity-25 p-10 mr-5">
          <form id="contactForm " className="w-full" noValidate>
            <div className="contact-details-add flex flex-wrap justify-around pt-6 ">
              <div className="wid w-2/5">
                <div className="form-group">
                  <input
                    type="text"
                    id="txtName"
                    className="form-control w-full m-2 p-3 focus:outline-none"
                    placeholder="Enter Name"
                  />
                  <span className="text-danger hidden" id="rfvName">
                    {" "}
                    Enter Name
                  </span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="wid w-2/5 ">
                <div className="form-group">
                  <input
                    type="text"
                    id="txtName"
                    className="form-control w-full m-2 ml-0 p-3 focus:outline-none"
                    placeholder="Enter Mobile No."
                  />
                  <span className="text-danger hidden" id="rfvName">
                    {" "}
                    Enter Mobile No.
                  </span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="wid w-2/5 ">
                <div className="form-group">
                  <input
                    type="text"
                    id="txtName"
                    className="form-control w-full m-2 p-3 focus:outline-none"
                    placeholder="Enter E-Mail Id"
                  />
                  <span className="text-danger hidden" id="rfvName">
                    {" "}
                    Enter E-Mail Id
                  </span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
              <div className="wid w-2/5 ">
                <div className="form-group">
                  <input
                    type="text"
                    id="txtName"
                    className="form-control w-full m-2 ml-0 p-3 focus:outline-none"
                    placeholder="Select Services"
                  />
                  <span className="text-danger hidden" id="rfvName">
                    {" "}
                    Select Services{" "}
                  </span>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full pt-6 ">
              <div className="w-full flex ">
                <div className="form-group  w-[89%] m-auto">
                  <textarea
                    id="txtDescription"
                    rows="5"
                    className="form-control w-full ml-1  col-span-full p-3 focus:outline-none"
                    placeholder="Describe Your Requirement"
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
              </div>
            </div>
            <div className="flex w-fit m-auto bg-red py-2 px-6 mt-4">
              <div className=""></div>
              <div className="">
                <input
                  type="submit"
                  value="Submit"
                  id="btnSubmit"
                  className="btn btn-danger"
                  style={{ pointerEvents: "all", cursor: "pointer" }}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="w-fit contact-second ">
          <div className="contact-info bg-contact bg-opacity-25 p-10">
            <h3 className="text-2xl font-semibold">Contact Info</h3>
            <ul>
              <li className="flex p-2 relative">
                <i className="text-red text-xl absolute pt-1">
                  <HiLocationMarker />{" "}
                </i>
                <p className="pl-7">
                  {compdata?.data?.company_data?.configs?.company_address}
                  <br />
                  {compdata?.data?.company_data?.configs?.country}
                </p>
              </li>
              <li className="flex p-2 ">
                <i className="text-red text-xl absolute pt-1">
                  {" "}
                  <HiPhone />{" "}
                </i>
                <a
                  href={compdata?.data?.company_data?.configs?.company_phone}
                  className="pl-7"
                >
                  +91-{compdata?.data?.company_data?.configs?.company_phone}
                </a>
              </li>
              <li className="flex p-2">
                <i className="text-red text-xl absolute pt-1">
                  {" "}
                  <HiMail />{" "}
                </i>
                <a
                  href={`${compdata?.data?.company_data?.configs?.company_email}`}
                  className="pl-7"
                >
                  {compdata?.data?.company_data?.configs?.company_email}
                </a>
              </li>
            </ul>
            <br />
            <h3 className="text-2xl font-semibold">Office Timing</h3>
            <ul>
              <li className="flex">
                <i className="text-red text-xl absolute pt-1">
                  {" "}
                  <IoMdTimer />
                </i>{" "}
                <p className="pl-7">
                  Monday to Saturday: 9:00AM to 7:00PM <br />
                  Sunday: Closed
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
