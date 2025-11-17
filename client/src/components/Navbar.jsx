import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets, menuLinks } from '../assets/assets'

const Navbar = ({setShowLogin}) => {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-gray-300 relative transition-all ${location.pathname === '/' && "bg-white"}`}>
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='h-8' />
      </Link>

      <div className={`fixed h-screen w-full top-16 border-t border-gray-300 right-0 flex flex-col sm:flex-row sm:items-center items-start gap-4 sm:gap-8 p-4 sm:p-0 transition-all duration-300 z-50 bg-gray-50 sm:bg-transparent ${open ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0 sm:relative sm:top-0 sm:h-auto sm:w-auto sm:border-t-0`}>
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path} onClick={() => setOpen(false)} className='text-gray-600 hover:text-gray-800'>
            {link.name}
          </Link>
        ))}
        <div className='hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full max-w-56'>
          <input type="text" className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500' placeholder='search products' />
          <img src={assets.search_icon} alt="search" className='h-4 w-4' />
        </div>

        <div className='flex max-sm:flex-col items-start sm:items-center gap-6'>
          <button onClick={()=> navigate('/owner')}

           className='cursor-pointer'>Dashboard</button>
          <button onClick={()=> setShowLogin(true)}
          className='cursor-pointer px-8 py-2 bg-primary
          hover:bg-primary-dull transition-all text-white rounded-lg'>Login </button>
        </div>
      </div>
    <button className='sm:hidden cursor-pointer' aria-label='Menu' onClick={() => setOpen(!open)}>
      <img src={open ? assets.close_icon : assets.menu_icon} alt="menu" className='' />
    </button>

    </div>
  )
}

export default Navbar