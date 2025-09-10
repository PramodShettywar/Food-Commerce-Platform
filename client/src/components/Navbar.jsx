import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const { user, setUser, setShowUserLogin, navigate, setSearchQuery, searchQuery, getCartCount, axios } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get('/api/user/logout')
      if (data.success) {
        toast.success(data.message)
        setUser(null);
        navigate('/')
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products")
    }
  }, [searchQuery])

  return (
    <nav className="flex items-center justify-between 
      px-6 md:px-16 lg:px-24 xl:px-32 py-4 
      bg-white/30 backdrop-blur-md 
      border-b border-white/40 shadow-sm 
      fixed top-0 left-0 w-full z-50 transition-all">

      {/* Logo */}
      <NavLink to='/' onClick={() => setOpen(false)}>
        <img className="h-9 drop-shadow-md" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8 text-gray-800 font-medium">
        <NavLink to='/' className="hover:text-emerald-600 transition">Home</NavLink>
        <NavLink to='/products' className="hover:text-emerald-600 transition">All Products</NavLink>
        <NavLink to='/' className="hover:text-emerald-600 transition">Contact</NavLink>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 
          px-3 py-1.5 rounded-full 
          bg-white/40 backdrop-blur-sm 
          border border-white/50 shadow-sm">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-1 w-full bg-transparent outline-none placeholder-gray-600 text-gray-800"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt='search' className='w-4 h-4 opacity-70' />
        </div>

        {/* Cart */}
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
          <button className="absolute -top-2 -right-3 text-xs text-white 
            bg-gradient-to-r from-rose-500 to-pink-500 
            w-[18px] h-[18px] rounded-full shadow-md">
            {getCartCount()}
          </button>
        </div>

        {/* Auth Section */}
        {!user ? (
          <button
            onClick={() => setShowUserLogin(true)}
            className="cursor-pointer px-8 py-2 
              bg-gradient-to-r from-emerald-500 to-green-400 
              hover:from-emerald-600 hover:to-green-500 
              text-white rounded-full shadow-md transition"
          >
            Login
          </button>
        ) : (
          <div className='relative group'>
            <img src={assets.profile_icon} className='w-10 cursor-pointer' alt="" />
            <ul className='hidden group-hover:block absolute top-12 right-0 
              bg-white/70 backdrop-blur-lg shadow-lg border border-white/40 
              py-2.5 w-36 rounded-xl text-sm z-40'>
              <li onClick={() => navigate("my-orders")}
                className='p-2 pl-3 hover:bg-emerald-100 cursor-pointer transition'>My Orders</li>
              <li onClick={logout}
                className='p-2 pl-3 hover:bg-emerald-100 cursor-pointer transition'>Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* Mobile Menu Icon */}
      <div className='flex items-center gap-6 sm:hidden'>
        <div onClick={() => navigate("/cart")} className="relative cursor-pointer">
          <img src={assets.nav_cart_icon} alt='cart' className='w-6 opacity-80' />
          <button className="absolute -top-2 -right-3 text-xs text-white 
            bg-gradient-to-r from-rose-500 to-pink-500 
            w-[18px] h-[18px] rounded-full shadow-md">
            {getCartCount()}
          </button>
        </div>
        <button onClick={() => setOpen(!open)} aria-label="Menu">
          <img src={assets.menu_icon} alt='menu' />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-[60px] left-0 w-full 
          bg-white/70 backdrop-blur-lg shadow-lg 
          py-4 flex flex-col items-start gap-2 px-5 text-sm md:hidden rounded-b-2xl">

          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/products" onClick={() => setOpen(false)}>All Products</NavLink>
          {user && <NavLink to="/products" onClick={() => setOpen(false)}>My Orders</NavLink>}
          <NavLink to="/" onClick={() => setOpen(false)}>Contact</NavLink>

          {!user ? (
            <button
              onClick={() => {
                setOpen(false);
                setShowUserLogin(true);
              }}
              className="cursor-pointer px-6 py-2 mt-2 
                bg-gradient-to-r from-emerald-500 to-green-400 
                hover:from-emerald-600 hover:to-green-500 
                text-white rounded-full shadow-md text-sm transition"
            >
              Login
            </button>
          ) : (
            <button
              onClick={logout}
              className="cursor-pointer px-6 py-2 mt-2 
                bg-gradient-to-r from-rose-500 to-pink-500 
                hover:from-red-500 hover:to-rose-600 
                text-white rounded-full shadow-md text-sm transition"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  )
}

export default Navbar


