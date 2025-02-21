import React from 'react'
import { useRef } from 'react'
import { ImExit } from "react-icons/im";


const ShopModal = ({onClose}) => {
  const closeRef = useRef();

  const Closingclick = (e) => {
    if(closeRef.current === e.target){
        onClose();
    }
}
  return (
    <div ref={closeRef} onClick={Closingclick} className='fixed inset-0 bg-black bg-opacity-5 backdrop-blur-sm flex justify-center items-center '>
        <div className=''>
        
        <div className="modal rounded-[20px] bg-black p-4 pb-8 text-white w-[400px] h-[400px] flex flex-col gap-4 items-center justify-center">
          <button onClick={onClose} className='place-self-end text-3xl text-white p-4'><ImExit/></button>
          <h1 className='text-2xl font-bold text-center'>Please!!! <br /> Register here first  </h1>
          <input type="email" placeholder='Enter your email' required className='w-[250px] p-2 rounded-md text-black' />
          <input type="password" placeholder='Enter your Password' required className='w-[250px] p-2 rounded-md text-black' />
          <input type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' />
        </div>
        </div>
      </div>
  )
}

export default ShopModal
