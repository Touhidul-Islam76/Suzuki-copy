import { useState } from "react";
import navlogo from '../assets/nav-logo.webp';
import navlogo2 from '../assets/nav-logo2.webp';
import { CgShoppingBag } from "react-icons/cg";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        
          <h4
            className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"
          >
            <a href="#">Bikes</a>
          </h4>
          <h4
            className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"
          >
            <a href="#">Services</a>
          </h4>
          <h4
            className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"
          >
            <a href="#">Shop</a>
          </h4>
          <h4
            className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"
          >
            <a href="#">Contact</a>
          </h4>
        
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
        className={`fixed top-0 left-0 w-full h-[100vh] w-full bg-[black] text-white flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      >
        
          <h3  className="mb-4 text-xl font-semibold w-[100%] hover:bg-white hover:text-black text-center transition-all duration-500"> 
            <a href="#" >Bikes</a>
          </h3>
          <h3  className="mb-4 text-xl font-semibold w-[100%] hover:bg-white hover:text-black text-center transition-all duration-500">
            <a href="#" >Services</a>
          </h3>
          <h3  className="mb-4 text-xl font-semibold w-[100%] hover:bg-white hover:text-black text-center transition-all duration-500">
            <a href="#" >Shop</a>
          </h3>
          <h3  className="mb-4 text-xl font-semibold w-[100%] hover:bg-white hover:text-black text-center transition-all duration-500">
            <a href="#" >Contact</a>
          </h3>
        
        <h4
          className="mt-6 px-4 py-2 border border-gray-400 rounded-md transition cursor-pointer hover:bg-white hover:text-black"
          onClick={() => setIsOpen(false)}
        >
          Close
        </h4>
      </div>

      <div className="nav-right flex items-center gap-4">
      <div className="icons">
        <div className="shopping-cart-icon cursor-pointer text-3xl text-white relative">
        <CgShoppingBag />
        <div className="cart-count absolute top-[-8px] right-[-10px] bg-red-500 text-white text-[15px] p-3 rounded-md w-6 h-6 flex items-center justify-center">0</div>
        </div>
      </div>
      <div className="log-in">
        <h4
          className="px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white"
        >
          <a href="#">Log in</a>
        </h4>
      </div>
      </div>
    </nav>
  );
}
