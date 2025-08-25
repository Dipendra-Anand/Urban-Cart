import React from 'react'
import Nav from './Nav'
import Login from './Login'
import './App.css'
import './Nav.css'
import './Register.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Register from './Register'
import PrivateComponent from './PrivateComponent'

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Nav/>
      <Routes>
        
        //wrapped in private component
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h1>Home Page</h1>}/>
        <Route path="/add" element={<h1>Add Product Page</h1>}/>
        <Route path="/update" element={<h1>Update Product Page</h1>}/>
        <Route path="/logout" element={<h1>Logout Page</h1>}/>
        <Route path="/profile" element={<h1>Profile Page</h1>}/>  
        </Route>

        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
