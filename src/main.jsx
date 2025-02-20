import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CartProvider } from './CartContext/CartContext.jsx'
import SingleBike from './SingleBike/SingleBike.jsx'
import All_Data_Context from "./All_Data/All_Data_Context.jsx";
import All_Data from "./All_Data/All_Data.jsx"; // Import your data

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
