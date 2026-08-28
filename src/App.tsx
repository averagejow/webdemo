import { HashRouter as Router, Routes, Route } from 'react-router'
import Home from './components/Home'
import './App.css'

function App() {

  return (
    <div>
      <p>Test APP</p>

      <Router>
          <Routes>
              <Route path='/#/' element={<Home/>} />
          </Routes>
      </Router>
    </div>          
  )
}

export default App
