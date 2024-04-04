import React, { useEffect, useState } from "react";
import About from "./About";
import Testimonial from "./Testimonial";
import Services from "./Services";
import Carousel from "./Carousel";
import Whyus from "./Whyus";

const Home = (props) => {
  // console.log("this is home props", props);
  const { ThemeData } = props;
  // console.log("this is home props", ThemeData);
  const title =
    props?.compdata?.data?.company_data?.theme?.content_title_status || 0;
  // console.log(props.compdata.data.company_data.theme.content_title_status)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Carousel ThemeData={ThemeData} />
      <About ThemeData={ThemeData} />
      <Services props={props} />
      {title && <Whyus ThemeData={ThemeData} />}
      <Testimonial ThemeData={ThemeData} />
    </>
  );
};

export default Home;
