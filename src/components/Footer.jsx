import React from 'react'
import { FaEnvelope, FaFireFlameCurved, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6'
import { IoSend } from 'react-icons/io5'

const Footer = () => {
  return (
    <footer className='min-h-[30vh] bg-background text-warm-white'>
      <div className="container py-16 space-y-5">
        <div className="flex flex-wrap gap-12 justify-between max-sm:justify-center max-sm:text-center">
          <div className="space-y-4 flex flex-col items-center">
            <h3 className='text-2xl font-bold flex flex-col items-center'><FaFireFlameCurved className='text-7xl me-2 text-center text-yellow-500 mb-2'/> Blaze Kitchen</h3>
            <p className='max-w-60 text-balance text-sm max-sm:text-center'>There are many variations of passages of Lorem Ipsum available. bu the majority have suffered alteration in some form.</p>
            <div className="space-y-2">
              <p className='flex items-center gap-2 text-sm'><span className='text-lg text-yellow-500'><FaPhoneVolume /></span> (001) 123 456 789</p>
              <p className='flex items-center gap-2 text-sm'><span className='text-lg text-yellow-500'><FaEnvelope /></span> info@blazekitchen.com</p>
              <p className='flex items-center gap-2 text-sm'><span className='text-lg text-yellow-500'><FaLocationDot /></span> 123 Main Street, City, Country</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className='space-y-4'>
              <li className='flex items-center gap-3'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                Home
              </li>
              <li className='flex items-center gap-3'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                About Us
              </li>
              <li className='flex items-center gap-3'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                Shop
              </li>
              <li className='flex items-center gap-3'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                Blog
              </li>
              <li className='flex items-center gap-3'>
                <span className='w-2 h-2 bg-yellow-500 rounded-full'></span>
                Licensing
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Opening Hours</h3>
            <div className="space-y-2">
              <p className='font-semibold'>Sunday to Friday</p>
              <p>09:30 AM to 10:00 PM</p>
            </div>
            <div className="space-y-2">
              <p className='font-semibold'>Saturday</p>
              <p>12:30 PM to 09:00 PM</p>
            </div>
          </div>
          <div className="space-y-4 max-w-md">
            <h3 className="text-lg font-semibold text-white">
              Newsletter Subscribe
            </h3>

            <p className="text-sm text-gray-400">
              But I must explain to you how all this mistaken idea of denouncing pleasure
              and praising pain was born and I will give you a complete account of the system.
            </p>

            <form
              className="flex items-center bg-white rounded-md overflow-hidden"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 px-4 py-2 text-black outline-none"
                required
              />

              <button
                type="submit"
                className="p-4 h-full bg-yellow-500 flex items-center justify-center hover:bg-yellow-600 transition"
              >
                <IoSend className="text-lg text-black" />
              </button>
            </form>
          </div>
        </div>
        <hr className='w-full text-gray-700'/>
        <div className="text-center w-full">
          <p className='text-center text-gray-400 text-sm'>&copy; 2024 Blaze Kitchen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer