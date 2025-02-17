import React, { useState } from 'react';
import { Carousel } from 'antd';
import All_Data_Context from '../All_Data/All_Data_Context';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";




const Slider = () => {
    const slider_Data = React.useContext(All_Data_Context);
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
      useEffect(() => {
        AOS.init({
          duration: 1000, 
          infinite: true, 
          easing: "ease-in-out", 
          once: false, 
          mirror: true,
        });
      }, []);
      const [sliderData, setSliderData] = useState([]);

      useEffect(() => {
        setSliderData(slider_Data.slider);
      }, []);
      console.log(slider_Data.slider.img)
  return (
    <div className=''>
        <Carousel autoplay className='' >
        {sliderData.map((item) => (
            <div key={item.id}>
            <img src={item.img}  className='w-[100%] h-[30vh] md:h-[90vh]'/>
            
            </div>
        ))}
        </Carousel>
        <div className="suzuki-content text-center my-[5vw]" data-aos="fade-up">
          <h1 className='text-xl md:text-4xl font-extrabold '>DISCOVER THE SUZUKI RANGE</h1>
          <br />
          <p className='text-[4vw] text-gray-900 font-normal md:text-[1.5vw]'>Explore the Suzuki range for innovative design, advanced technology, reliability and exceptional performance</p>
        </div>
    </div>
  )
}

export default Slider
