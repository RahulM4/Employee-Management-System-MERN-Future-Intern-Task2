import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './pages/dashboard'
import Home from './pages/Home'
import FormPage from './components/FormPage'
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <NavBar/>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/addnew' element ={<FormPage/>}/>
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </Router>
  )
}

export default App