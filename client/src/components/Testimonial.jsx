import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets';


const Testimonial = () => {

  const testimonials = [
        { name: "Emma Rodriguez", 
          location: "Barcelona, Spain",
          image: assets.testimonial_image_1,       
          review: "I've rented luxury cars from various platforms before, but none compare to CarRental. The selection is unparalleled, and the booking process was seamless. Highly recommend!"
         },
        { name: "Liam Johnson", 
          location: "New York, USA",
          image: assets.testimonial_image_2,       
          review: "CarRental made my vacation unforgettable. The car I rented was in pristine condition, and the customer service was top-notch. I'll definitely be using their services again."
         },
        { name: "Olivia Smith", 
          location: "London, UK",
          image: assets.testimonial_image_1,       
          review: "As a car enthusiast, I was thrilled with the variety of luxury cars available on CarRental. The entire process was hassle-free, and the car exceeded my expectations. Five stars!"
         },
     
    ];



  return (

     <div className="py-28 px-6 md:px-16 lg:px-44 ">
            <Title title="What Our Customers Say" subtitle="Discover why discerning
                travelers choose stayVenture for their luxury accommodation around the world."/>
             


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white/20 p-6 rounded-xl border-yellow-500 shadow-lg hover:-translate-y-1
                    transition-all duration-300 ">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src=
                            {testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className=" text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_, index) => (
                                <img key={index} src={assets.star_icon} alt='star-icon' />
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
        </div>
    )
}



export default Testimonial