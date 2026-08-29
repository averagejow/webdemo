import { myNavMenu } from './components/Data'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import './App.css'

function App() {

  return (
    <div className='flex flex-col w-full h-full justify-center items-center bg-black/10'>     
        <Navbar menuList={myNavMenu}/>
        
        <Routes>  
          <Route path="/Home" element={<Home text="All day buffey by Maica's Kitchen"/>}/>
          <Route path='/Menu' element={<Menu />}/>
          <Route path='/About Us' element={<AboutUs/>}/>
        </Routes>

        <Footer />
    </div>          
  )
}

export default App
