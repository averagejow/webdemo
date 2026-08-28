import { createHashRouter, RouterProvider } from 'react-router'
import Home from './components/Home'
import './App.css'

const router = createHashRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/home", 
    element: <Home />,
  }
])

function App() {

  return (
    <div className='flex flex-col w-100 h-100'>     
        <RouterProvider router={router}/>
    </div>          
  )
}

export default App
