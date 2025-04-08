import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed:3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };

const Banner = () => {
  return (
    <section>
    <div className='container'>
    <Slider {...settings}>
        <img
        src='https://img.lazcdn.com/us/domino/12dfcabb-afbb-4922-929e-2c0b8a53b20a_BD-1976-688.jpg_2200x2200q80.jpg'
        />
        <img
        src='https://img.lazcdn.com/us/domino/ab423127-58f4-46c0-af25-d0322123e09f_BD-1976-688.jpg_2200x2200q80.jpg'
        />
        <img
        src='https://img.lazcdn.com/us/domino/f9141d05-bb08-42e0-95d1-b02df5e67889_BD-1976-688.jpg_2200x2200q80.jpg'
        />
    </Slider>
    </div>
    </section>
    
  )
}

export default Banner
