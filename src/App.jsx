import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Layouts/Layout'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/Auth/NotFound'

function App() {
 

  return (
     <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/auth/signup' element={<Signup />} />
        <Route path='/auth/login' element={<Login />} />
         <Route path='*' element={<NotFound />} />
     </Routes>
     </>
  )
}

export default App
