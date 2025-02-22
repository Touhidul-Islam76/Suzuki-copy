
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import All_Data_Context from './All_Data/All_Data_Context.jsx'
import Data from '../src/All_Data/All_Data.jsx'
import Footer from './Footer/Footer.jsx'

function App() {
  

  return (
    
      <All_Data_Context.Provider value={Data}>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </All_Data_Context.Provider>
    
  )
}

export default App
