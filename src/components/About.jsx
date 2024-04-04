import React, { useEffect, useState } from "react";
import about1 from "../assets/about1.webp";
import about2 from "../assets/about2.webp";
import about3 from "../assets/about3.webp";
import axios from "axios";

const About = (props) => {
  const [Data, setData] = useState("");
  const {ThemeData} = props;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/front/pages/data/${subdomain}`;

          const response = await axios.get(apiUrl);
          setData(response.data.data.about_us);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();

    // console.log(Data)
  }, []);

  useEffect(() => window.scroll({ top: 0, behavior: "smooth" }), []);

  return (
    <section className="about-section h-fit mt-8 ">
      <div className="triangle-topright"></div>
      <div className="triangle-bottomright"></div>

      <div className="flex about-flex">
        <div className="about-first  -mt-10">
          <div dangerouslySetInnerHTML={{ __html: Data }}></div>
        </div>

        {/* <div className="about-first " >
          <p className="text-red pb-3">About</p>
          <p className="text-3xl pl-4 font-bold text-gray-700 pb-4">
            All Chartered Accountant (CA) & Business legal Service Provider
          </p>
          <p className="pb-4">
            We are living in a modern and technology-driven world. Most of us
            require quick and prompt solutions to ensure our legal and tax
            filing needs becomes satisfied. Navigating through complex processes
            can make you feel frustrated. Get the Business Assistance Services
            online from Legal Dev to address issues that can cause hurdles to
            your business. With our expert guidance, you can complete various
            operations like incorporation, government registrations, accounting,
            filings, annual compliances, and documentation. We offer different
            services under our online chartered accountant services. When you
            choose our platform, we assure you to provide customized solutions
            with a few clicks. We are the best Business Assistance Services in
            India meeting your legal and professional requirements.
          </p> 

           <button
            type="button"
             class="text-white bg-red hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
         >
            Explore About us 
           </button>
          </div> */}

        <div className="about-second  ">
          <div class="grid grid-cols-2 gap-4 about-items ">
            <div class="col-span-2 lg:col-span-1">
              <img src={about1} alt="Image1" class="w-full" />
            </div>
            <div class="lg:col-span-1">
              <img src={about2} alt="Image 2" class="w-full -mt-8" />
            </div>
            <div class="lg:col-span-2">
              <img src={about3} alt="Image 3" class="w-full" />
            </div>
          </div>
          <div className="years bg-current text-red ">
            <div className="year-border ">
              <h2 className="text-3xl">3+</h2>
              <p className="text-xl">years</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
