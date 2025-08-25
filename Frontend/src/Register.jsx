import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate}   from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
    const[Name,setName]=useState("");
    const[Email,setEmail]=useState("");
    const[Password,setPassword]=useState("");
    const[Mobile,setMobile]=useState("");
    const navigate=useNavigate();

    useEffect(()=>{
      const auth=localStorage.getItem('user');
      if(auth){
        navigate('/');
      }
    })

    const handlesubmit= async (e)=>{
        e.preventDefault();
        console.log(Name,Email,Password,Mobile);
        let result=await fetch("http://localhost:3000/register",{
          method:'post',
          body:JSON.stringify({Name,Email,Password,Mobile}),
          headers:{
            'content-type':'application/json'
          },
        });
        result=await result.json();
        console.warn(result);
        localStorage.setItem('user', JSON.stringify(result));
          navigate('/');
    

    }



  return (
    <div className="register-container">
      <h1>Register here</h1>
      <form action="">
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
        <input type="email" value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
        <input type="password" value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' />
        <input type="mobile" value={Mobile} onChange={(e)=>setMobile(e.target.value)} placeholder='mobile number'/>
        <button type="submit" onClick={handlesubmit}>Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  )
}

export default Register
