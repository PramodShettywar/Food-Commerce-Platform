import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Categories = () => {
  const { navigate } = useAppContext()

  return (
    <div className="mt-20 px-4 md:px-0">
      {/* Heading */}
      <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
        Categories
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="group cursor-pointer flex flex-col items-center justify-center gap-3 p-5 rounded-2xl shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
            style={{ backgroundColor: category.bgColor }}
            onClick={() => {
              navigate(`/products/${category.path.toLowerCase()}`)
              scrollTo(0, 0)
            }}
          >
            {/* Image */}
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center">
              <img
                src={category.image}
                alt={category.text}
                className="group-hover:scale-110 transition-transform duration-300 max-w-24"
              />
            </div>

            {/* Text */}
            <p className="text-sm md:text-base font-semibold text-gray-800 group-hover:text-emerald-600 transition">
              {category.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
