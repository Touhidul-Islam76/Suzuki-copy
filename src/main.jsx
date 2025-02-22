import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from './CartContext/CartContext.jsx'
import SingleBike from './SingleBike/SingleBike.jsx'
import All_Data_Context from "./All_Data/All_Data_Context.jsx";
import All_Data from "./All_Data/All_Data.jsx"; // Import your data
import Shop from './Shop/Shop.jsx'
import ServicePage from './ServicePage/ServicePage'
import DealerPage from './DealerPage/DealerPage.jsx'
import SingleNews from './SingleNews/SingleNews.jsx'
import Bikes from './Bikes/Bikes.jsx'
import Contact from './Contact/Contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App className='bg-black' />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/product/:id",
        element:<SingleBike/>
      },
      {
        path:'/shop',
        element:<Shop/>
      },
      {
        path:'/shop_product',
        element:<h1 className='text-center text-3xl md:text-4xl font-semibold text-gray-400 h-screen flex flex-col items-center justify-center'>At this moment, there is no product available for this category. Stay tuned.<Link to='/shop' className='mt-4 px-4 py-2 border border-gray-400 rounded-md transition-all duration-500 hover:bg-black hover:text-white'> Go Back </Link></h1>
      },
      {
        path:'/service',
        element:<ServicePage/>
      },
      {
        path:'/dealer',
        element:<DealerPage/>
      },
      {
        path:"/news/:id",
        element:<SingleNews/>
      },
      {
        path:"/bikes",
        element:<Bikes/>
      },
      {
        path:'/contact',
        element:<Contact/>
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <All_Data_Context.Provider value={All_Data}>
      {/* Context Provider এখানে Add করুন */}
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </All_Data_Context.Provider>
  </StrictMode>
)
