import { myNavMenu } from './components/Data'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { HashRouter, useRoutes } from 'react-router'
import './App.css'

function AppRoutes() {
  const element = useRoutes([
    { path: "/", element: <Home />},
    { path: "/home", element: <Home />},
    { path: "/menu", element: <Menu />},
    { path: "/about us", element: <AboutUs />}
  ])

  return element
}


function App() {

  return (
    <div className='flex flex-col w-full h-full justify-center items-center bg-black/10'>     
        <Navbar menuList={myNavMenu}/>
        
        <HashRouter>
          <AppRoutes />
        </HashRouter>

        <Footer />
    </div>          
  )
}

export default App
