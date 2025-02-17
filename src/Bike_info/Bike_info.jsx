import React, { useEffect } from 'react'
import bike from '../assets/bike-info/gsx-125.webp'
import { FaCartPlus } from "react-icons/fa";
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import All_Data_Context from '../All_Data/All_Data_Context';



const Bike_info = () => {
  const Bike_Data = React.useContext(All_Data_Context);
  const [bikeData, setBikeData] = useState([]);
  useEffect(() => {
          setBikeData(Bike_Data.bike_info);
        }, []);
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          340: { slidesPerView: 2, spaceBetween: 15 }, 
          1024: { slidesPerView: 3, spaceBetween: 30 }, 
        }}
      >
        {bikeData.map((item) => (
          <SwiperSlide key={item.id} className='px-1'>
            <div className="bike_category  h-[300px] md:h-[100%]  flex flex-col items-center justify-center p-2 md:p-4 mb-4 border-4 rounded-lg">
              <img src={item.img} alt="" />
              <h1 className='font-bold text-2xl'>{item.name}</h1>
              <h3 className='text-xl'>{item.price}</h3>
              <br />
              <div className="bike-cart flex justify-between items-center w-full md:w-[70%]">
                <h3 className='text-sm md:text-xl bg-purple-900 hover:bg-purple-600 text-white px-2 md:px-4 py-1 md:py-2 rounded cursor-pointer'>Explore now</h3>
                <button className='add-to-cart cursor-pointer' ><FaCartPlus className='text-4xl text-purple-900 hover:text-purple-600' />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Bike_info
