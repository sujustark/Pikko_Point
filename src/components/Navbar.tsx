import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/menu', label: 'Our Menu' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-lg'
          : ''
      }`}
      style={{ backgroundColor: '#002858' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm transition-transform group-hover:scale-110"
              style={{ backgroundColor: '#E40814', color: '#F4F0E4', fontFamily: 'Fredoka, sans-serif' }}
            >
              PP
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className="font-bold text-lg tracking-wide"
                style={{ fontFamily: 'Fredoka, sans-serif', color: '#F4F0E4', letterSpacing: '0.08em' }}
              >
                PIKKO POINT
              </span>
              <span
                className="text-xs opacity-70 hidden sm:block"
                style={{ color: '#ECDCC4', fontFamily: 'Poppins, sans-serif' }}
              >
                Good Food. Happy Mood.
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white'
                      : 'opacity-80 hover:opacity-100'
                  }`
                }
                style={({ isActive }) => ({
                  fontFamily: 'Poppins, sans-serif',
                  color: '#F4F0E4',
                  backgroundColor: isActive ? '#E40814' : 'transparent',
                })}
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/menu"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                backgroundColor: '#E40814',
                color: '#F4F0E4',
                fontFamily: 'Poppins, sans-serif',
              }}
            >
              View Menu
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#F4F0E4' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ backgroundColor: '#001a3a' }}
      >
        <div className="px-4 py-4 flex flex-col gap-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  isActive ? 'font-semibold' : 'opacity-80 hover:opacity-100'
                }`
              }
              style={({ isActive }) => ({
                fontFamily: 'Poppins, sans-serif',
                color: '#F4F0E4',
                backgroundColor: isActive ? '#E40814' : 'transparent',
              })}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/menu"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-5 py-3 rounded-full text-sm font-semibold text-center transition-all"
            style={{ backgroundColor: '#E40814', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
          >
            View Menu
          </Link>
        </div>
      </div>
    </nav>
  )
}

