import { Link } from 'react-router-dom'
import { Scale, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Mission */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Scale className="w-8 h-8 text-gold-500 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-2xl font-heading font-extrabold tracking-tight text-white uppercase">
                Meridian<span className="text-gold-500">Law</span>
              </span>
            </Link>
            <p className="text-navy-200 text-sm leading-relaxed max-w-xs">
              Empowering the next generation of UK technology leaders and innovators with precise, strategic legal counsel under English Law.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-navy-800 rounded-lg hover:bg-gold-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-navy-800 rounded-lg hover:bg-gold-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-gold-400">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Case Studies', 'Insights', 'Contact'].map((link) => (
                <li key={link}>
                  <Link 
                    to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`}
                    className="text-navy-200 hover:text-gold-500 text-sm transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-gold-400">Practice Areas</h3>
            <ul className="space-y-3">
              {[
                'Startup & Venture Finance',
                'Commercial Contracts',
                'IP & Patent Strategy',
                'Regulatory & Compliance'
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-navy-200 hover:text-gold-500 text-sm transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-gold-400">London Office</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                <span className="text-navy-200 text-sm">
                  12 Cabot Square, Canary Wharf<br />
                  London E14 4QQ, United Kingdom
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-navy-200 text-sm">020 7456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold-500 shrink-0" />
                <span className="text-navy-200 text-sm">legal@meridianlaw.co.uk</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-navy-300 text-xs text-center md:text-left">
            &copy; {currentYear} Meridian Law Group. All rights reserved. Registered in England & Wales. Authorized and regulated by the SRA.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to="/privacy-policy" className="text-navy-300 hover:text-gold-500 text-xs transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-navy-300 hover:text-gold-500 text-xs transition-colors">Terms of Service</Link>
            <Link to="/disclaimer" className="text-navy-300 hover:text-gold-500 text-xs transition-colors">Disclaimer</Link>
            <Link to="/cookie-policy" className="text-navy-300 hover:text-gold-500 text-xs transition-colors whitespace-nowrap">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
