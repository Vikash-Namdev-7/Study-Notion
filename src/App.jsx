import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import DashBoard from './pages/Dashboard'
import PrivateRoute from './components/PrivateRoyte'

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false)

  return (
    <>
      <div className='w-screen h-screen bg-slate-950 flex flex-col'>
        <Navbar isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />

          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Login' element={<Login setisLoggedIn={setisLoggedIn} />}></Route>
            <Route path='/Signup' element={<Signup setisLoggedIn={setisLoggedIn} />}></Route>
            <Route path='/DashBoard' element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <DashBoard/> 
              </PrivateRoute>
              }></Route>
          </Routes>
        
      </div>
    </>
  )
}

export default App
