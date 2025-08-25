import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import logo from '../src/assets/urbancart.png'

const Nav = () => {

  const auth=localStorage.getItem('user');
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/login');
  }

  return (
   <nav className="navbar">
      <div className="logo"><img src={logo} alt="website logo" /></div>
      <ul className="nav-ul">
        
        
        {/* <li>{auth?<Link onClick={logout} to="/register">Logout</Link>:<Link to="/register">Register</Link>}</li> */}

        {
          auth?
          <>
    
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">Add Product</Link></li>
          <li><Link to="/update">Update Product</Link></li>
          <li><Link to="/profile">Profile </Link></li>
          <li><Link onClick={logout} to="/login">Logout</Link></li>
          </>:
          
          <>
            <li><Link to="/login">Login</Link></li>
          </>
        }
      
      </ul>
    </nav>
  )
}

export default Nav
