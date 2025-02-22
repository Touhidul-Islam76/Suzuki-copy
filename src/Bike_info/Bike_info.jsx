import React, { useEffect, useContext, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import All_Data_Context from "../All_Data/All_Data_Context";
import { CartContext } from "../CartContext/CartContext"; // Import CartContext
import bike_safety from "../assets/bike-safety.webp";
import accessories from "../assets/bike-shopping/accessories.webp";
import engine_oil from "../assets/bike-shopping/engine_oil.webp";
import genuine_parts from "../assets/bike-shopping/genuine_parts.webp";
import AOS from "aos";
import "aos/dist/aos.css";
import service from "../assets/Service.webp";
import test_ride from "../assets/test-ride.webp";
import dealer from "../assets/dealer.webp";
import { Link } from "react-router-dom";
import TestRideModal from "../TestRideModal/TestRideModal";
const Bike_info = () => {
  useEffect(() => {
          AOS.init({
            duration: 1000, 
            infinite: true, 
            easing: "ease-in-out", 
            once: false, 
            mirror: true,
          });
        }, []);
  const Bike_Data = React.useContext(All_Data_Context);
  const { addToCart } = useContext(CartContext); // Get addToCart function
  const [bikeData, setBikeData] = React.useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setBikeData(Bike_Data.bike_info);
  }, []);
  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={{
          340: { slidesPerView: 2, spaceBetween: 15 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {bikeData.map((item) => (
          <SwiperSlide data-aos="fade-up" key={item.id} className="px-1">
            <div className="bike_category h-[300px] md:h-[100%] flex flex-col items-center justify-center p-2 md:p-4 mb-4 border-4 rounded-lg">
              <img src={item.img} alt="" />
              <h1 className="font-bold text-2xl">{item.name}</h1>
              <h3 className="text-xl">BDT{item.price}</h3>
              <br />
              <div className="bike-cart flex justify-between items-center w-full md:w-[70%]">
                <Link to={`/product/${item.id}`} className="text-sm md:text-xl bg-purple-900 hover:bg-purple-600 text-white px-2 md:px-4 py-1 md:py-2 rounded cursor-pointer">Explore now</Link>
                <button className="add-to-cart cursor-pointer" onClick={() => addToCart(item)}>
                  <FaCartPlus className="text-4xl text-purple-900 hover:text-purple-600" />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div data-aos="fade-up" className="bike-safety px-2 md:px-8 mt-4 md:mt-8 flex flex-col items-center justify-center mb-4">
        <div data-aos="fade-up" className="bikesafty-img mb-4">
          <img src={bike_safety} alt="" />
        </div>
        <div className="bikesafty-content flex flex-col md:flex-row items-center justify-center">
          <h1 className="font-extrabold text-3xl md:text-6xl w-[95%]">WEAR HELMET,RIDE SAFETY</h1>
          <div className="bike-safety-para text-semibold">
          <p>Wearing a helmet is crucial for your safety while riding a motorbike. It protects your head from serious injuries in case of accidents. Always ensure your helmet fits well and meets safety standards. Besides a helmet, wear gloves, jackets, and boots to protect yourself. Visit Suzuki shop to gear up.</p>
          <button className="bike-safety-btn mt-4 px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"><Link to={'/shop'}>Explore</Link></button>
          </div>
        </div>
      </div>

      <div  className="bike-shop overflow-y-hidden mt-[70px] mb-[40px]">
        <div className="bike-shop-title font-extrabold text-3xl md:text-6xl text-center mb-6"  data-aos="fade-down">
          <h1> EXPLORE BRAND SHOP </h1>
        </div>
        <div className="bike-shopping-products flex flex-col md:flex-row items-center justify-between  px-4">
          <div className="single-bike-products flex flex-col items-center justify-center mb-6 md:mb-0">
          <img src={accessories} alt="" />
          <div className="bike-shopping-products-title text-center">
            <br />
            <h1 className="font-bold text-3xl">Accessories</h1>
            <br />
            <button className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"><Link to='/shop'>Explore</Link></button>
          </div>
          </div>

          <div className="single-bike-products flex flex-col items-center justify-center mb-6 md:mb-0">
          <img src={engine_oil} alt="" />
          <div className="bike-shopping-products-title text-center">
            <br />
            <h1 className="font-bold text-3xl">Engine Oil</h1>
            <br />
            <button className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"><Link to='/shop'>Explore</Link></button>
          </div>
          </div>

          <div className="single-bike-products flex flex-col items-center justify-center">
          <img src={genuine_parts} alt="" />
          <div className="bike-shopping-products-title text-center">
            <br />
            <h1 className="font-bold text-3xl">Genuine Parts</h1>
            <br />
            <button className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"><Link to='/shop'>Explore</Link></button>
          </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="services flex items-center justify-between px-8 py-4 bg-[#0C234A] mb-[60px]" data-aos="fade-up">
        <div className="service-left text-center md:text-left">
          <div className="service-left-title font-extrabold text-3xl text-white">SERVICES</div>
          <br />
          <div className="service-left-para text-gray-300 font-semibold">At the Suzuki Service Center, we're committed to keeping your Suzuki in peak condition.</div>
          <br />
          <div className="service-left-btn">
            <button className="px-4 py-2 text-white border border-gray-400 rounded-full transition-all duration-500 bg-blue-800 hover:bg-blue-600 hover:text-white"><Link to='/service'>Choose your package</Link></button>
          </div>
        </div>
        <div className="service-right hidden md:block">
          <div className="service-right-img flex items-center justify-end">
            <img src={service} alt="" className="w-[80%]"/>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="test-ride flex flex-col md:flex-row items-center justify-evenly md:justify-between px-8 py-4 mb-[60px]">
        <div className="test-ride-left">
          <div className="test-ride-left-img">
            <img src={test_ride} alt="" />
          </div>
        </div>
        <div className="test-ride-right w-[85%] md:w-[45%] text-center md:text-left flex flex-col items-center md:items-start justify-center ">
          <div className="test-ride-right-title font-extrabold text-3xl text-center md:text-left">Request a Motorcycle Test Ride</div>
          <br />
          <div className="test-ride-right-para text-gray-800 font-semibold">Schedule a free motorcycle test ride on a Suzuki bike at your local dealer. Test ride a motorcycle to learn which is the right bike for you.</div>
          <br />
          <div className="test-ride-right-btn px-4 py-2 text-white border border-gray-400 rounded-lg md:rounded-full transition-all duration-500 bg-blue-800 hover:bg-blue-600 hover:text-white w-[35%] md:w-[18%] text-center font-semibold cursor-pointer"><button onClick= {() => setShowModal(true)} className="text-center">Contact us</button></div>
        </div>
      </div>
      {showModal && <TestRideModal onClose={() => setShowModal(false)} />}

      <div data-aos="fade-up" className="dealer flex flex-col md:flex-row items-center justify-evenly md:justify-between px-8 py-4 mb-[60px] bg-[#F5F5F5]">
        <div className="dealer-left bg-white py-[90px] md:py-[130px] px-[30px] text-center md:text-left flex flex-col items-center md:items-start justify-center">
          <div className="dealer-left-title font-extrabold text-3xl text-center md:text-left">Dealer Location</div>
          <br />
          <div className="dealer-left-para text-gray-800 font-semibold">This interactive locator will find your nearest Suzuki Motorbike Dealer.</div>
          <br />
          <div className="dealer-left-btn"> <button className="px-4 py-2 text-white border border-gray-400 rounded-full transition-all duration-500 bg-blue-800 hover:bg-blue-600 hover:text-white"><Link to='/dealer'>Find Now</Link></button> </div>
        </div>
        <div className="dealer-right">
          <div className="dealer-right-img">
            <img src={dealer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bike_info;
