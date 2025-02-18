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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App className='bg-black' />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider><RouterProvider router={router} /></CartProvider>
  </StrictMode>,
)
