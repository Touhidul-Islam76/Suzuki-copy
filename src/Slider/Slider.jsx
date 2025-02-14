import React from 'react';
import { Carousel } from 'antd';
import All_Data_Context from '../All_Data/All_Data_Context';



const Slider = () => {
    const slider_Data = React.useContext(All_Data_Context);
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
      };
  return (
    <div>
        <Carousel autoplay>
        {slider_Data.map((item) => (
            <div key={item.slider.id}>
            <img src={item.slider.img}  className='w-[100%] h-[30vh] md:h-[90vh]'/>
            
            </div>
        ))}
        </Carousel>
    </div>
  )
}

export default Slider
