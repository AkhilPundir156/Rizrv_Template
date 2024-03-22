import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";

const Whyus = (props) => {
  const [compdata, setcompdata] = useState()
  const {ThemeData} = props
  console.log("this is theme",ThemeData)
  // console.log("this is whyus page",props.props.compdata.data.company_data.theme.content_title_status)
  
  useEffect(() => {
    const fetchData = async () => { 
      try {
        const url = window.location.hostname;
        const domainArray = url.split(".");
        console.log(domainArray);
        const subdomain = domainArray[0];
        // console.log(subdomain);

        if (subdomain) {
          const apiUrl = `https://apis.rizrv.in/api/company/front/news/${subdomain}`;

          const response = await axios.get(apiUrl);
          // console.log("this is why us page ",response.data.news);
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
    <section className="pt-4">
      <p className="serv-head text-red text-center pt-4 ">News</p>
      <p className="serv-title text-4xl text-center font-bold text-gray-700 pt-2 pb-8">
        The<span className="text-red"> Service</span> That We Provide For Our
        Ultimate Clients
      </p>

      <div className="us-container w-4/5 flex flex-wrap m-auto ">

        {
          compdata?.data?.news.map((item,index)=>{
            // <div>hey</div>
            if (index%2) {
              
             return  <div className="us-card m-auto  relative">
                <div className="us-left"></div>
                <div className="us-right"></div>
                {/* <div className="m-auto w-fit pt-5"> */}
                  {/* <i className="text-5xl  text-white ">
                    {" "}
                    <GrCertificate />{" "}
                  </i> */}
                {/* </div> */}
                {/* <div className="us-title text-center text-3xl text-white font-semibold">
                  Super easy {index}
                </div> */}
                <p className="text-center p-10 pt-4">
                  {item.title}
                </p>
                <img src={item.image} className="h-fit" alt="" />
              </div>
            }
            else{
             return  <div className="us-card-main  m-auto relative">
              {/* <div className="us-left-mid"></div>
              <div className="us-right-mid"></div> */}
              {/* <div className="m-auto w-fit pt-5">
                <i className="text-5xl  ">
                  {" "}
                  <GrCertificate />{" "}
                </i>
              </div> */}
              {/* <div className="us-title text-center text-3xl  font-semibold">
                Super easy
              </div> */}
              <p className="text-center p-10 pt-4 text-gray-700">
                {item.title}
              </p>
              <img src={item.image} alt="" />
            </div>

            }
          })
        }


        {/* <div className="us-card   m-auto  relative">
          <div className="us-left"></div>
          <div className="us-right"></div>
          <div className="m-auto w-fit pt-5">
            <i className="text-5xl  text-white ">
              {" "}
              <GrCertificate />{" "}
            </i>
          </div>
          <div className="us-title text-center text-3xl text-white font-semibold">
            Super easy
          </div>
          <p className="text-center p-10 pt-4">
            We are the best online CA consultation India services. We can make
            all processes simple and hassle-free. Our expert team makes it a
            point to provide all information to the clients.
          </p>
        </div>
        <div className="us-card-main  m-auto relative">
          <div className="us-left-mid"></div>
          <div className="us-right-mid"></div>
          <div className="m-auto w-fit pt-5">
            <i className="text-5xl   ">
              {" "}
              <GrCertificate />{" "}
            </i>
          </div>
          <div className="us-title text-center text-3xl  font-semibold">
            Super easy
          </div>
          <p className="text-center p-10 pt-4 text-gray-700">
            We are the best online CA consultation India services. We can make
            all processes simple and hassle-free. Our expert team makes it a
            point to provide all information to the clients.
          </p>
        </div>
        <div className="us-card   m-auto  relative">
          <div className="us-left"></div>
          <div className="us-right"></div>
          <div className="m-auto w-fit pt-5">
            <i className="text-5xl  text-white ">
              {" "}
              <GrCertificate />{" "}
            </i>
          </div>
          <div className="us-title text-center text-3xl text-white font-semibold">
            Super easy
          </div>
          <p className="text-center p-10 pt-4">
            We are the best online CA consultation India services. We can make
            all processes simple and hassle-free. Our expert team makes it a
            point to provide all information to the clients.
          </p>
        </div>
        <div className="us-card-main  m-auto relative">
          <div className="us-left-mid"></div>
          <div className="us-right-mid"></div>
          <div className="m-auto w-fit pt-5">
            <i className="text-5xl   ">
              {" "}
              <GrCertificate />{" "}
            </i>
          </div>
          <div className="us-title text-center text-3xl  font-semibold">
            Super easy
          </div>
          <p className="text-center p-10 pt-4 text-gray-700">
            We are the best online CA consultation India services. We can make
            all processes simple and hassle-free. Our expert team makes it a
            point to provide all information to the clients.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Whyus;
