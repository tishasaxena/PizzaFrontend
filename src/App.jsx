import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Layouts/Layout'
import Signup from './Pages/Auth/Signup'

function App() {
 

  return (
     <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth/signup' element={<Signup />} />
     </Routes>
     </>
  )
}

export default App
