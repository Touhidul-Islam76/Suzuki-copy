import React, { useState } from 'react'
import { GrServices } from "react-icons/gr";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BiSolidShoppingBagAlt } from "react-icons/bi";
import shop from '../assets/shop.webp';
import { Link } from 'react-router-dom';
import ShopModal from '../Shopmodal/ShopModal';




const Shop = () => {
  const [ShowModal , setShowModal] = useState(false)
  return (
    <div>
      <div className="shop flex flex-col items-center justify-center">
      <div className="bike-shop-title font-extrabold text-3xl md:text-6xl text-center mb-[60px] border-b-[5px] border-black">
          <h1>SHOP </h1>
        </div>
        <div className="shop-btn flex flex-col md:flex-row items-center justify-center gap-[50px] mb-[60px] w-full">
            <Link to='/shop_product' className="shop-service flex flex-col items-center border-gray-400 border-2 p-8 rounded-[20px] cursor-pointer">
            <GrServices className='text-3xl md:text-6xl' />
            <br />
            <h1 className='font-semibold text-gray-400'>Genuine Parts</h1>
            </Link>
            <Link to='/shop_product' className="shop-engine-oil flex flex-col items-center border-gray-400 border-2 p-8 rounded-[20px] cursor-pointer">
            <BsFillFuelPumpFill className='text-3xl md:text-6xl' />
            <br />
            <h1 className='font-semibold text-gray-400'>Engine Oil</h1>
            </Link>
            <Link to='/shop_product' className="shop-accessories flex flex-col items-center border-gray-400 border-2 p-8 rounded-[20px] cursor-pointer">
            <BiSolidShoppingBagAlt className='text-3xl md:text-6xl' />
            <br />
            <h1 className='font-semibold text-gray-400'>Accessories</h1>
            </Link>
        </div>
        <div className="shop-content flex flex-col md:flex-row items-center justify-evenly md:justify-between px-8 py-4 mb-[60px]">
                <div className="shop-left">
                  <div className="shop-left-img">
                    <img src={shop} alt="" />
                  </div>
                </div>
                <div className="shop-right w-[85%] md:w-[45%] text-center md:text-left flex flex-col items-center md:items-start justify-center ">
                  <div className="shop-right-title font-extrabold text-3xl text-center md:text-left">BIKES</div>
                  <br />
                  <div className="shop-right-para text-gray-800 font-semibold">Schedule a free motorcycle test ride on a Suzuki bike at your local dealer. Test ride a motorcycle to learn which is the right bike for you.</div>
                  <br />
                  <div className="shop-right-btn px-4 py-2 text-white border border-gray-400 rounded-lg md:rounded-full transition-all duration-500 bg-blue-800 hover:bg-blue-600 hover:text-white w-[35%] md:w-[18%] text-center font-semibold cursor-pointer"><button onClick={() => setShowModal(true)} className="text-center">Contact us</button></div>
                </div>
              </div>
      </div>
      {ShowModal && <ShopModal onClose={() => setShowModal(false)}/>}
    </div>
  )
}

export default Shop
