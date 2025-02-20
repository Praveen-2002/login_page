import { useActionState, useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Loginpage from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/login' element={<Loginpage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route element={<ProtectedRoutes/>}> {/* Routes that require validation */}
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
