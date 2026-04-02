import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Scale } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Case Studies', path: '/case-studies' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-navy-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center group-hover:bg-navy-700 transition-colors">
              <Scale className="w-5 h-5 text-gold-400" />
            </div>
            <div>
              <span className="text-xl font-heading font-bold text-navy-800 tracking-tight">
                Meridian
              </span>
              <span className="text-xl font-heading font-light text-navy-500 tracking-tight ml-1">
                Law
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-navy-800 bg-navy-50'
                    : 'text-gray-600 hover:text-navy-800 hover:bg-navy-50/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 px-5 py-2.5 bg-navy-800 text-white text-sm font-medium rounded-lg hover:bg-navy-700 transition-colors"
            >
              Book a Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-navy-50"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-navy-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-navy-800 bg-navy-50'
                      : 'text-gray-600 hover:text-navy-800 hover:bg-navy-50/50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="block mt-2 px-4 py-3 bg-navy-800 text-white text-sm font-medium rounded-lg text-center hover:bg-navy-700 transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
