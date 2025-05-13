import React, { useEffect } from 'react'
import Header from './Header'
import { useState } from 'react';
import { FaEye,FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function SignIn() {

  
  const [showpassword,setshowpassword] = useState(false);
  const [password,setpassword] = useState("");
  const [formData,setFormData] = useState({});

  const handleChange = (e) =>{
      setFormData({
        ...formData,
      [e.target.id]: e.target.value
      });
  };

 
   console.log(formData);
  return (
    <>
      <Header/>
       <div className='p-3 max-w-md mx-auto'>
          <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
          <form action="" className='flex flex-col gap-4'>
            <input onChange={handleChange} type='text' placeholder='UserEmail' className='border p-4 rounded-lg' id='useremail'></input>
            <div className="relative">
            <input 
              value={password} 
              type={showpassword ? 'text' : 'password'} 
              onChange={(e)=>{
                setpassword(e.target.value);
                setFormData((v)=>({...v,password:e.target.value}))
              }} 
              placeholder='Password' className='border p-4 rounded-lg w-full pr-12' id='password' />
            {showpassword? <FaEyeSlash onClick={()=>setshowpassword(!showpassword)} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer' /> : <FaEye onClick={()=>setshowpassword(!showpassword)} className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer' />}
            </div>
            
            
          <button className='bg-slate-500 text-white p-4 rounded-lg hover:opacity-80'>Submit</button>
          </form>
          
          <div className='flex gap-2'>
              <h2>Don't have an Account?? </h2>
              <h2 className='text-blue-500 hover:text-red-500'><Link to='/sign-up'>Sign Up</Link></h2>
          </div>
       </div>
    </>
  )
}
