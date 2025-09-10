const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-4 mt-24 pb-14 px-4">
      {/* Title */}
      <h1 className="md:text-4xl text-2xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
        Never Miss a Deal!
      </h1>

      {/* Subtitle */}
      <p className="md:text-lg text-gray-600 max-w-2xl">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      {/* Form */}
      <form className="flex w-full max-w-2xl mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="flex-1 px-4 md:px-5 py-3 md:py-4 text-gray-700 rounded-l-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm"
        />
        <button
          type="submit"
          className="px-6 md:px-10 py-3 md:py-4 rounded-r-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold hover:opacity-90 transition-all shadow-md"
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsLetter
