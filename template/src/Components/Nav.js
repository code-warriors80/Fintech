import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/logo2.png'
import { FaBars } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className='flex items-center bg-green-400 justify-between px-7 md:px-36 py-7 font-[17px] fixed w-full'>
               <div>
                              <img src={logo} alt='logo' className='w-28'/>
               </div>
               <ul className='hidden absolute lg:static left-0 top-[88px] w-full lg:w-64 bg-white z-5 lg:bg-transparent lg:block lg:flex lg:items-center justify-center'>
                              <Link><li className='my-10 lg:my-0 text-bold text-white'>Home</li></Link>
                              <Link><li className='my-10 lg:my-0 text-white'>About</li></Link>
                              <Link><li className='my-10 lg:my-0 text-white'>Contact</li></Link>
                              <Link className='block lg:hidden'><li className='my-10 lg:my-0'>Join</li></Link>
               </ul>

               <div className='flex items-center justify-center'>
                              <button className='block lg:hidden text-3xl'><span className=''><FaBars /></span></button>
                              <Link className='hidden lg:block bg-[#15b153] text-white px-[20px] py-[13px] rounded-[50px] text-[17px]'>Join Now</Link>
               </div>

    </nav>
  )
}

export default Nav