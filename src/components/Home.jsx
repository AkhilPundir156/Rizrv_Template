import React, { useEffect } from 'react'
import About from './About'
import Testimonial from './Testimonial'
import Services from './Services'
import Carousel from './Carousel'
import Whyus from './Whyus'

const Home = (props) => {
  useEffect(() => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    });
    
  }, []);
  return (
    <>
    <Carousel />
    <About />
    <Services props={props} />
    <Whyus />
    <Testimonial />
    </>
  )
}

export default Home