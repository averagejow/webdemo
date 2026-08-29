import bgImage from './assets/bg-image-app.png'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router'
import { myNavMenu } from './components/Data'
import './App.css'


function App() {

  return (
    <div className='grid grid-cols-1 w-full h-full gap-y-1 justify-center items-center'>     
        <div className='fixed left-0 top-0 w-full h-full opacity-15 bg-cover bg-center bg-fixed' style={{backgroundImage: `url(${bgImage}`}}></div>
        <div className='fixed left-0 top-0 w-full h-full bg-caramel'></div>
        <Navbar menuList={myNavMenu}/>                
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/about us' element={<AboutUs />}/>
        </Routes>        
        <Footer />
    </div>          
  )
}

export default App
