import React from 'react'
import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className="relative mt-24">
      {/* Banner Images */}
      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center md:items-end md:justify-center pt-16 md:pt-0 md:pr-24">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 md:p-10 max-w-md">
          <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-6 text-center md:text-right">
            Why Choose Us?
          </h1>

          <div className="space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 transition-transform hover:scale-[1.02]"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="md:w-11 w-9"
                />
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomBanner

