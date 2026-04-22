import React, { useState } from 'react'; // ✅ fixed import
import logo from '/Logo.png';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/Cartcontext';

function Navbar() {
  const { cart } = useCart(); // ✅ removed unused addToCart
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar flex items-center justify-between p-4 bg-red-800 text-white font-bold font-serif">
        {/* Logo */}
        <div className="logo">
          <Link to="/"><img src={logo} alt="Logo" className="h-6" /></Link>
        </div>

        {/* Desktop links — hidden on mobile */}
        <ul className="hidden md:flex space-x-4">
          <li><Link className="nav-anim-link" to="/Varities">Services</Link></li>
          <li><Link className="nav-anim-link" to="/About">About</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          {/* Cart icon */}
          <Link to="/checkout" className="relative">
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
        <div className="fixed top-16 left-0 right-0 z-40 bg-red-800 text-white flex flex-col items-center gap-4 py-6 md:hidden">
          <Link to="/Varities" onClick={() => setMenuOpen(false)} className="text-lg font-bold">
            Services
          </Link>
          <Link to="/About" onClick={() => setMenuOpen(false)} className="text-lg font-bold">
            About
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;