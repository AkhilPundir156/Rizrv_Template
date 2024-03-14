import React, { useEffect } from "react";
import About from "./About";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Carousel from "./Carousel";
import Whyus from "./Whyus";

const Home = (props) => {
  // console.log(props)
  const title = props?.compdata?.data?.company_data?.theme?.content_title_status || 0;
  // console.log(props.compdata.data.company_data.theme.content_title_status)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Carousel />
      <About />
      <Services props={props} />{
      title && 
      <Whyus props={props} />}
      <Testimonial />
    </>
  );
};

export default Home;
