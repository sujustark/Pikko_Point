import { Link } from 'react-router-dom'
import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ backgroundColor: '#002858', color: '#F4F0E4' }}>
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm"
              style={{ backgroundColor: '#E40814', color: '#F4F0E4', fontFamily: 'Fredoka, sans-serif' }}
            >
              PP
            </div>
            <span
              className="font-bold text-xl tracking-wider"
              style={{ fontFamily: 'Fredoka, sans-serif', letterSpacing: '0.08em' }}
            >
              PIKKO POINT
            </span>
          </div>
          <p className="text-sm mb-4 opacity-80 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Good Food. Happy Mood.
          </p>
          <p className="text-xs opacity-60 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Your neighbourhood cloud kitchen bringing fresh, flavourful food straight to your door.
          </p>
          {/* Social links */}
          <div className="flex gap-3 mt-5">
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: 'rgba(244,240,228,0.1)' }}
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: 'rgba(244,240,228,0.1)' }}
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: 'rgba(244,240,228,0.1)' }}
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-5" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm opacity-80" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {[
              { to: '/', label: 'Home' },
              { to: '/about', label: 'About Us' },
              { to: '/menu', label: 'Our Menu' },
              { to: '/contact', label: 'Contact Us' },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="hover:opacity-100 transition-opacity flex items-center gap-2 group"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-all group-hover:w-3"
                    style={{ backgroundColor: '#E40814' }}
                  />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-5" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Our Menu
          </h3>
          <ul className="space-y-3 text-sm opacity-80" style={{ fontFamily: 'Poppins, sans-serif' }}>
            {['Sandwiches', 'Crispy Bites', 'Fries & Loaded Fries', 'Burgers', 'Maggi & Momos', 'Beverages'].map(cat => (
              <li key={cat}>
                <Link
                  to="/menu"
                  className="hover:opacity-100 transition-opacity flex items-center gap-2 group"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full transition-all group-hover:w-3"
                    style={{ backgroundColor: '#E40814' }}
                  />
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-5" style={{ fontFamily: 'Fredoka, sans-serif' }}>
            Get In Touch
          </h3>
          <ul className="space-y-3 text-sm opacity-80" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <li className="flex items-start gap-3">
              <Phone size={15} className="mt-0.5 shrink-0" style={{ color: '#E40814' }} />
              <span>[Phone number to be added]</span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle size={15} className="mt-0.5 shrink-0" style={{ color: '#E40814' }} />
              <span>[WhatsApp to be added]</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={15} className="mt-0.5 shrink-0" style={{ color: '#E40814' }} />
              <span>[Email to be added]</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0" style={{ color: '#E40814' }} />
              <span>[Location to be added]</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/10 py-5"
        style={{ fontFamily: 'Poppins, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs opacity-60">
          <p>&copy; {year} PIKKO POINT. All rights reserved.</p>
          <p>Good Food. Happy Mood. 🍔</p>
        </div>
      </div>
    </footer>
  )
}
