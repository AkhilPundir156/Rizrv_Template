import React from "react";
import { GrCertificate } from "react-icons/gr";

const Whyus = (props) => {
  console.log(props.props.compdata.data.company_data.theme.content_title_status)
  return (
    <section className="pt-4">
      <p className="serv-head text-red text-center pt-4 ">Why Choose Us</p>
      <p className="serv-title text-4xl text-center font-bold text-gray-700 pt-2 pb-8">
        The<span className="text-red"> Service</span> That We Provide For Our
        Ultimate Clients
      </p>

      <div className="us-container w-4/5 flex flex-wrap m-auto ">
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
            <i className="text-5xl  ">
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
        </div>
      </div>
    </section>
  );
};

export default Whyus;
