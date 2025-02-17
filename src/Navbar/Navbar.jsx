import { useState } from "react";
import navlogo from '../assets/nav-logo.webp';
import navlogo2 from '../assets/nav-logo2.webp';
import { CgShoppingBag } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Cart items array

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-gray-500 backdrop-blur-md relative z-50">
      {/* Logo */}
      <div className="nav-part1">
        <img
          src={navlogo2}
          alt="Logo"
          className={`hidden md:block transition-opacity duration-500 ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
        <img
          src={navlogo}
          alt="Logo"
          className={`block md:hidden transition-opacity duration-500 ${isOpen ? "opacity-0" : "opacity-100"}`}
        />
      </div>
      
      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4">
        {['Bikes', 'Services', 'Shop', 'Contact'].map((item, index) => (
          <h4 key={index} className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white">
            <a href="#">{item}</a>
          </h4>
        ))}
      </div>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden relative flex justify-end w-[50%]">
        <h4
          className="px-4 py-2 border border-gray-400 rounded-md transition cursor-pointer hover:bg-black hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          Menu
        </h4>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-[100vh] bg-black text-white flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        {['Bikes', 'Services', 'Shop', 'Contact'].map((item, index) => (
          <h3 key={index} className="mb-4 text-xl font-semibold w-full hover:bg-white hover:text-black text-center transition-all duration-500">
            <a href="#">{item}</a>
          </h3>
        ))}
        <h4
          className="mt-6 px-4 py-2 border border-gray-400 rounded-md transition cursor-pointer hover:bg-white hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          Close
        </h4>
      </div>

      {/* Shopping Cart Icon */}
      <div className="nav-right flex items-center gap-4">
        <div className="icons">
          <div className="shopping-cart-icon cursor-pointer text-3xl text-white relative" onClick={() => setCartOpen(true)}>
            <CgShoppingBag />
            <div className="cart-count absolute top-[-8px] right-[-10px] bg-red-500 text-white text-[15px] p-3 rounded-md w-6 h-6 flex items-center justify-center">
              {cartItems.length}
            </div>
          </div>
        </div>
        <div className="log-in">
          <h4 className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white">
            <a href="#">Log in</a>
          </h4>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <div className={`fixed top-0 right-0 z-[102] w-[50%] max-w-[400px] h-[100vh] bg-white shadow-lg p-6 transition-transform duration-500 ${cartOpen ? "translate-x-0" : "translate-x-full"} overflow-x-hidden overflow-y-auto`}>
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold">My Cart</h2>
          <IoClose className="text-2xl cursor-pointer" onClick={() => setCartOpen(false)} />
        </div>
        
        <div className="mt-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Please click the cart button to add cart</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="flex justify-between items-center border-b py-2">
                <span>{item.name}</span>
                <span>${item.price}</span>
              </div>
            ))
          )}
        </div>
        
        {/* Total Price */}
        <div className="mt-4 text-lg font-semibold flex justify-between">
          <span>Total:</span>
          <span>${cartItems.reduce((total, item) => total + item.price, 0)}</span>
        </div>
        
        {/* Place Order Button */}
        <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
          Place Order
        </button>
      </div>
    </nav>
  );
}