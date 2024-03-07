import React from "react";
import foorterbg from "../assets/footer-bg.webp";
import "../styles/footer.css";
import { IoIosArrowForward, IoLogoFacebook } from "react-icons/io";
import {
  GrContact,
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrLocationPin,
  GrMail,
  GrPhone,
  GrTwitter,
  GrYoutube,
} from "react-icons/gr";
import { Link } from "react-router-dom";
import { BiLogoPlayStore } from "react-icons/bi";

const Footer = (props) => {
  const compdata = props?.compdata?.data?.company_data?.configs;
  //   console.log(compdata);

  return (
    <section className="footer relative  h-fit">
      <div className="footer-main pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap w-4/5 m-auto">
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <div className="footer-item">
                <div className="footer-logo">
                  <a href="index.aspx">
                    <img
                      src={compdata?.web_logo}
                      alt="Logo"
                      className="w-full pr-8"
                    />
                  </a>
                  <p className="text-white mt-4">{compdata?.about_company}</p>
                  <ul className="flex items-center mt-4">
                    {compdata?.facebook_status && (
                      <li>
                        <a href={compdata?.facebook_link} target="_blank">
                          <i className=" text-red">
                            <IoLogoFacebook className="mx-2 text-2xl text-red" />
                          </i>
                        </a>
                      </li>
                    )}
                    {compdata?.twitter_status && (
                      <li>
                        <a href={compdata?.twitter_link} target="_blank">
                          <i className="bx bxl-twitter text-current">
                            <GrTwitter className="mx-2 text-xl text-red" />
                          </i>
                        </a>
                      </li>
                    )}
                    {compdata?.linkedin_status && (
                      <li>
                        <a href={compdata?.linkedin_link} target="_blank">
                          <i className="bx bxl-linkedin text-current ">
                            <GrLinkedin className="mx-2 text-xl text-red" />
                          </i>
                        </a>
                      </li>
                    )}
                    {compdata?.instagram_status && (
                      <li>
                        <a href={compdata?.instagram_link} target="_blank">
                          <i className="bx bxl-instagram text-current">
                            <GrInstagram className=" mx-2 text-xl text-red " />
                          </i>
                        </a>
                      </li>
                    )}
                    {compdata?.play_store_status && (
                      <li>
                        <a href={compdata?.play_store_link} target="_blank">
                          <i className="bx bxl-youtube text-current">
                            <BiLogoPlayStore className=" mx-2 text-xl text-red " />
                          </i>
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <div className="footer-item">
                <div className="footer-link">
                  <h3 className="text-white">Important Links</h3>
                  <ul>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link to="/" className="text-white">
                        Home
                      </Link>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link to="/aboutus" className="text-white">
                        About Us
                      </Link>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link to="privacypolicy" className="text-white">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link to="termscond" className="text-white">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link to="cancellation" className="text-white">
                        Disclaimer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
              <div className="footer-item">
                <div className="footer-link">
                  <h3 className="text-white">Our Services</h3>
                  <ul>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link
                        to="serv-details/startup-usa-company-registration"
                        className="text-white"
                      >
                        Company Registration
                      </Link>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link
                        to="serv-details/goods-sevices-gst-registration"
                        className="text-white"
                      >
                        Gst Registration
                      </Link>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link
                        to="serv-details/income-tax-itr-1-return"
                        className="text-white"
                      >
                        ITR-1 Return
                      </Link>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link
                        to="serv-details/trademark-trademark-registration"
                        className="text-white"
                      >
                        Trademark Registration
                      </Link>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <IoIosArrowForward className="m-1" />
                      </i>
                      <Link
                        to="serv-details/compliance-llp-compliance"
                        className="text-white"
                      >
                        Compliance
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4">
              <div className="footer-item">
                <div className="footer-contact">
                  <h3 className="text-white text-2xl font-bold">
                    Contact Info
                  </h3>
                  <ul>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <GrLocationPin className="m-1 text-red" />
                      </i>
                      <span className="text-white">
                        {compdata?.company_address}
                      </span>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <GrPhone className="m-1" />
                      </i>
                      <a href="tel:+91-8588808388" className="text-white">
                        +91-{compdata?.company_phone}
                      </a>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <GrMail className="m-1" />
                      </i>
                      <a href="mailto:info@legaldev.in" className="text-white">
                        <span>{compdata?.company_email}</span>
                      </a>
                    </li>
                    <li className="flex relative ">
                      <i className="relative">
                        {" "}
                        <GrContact className="m-1" />
                      </i>
                      <Link to={"/contact"} className="text-white">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="footer-bottom w-4/5 m-auto text-white p-6  pt-3 ">
        Legal Dev is a part of LegalDev Tax India Private Limited Which is registered under the Companies Act, 2013, recognized by the Govt. of India. Corporate Identity Number U69202UT2023PTC016183
<br />
Disclaimer: A Portal is owned and operated by A Private Consultancy Firm and in no way represent any relation with any Government Authority or Body. We just to collect information from our clients so that our expert can easily understand their business or needs. By proceeding forward with this website you are aware that we are a private company managing this website and providing assistance based on the request from our customers and the fee collected in this website is a consultancy fee.
        </div> */}

      <div class="copyright-area ">
        <div class="container">
          <p>© Copyright {compdata?.copyright}</p>
        </div>
      </div>
      <div className="footer-img absolute top-0 -z-10">
        <img className="footer-img -z-10" src={foorterbg} alt="" />
      </div>
    </section>
  );
};

export default Footer;
