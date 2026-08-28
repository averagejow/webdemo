import Home from './components/Home'
import Section from './components/Section'
import { Route, Routes } from 'react-router'
import './App.css'

function App() {

  return (
    <div className='flex flex-col w-full h-full justify-center items-center'>     
        <a href='#/home'>Home</a>

        <Routes>  
          <Route path="/home" element={<Home />}/>
          <Route path='/section' element={<Section />}/>
        </Routes>
    </div>          
  )
}

export default App
