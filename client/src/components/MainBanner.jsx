import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const MainBanner = () => {
  return (
    <div className="relative">
      {/* Background Images */}
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-6 md:pl-20 lg:pl-28">
        <h1
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold 
          text-center md:text-left 
          max-w-80 md:max-w-xl 
          leading-snug lg:leading-tight 
          bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 
          text-transparent bg-clip-text drop-shadow-md"
        >
          Freshness You Can Trust, Savings You Will Love!
        </h1>

        {/* Buttons */}
        <div className="flex items-center mt-8 font-medium gap-4">
          <Link
            to={"/products"}
            className="group flex items-center gap-2 px-8 md:px-10 py-3.5 
            rounded-2xl shadow-lg 
            bg-gradient-to-r from-emerald-500 to-green-400 
            hover:from-green-500 hover:to-emerald-600 
            transition-all duration-300 text-white"
          >
            Shop Now
            <img
              className="md:hidden transition-transform group-hover:translate-x-1"
              src={assets.white_arrow_icon}
              alt="arrow"
            />
          </Link>

          <Link
            to={"/products"}
            className="group hidden md:flex items-center gap-2 px-10 py-3.5 
            rounded-2xl shadow-md border border-gray-300 bg-white/70 backdrop-blur-sm
            hover:bg-white transition-all duration-300"
          >
            Explore Deals
            <img
              className="transition-transform group-hover:translate-x-1"
              src={assets.black_arrow_icon}
              alt="arrow"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MainBanner

