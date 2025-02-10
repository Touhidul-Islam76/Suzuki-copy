
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default App
