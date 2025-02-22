import React from 'react'
import All_Data from '../All_Data/All_Data'
import { useContext } from 'react'
import All_Data_Context from '../All_Data/All_Data_Context'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../CartContext/CartContext";

const Bikes = () => {
    const { addToCart } = useContext(CartContext);
    const {bike_info } = useContext(All_Data_Context)
    const [bikeData, setBikeData] = React.useState([])
    React.useEffect(() => {
        setBikeData(bike_info)
    }, [])
  return (
    <div className="container mx-auto py-10 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {bikeData.map((item) => (
        <div key={item.id}>
            <div className="bike_category h-[520px] md:h-[100%] flex flex-col items-center justify-center p-2 md:p-4 mb-4 border-4 rounded-lg">
              <img src={item.img} alt="" />
              <h1 className="font-bold text-2xl">{item.name}</h1>
              <h3 className="text-xl">BDT{item.price}</h3>
              <br />
              <div className="bike-cart flex justify-between items-center w-[80%] md:w-[70%]">
                <Link to={`/product/${item.id}`} className="text-sm md:text-xl bg-purple-900 hover:bg-purple-600 text-white px-2 md:px-4 py-1 md:py-2 rounded cursor-pointer">Explore now</Link>
                <button className="add-to-cart cursor-pointer" onClick={() => addToCart(item)}>
                  <FaCartPlus className="text-4xl text-purple-900 hover:text-purple-600" />
                </button>
              </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Bikes
