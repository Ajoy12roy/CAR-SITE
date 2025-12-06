import React from 'react'
import Title from './Title'
import CarCards from './CarCards'
import { assets,dummyCarData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {
  const navigate = useNavigate();

  return (
    <div className=' items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32'> 

<div>
    <Title title='Featured vehicles' subtitle='Explore our selection of premium vehicles available for your next adventure.'>

    </Title>
</div>
<div className='flex gap-6 mt-12 mb-8'>
    {
    dummyCarData.slice(0,6).map((car) => (
        <div key={car._id}>
            <CarCards car={car} onClick={() => navigate(`/car-details/${car._id}`)}/>
        </div>
    ))
    }
</div>

<button onClick={()=>{
    navigate('/cars');scrollTo(0,0)
}}
className='flex items-center justify-center gap-2 px-6 py-2
border border-corderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
    Explore all cars <img src={assets.arrow_icon} alt="arrow" /> 
    </button>

    </div>
  )
}

export default FeaturedSection
