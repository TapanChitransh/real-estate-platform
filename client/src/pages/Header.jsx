import React from 'react'
import {FaSearch} from 'react-icons/fa';
import {Link} from 'react-router-dom'
import SignIn from './SignIn';
import SignUp from './SignUp';
import About from './About';

export default function Header() {
  return (
    
    <header className='bg-slate-200 shadow-md'>
       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Tapan</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
        </Link>
            <form className='bg-slate-100 p-2 rounded-lg flex items-center'>
                <input type="text" className='bg-transparent focus:outline-none w-16 sm:w-64' placeholder="Search..."/>
                <FaSearch className='text-slate-500'/>
            </form>
            <ul className='flex gap-4'>
            <Link to='/'> <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li></Link>
              <Link to='/about'><li className='hidden sm:inline text-slate-700 hover:underline'>About</li></Link>
              <Link to='/sign-in'><li className='text-slate-700 hover:underline'>SignIn</li></Link>
            </ul>

       </div>
    </header>
  )
}
