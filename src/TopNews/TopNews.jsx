import React, { useEffect } from 'react'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import All_Data_Context from '../All_Data/All_Data_Context';
const TopNews = () => {
    const newsData = React.useContext(All_Data_Context);
    const [news, setNews] = React.useState([]);
    useEffect (() => {
        setNews(newsData.top_news);
      }, []);
  return (
    <div className='top-news'>
        <div className="topnews-heading font-extrabold text-3xl md:text-6xl text-center mb-6 flex flex-col items-center justify-center">Top News</div>
        <div className="swipping-guide text-gray-800 font-semibold text-xl md:text-2xl text-center">
            --swipe left or right to get more news--
        </div>
        <br />
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {news.map((item) => (
                  <SwiperSlide key={item.id} className="top-news-contentbox px-1 flex flex-col items-center justify-center mb-[60px]">
                    <div className="topnews-img flex items-center justify-center">
                      <img src={item.img} alt="" className='w-[70vw] md:w-[30vw] h-[50vw] md:h-[20vw]'/>
                    </div>
                    <br />
                    <div className="topnews-title text-center font-extrabold text-3xl text-center">{item.title}</div>
                    <br />
                    <button className='w-full flex items-center justify-center'><div className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white w-[25%] md:w-[8%]">Read More</div></button>
                  </SwiperSlide>
                ))}
      </Swiper>
    </div>
  )
}

export default TopNews
