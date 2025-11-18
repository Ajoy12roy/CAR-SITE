import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between
     px-8 md:pl-13 pt-10 md:ml-45  mb-8  bg-linear-to-r from-[#0558FE] to-[#A9CFFF] max-w-6xl max-h-85  md:max-auto rounded-2xl overflow-hidden'>
    <div className='text-white'>  
 
  <h2 className='text-3xl font-bold' >Do You Own A LuXury Car ?</h2>
  <p className='text-sm mt-2'>Monetize your vehicle effortlessly by listing it on <span className='font-bold'>CarRental</span> .</p>
  <p className='text-sm max-w-130'>We take care of insurance, driver verification, and secure payments
     — so you can earn passive income, stress-free</p>

    <button className='px-6 py-2 bg-white hover:bg-slate-300 transition-all
    text-primary rounded-lg text-sm mt-4 cursor-pointer'>List your car</button>
    </div>
    <img src={assets.banner_car_image} alt="carr" className='max-h-45 mt-2'/>
    </div>
  )
}

export default Banner