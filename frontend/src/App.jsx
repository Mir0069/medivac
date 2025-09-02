import React, { useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Login from './components/Login'
import Dashboard from './components/dashboard'
import { Authprovider } from './contextproviders/authcontext'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



  export const Context=React.createContext()
const App = () => {
  
  const [signedin, setsignedin] = useState(false)
useEffect(()=>{console.log(signedin)},[signedin])
  return (

    
      <Context.Provider value={[signedin,setsignedin]}>
              <ToastContainer />

      <Navbar></Navbar>
      <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/dashboard" element={<Dashboard />}/>

        </Routes>
      </Context.Provider>
   
  )
}

export default App