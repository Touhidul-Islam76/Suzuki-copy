import { useState, useContext, useEffect } from "react";
import { CartContext } from "../CartContext/CartContext"; // Import Cart Context
import navlogo from "../assets/nav-logo.webp";
import navlogo2 from "../assets/nav-logo2.webp";
import { CgShoppingBag } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"; // Icons for Quantity Control
import { clear } from "localforage";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, totalPrice, clearCart } = useContext(CartContext);
  const [showNotification, setShowNotification] = useState(false); // Notification state
  
    // Order Placed Function
  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return; // কার্ট যদি খালি হয়, তাহলে কিছু করবে না

    clearCart(); // 🟢 কার্ট আগে খালি করবে
    setShowNotification(true); // 🔹 এরপর নোটিফিকেশন দেখাবে
  };
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <nav className="w-full flex items-center justify-between p-4 bg-gray-500 backdrop-blur-md relative z-50">
      <div className="nav-part1">
        <img src={navlogo2} alt="Logo" className="hidden md:block" />
        <img src={navlogo} alt="Logo" className="block md:hidden" />
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
        <div className="shopping-cart-icon cursor-pointer text-3xl text-white relative" onClick={() => setCartOpen(true)}>
          <CgShoppingBag />
          <div className="cart-count absolute top-[-8px] right-[-10px] bg-red-500 text-white text-[15px] p-3 rounded-md w-6 h-6 flex items-center justify-center">
            {cartItems.length}
          </div>
        </div>
        <div className="log-in">
          <h3 className="px-4 py-2 border border-gray-400 rounded-md transition cursor-pointer hover:bg-black hover:text-white">
            Log In
          </h3>
        </div>
      </div>

      {/* Shopping Cart Sidebar */}
      <div className={`fixed top-0 right-0 w-[90%] md:w-[50%] h-[100vh] bg-white shadow-lg p-6 transition-transform duration-500 ${cartOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold">My Cart</h2>
          <IoClose className="text-2xl cursor-pointer" onClick={() => setCartOpen(false)} />
        </div>

        <div className="mt-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex justify-between items-center border-b py-2">
                <span>{item.name}</span>
                <span>BDT {item.price}/=</span>

                {/* Quantity Controls */}
                <div className="flex items-center">
                  <button onClick={() => decreaseQuantity(item.id)} className="p-2 bg-gray-200 rounded-md mx-1">
                    <FaMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQuantity(item.id)} className="p-2 bg-gray-200 rounded-md mx-1">
                    <FaPlus />
                  </button>
                  <button onClick={() => removeFromCart(item.id)} className="p-2 bg-red-500 text-white rounded-md mx-1">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Total Price */}
        <div className="mt-4 text-lg font-semibold flex justify-between">
          <span>Total:</span>
          <span>BDT {totalPrice}/=</span>
        </div>

        {/* Place Order Button */}
        <button onClick={handlePlaceOrder} className="mt-4 w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition">
          Place Order
        </button>
      </div>
      {/* ✅ Animated Order Notification (CSS animation) */}
      {showNotification && (
        <div className=" animate-slide-in fixed top-10 right-10 bg-green-500  text-white px-6 py-3 rounded-md shadow-lg text-lg flex items-center gap-2 animate-slide-in">
          🎉 Your order has been placed successfully!
          <span className="ml-4 text-sm opacity-75">(Auto closing in 3s...)</span>
        </div>
      )}
    </nav>
  );
}
