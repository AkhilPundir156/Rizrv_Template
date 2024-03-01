import React from "react";
import startupimg from "../assets/startup-india-Registration.webp";
import { Link } from "react-router-dom";

const Services = ({props}) => {
  // console.log(props)
  const {data ,updatecate ,updateval,mainindex} = props
  // console.log(data[0].company_service)
  // console.log("these are props",props.data)
  return (
    <section className="services-section relative ">
      <div className="serv-triangle-topright"></div>
      <div className="serv-triangle-bottomright"></div>
      <p className="serv-head text-red text-center pt-4 ">Services</p>
      <p className="serv-title text-4xl text-center font-bold text-gray-700 pt-2 pb-8">
        Some Of Our <span className="text-red"> Service</span> Where We Achieve
        Great Success
      </p>
      {/* <div className="container"> */}

      <div className="serv-container w-4/5 m-auto">
        <div className="service-card-row   ">
          {data.map((item, index) => {
            // const alldata = item.company_service;
            if(mainindex == -1){

              return (
                item.company_service.map((items,idx)=>(
                  items.image && 
                <div className="service-card relative">
                <Link to={`/serv-details?${items.slug}`} onClick={()=>{updatecate(index);updateval(idx)}}>
                  <div className="card-left"></div>
                  <div className="card-right"></div>
                  <img src={items.image} alt={`Service ${index + 1}`} />
                  <p className="">{items.name} </p>
                </Link>
             </div>
                
                ))
                )
              }
              else{
                return (
                  index == mainindex &&
                  item.company_service.map((items,idx)=>(
                    items.image && 
                  <div className="service-card relative">
                  <Link to={`/serv-details?${items.slug}`} onClick={()=>{updatecate(index);updateval(idx)}}>
                    <div className="card-left"></div>
                    <div className="card-right"></div>
                    <img src={items.image} alt={`Service ${index + 1}`} />
                    <p className="">{items.name} </p>
                  </Link>
               </div>
                  
                  ))
                  )
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
