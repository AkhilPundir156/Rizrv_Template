import React from 'react'
import foorterbg from "../assets/footer-bg.webp"
import "../styles/footer.css"
import { IoIosArrowForward } from "react-icons/io";
import { GrContact, GrLocationPin, GrMail, GrPhone } from 'react-icons/gr';
import { Link } from 'react-router-dom';




const Footer = () => {
  return (
    <section className='footer relative  h-fit'>
        <div className="footer-main">
        <div className="container mx-auto px-4">
                <div className="flex flex-wrap w-4/5 m-auto">
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <div className="footer-item">
                            <div className="footer-logo">
                                <a href="index.aspx">
                                    <img src="assets/img/logo-two.webp" alt="Logo" className="w-32" />
                                </a>
                                <p className="text-white mt-4">Legal Dev is wide range of CA & CS services we offer for your Business Legal Advisor.</p>
                                <ul className="flex items-center mt-4">
                                    <li><a href="https://www.facebook.com/legaldevin" target="_blank"><i className="bx bxl-facebook text-white"></i></a></li>
                                    <li><a href="https://twitter.com/LegalDevindia" target="_blank"><i className="bx bxl-twitter text-current"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/legaldev/" target="_blank"><i className="bx bxl-linkedin text-current"></i></a></li>
                                    <li><a href="https://www.instagram.com/legaldevindia/" target="_blank"><i className="bx bxl-instagram text-current"></i></a></li>
                                    <li><a href="https://www.youtube.com/@legaldevind" target="_blank"><i className="bx bxl-youtube text-current"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <div className="footer-item">
                            <div className="footer-link">
                                <h3 className="text-white">Important Links</h3>
                                <ul>
                                    <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to='/' className="text-white">Home</Link></li>
                                    <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to='/aboutus' className="text-white">About Us</Link></li>
                                    <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to="privacypolicy" className="text-white">Privacy Policy</Link></li>
                                    <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to="termscond" className="text-white">Terms & Conditions</Link></li>
                                    <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to="cancellation" className="text-white">Refund & Cancellation</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4 mb-8 md:mb-0">
                        <div className="footer-item">
                            <div className="footer-link">
                                <h3 className="text-white">Our Services</h3>
                                <ul>
                                <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to='/serv-details' className="text-white">Company Registration</Link></li>
                                <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to='/serv-details' className="text-white">Gst Registration</Link></li>
                                <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to='/serv-details' className="text-white">ITR Return</Link></li>
                                <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to='/serv-details' className="text-white">Trademark Registration</Link></li>
                                <li className='flex relative '><i className='relative'> <IoIosArrowForward className='m-1' /></i><Link to='/serv-details' className="text-white">Compliance</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <div className="footer-item">
                            <div className="footer-contact">
                                <h3 className="text-white text-2xl font-bold">Contact Info</h3>
                                <ul>
                                <li className='flex relative '><i className='relative'> <GrLocationPin className='m-1 text-red' /></i><span className="text-white">56, Vivek Vihar Colony, Ranipur More, Haridwar, Uttarakhand, India, 249407</span></li>
                                <li className='flex relative '><i className='relative'> <GrPhone className='m-1' /></i><a href="tel:+91-8588808388" className="text-white">+91-8588808388</a></li>
                                <li className='flex relative '><i className='relative'> <GrMail className='m-1' /></i><a href="mailto:info@legaldev.in" className="text-white"><span>info@legaldev.in </span></a></li>
                                <li className='flex relative '><i className='relative'> <GrContact className='m-1' /></i><Link to={'/contact'} className="text-white">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="footer-bottom w-4/5 m-auto text-white p-6  pt-3 ">
        Legal Dev is a part of LegalDev Tax India Private Limited Which is registered under the Companies Act, 2013, recognized by the Govt. of India. Corporate Identity Number U69202UT2023PTC016183
<br />
Disclaimer: A Portal is owned and operated by A Private Consultancy Firm and in no way represent any relation with any Government Authority or Body. We just to collect information from our clients so that our expert can easily understand their business or needs. By proceeding forward with this website you are aware that we are a private company managing this website and providing assistance based on the request from our customers and the fee collected in this website is a consultancy fee.
        </div>

        <div class="copyright-area">
                <div class="container">
                    <p>© Copyright Legal Dev. All rights reserved.</p>
                </div>
            </div>
        <div className="footer-img absolute top-0 -z-10">
            <img className='footer-img -z-10' src={foorterbg} alt="" />
        </div>
    </section>
  )
}

export default Footer