import React, { useState } from 'react';
import logo from '/Logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../Context/Cartcontext';
import { useAuth } from '../Context/AuthContext';

function Navbar() {
  const { cart } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  return (
    <>
      <nav className="navbar flex items-center justify-between p-4 bg-red-800 text-white font-bold font-serif">
        {/* Logo */}
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" className="h-6" /></Link>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-4 items-center">
          <li><Link className="nav-anim-link" to="/Varities">Services</Link></li>
          <li><Link className="nav-anim-link" to="/About">About</Link></li>
          {user ? (
            <>
              <li><span className="text-white text-sm">{user.email}</span></li>
              <li>
                <button onClick={handleLogout} className="bg-white text-red-800 px-4 py-1 rounded-lg font-bold">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li><Link className="nav-anim-link" to="/login">Login</Link></li>
              <li><Link to="/signup" className="bg-white text-red-800 px-4 py-1 rounded-lg font-bold">Sign Up</Link></li>
            </>
          )}
        </ul>

        <div className="flex items-center gap-4">
          {/* Cart icon */}
          <Link to="/Checkout" className="relative">
            🛒
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Hamburger — only on mobile */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="bg-red-800 text-white flex flex-col items-center gap-4 py-6 md:hidden">
          <Link to="/Varities" onClick={() => setMenuOpen(false)} className="text-lg font-bold">Services</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)} className="text-lg font-bold">About</Link>
          {user ? (
            <>
              <span className="text-sm">{user.email}</span>
              <button
                onClick={() => { handleLogout(); setMenuOpen(false); }}
                className="bg-white text-red-800 px-4 py-1 rounded-lg font-bold">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="text-lg font-bold">Login</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="bg-white text-red-800 px-4 py-1 rounded-lg font-bold">Sign Up</Link>
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Navbar;