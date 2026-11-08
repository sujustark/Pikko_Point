import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { menuData, featuredItems } from '../data/menuData'
import MenuItemCard from '../components/MenuItemCard'

// SVG food doodles
function DoodleStar({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M20 2L23.5 14.5H36L26 22.5L29.5 35L20 27L10.5 35L14 22.5L4 14.5H16.5L20 2Z" fill="#E40814" fillOpacity="0.15" stroke="#E40814" strokeOpacity="0.4" strokeWidth="1.5"/>
    </svg>
  )
}

function DoodleDot({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg className={className} style={style} width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="6" fill="#ECDCC4"/>
    </svg>
  )
}

function DoodleWave({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="120" height="20" viewBox="0 0 120 20" fill="none">
      <path d="M0 10 Q15 2 30 10 Q45 18 60 10 Q75 2 90 10 Q105 18 120 10" stroke="#ECDCC4" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
  )
}

export default function HomePage() {
  const whyPoints = [
    { emoji: '🌿', title: 'Fresh Ingredients', text: 'We believe great food starts with quality ingredients. Every dish is made fresh, every time.' },
    { emoji: '⚡', title: 'Quick & Convenient', text: 'Cloud kitchen speed with home-style care. Good food shouldn\'t make you wait too long.' },
    { emoji: '❤️', title: 'Made with Love', text: 'Each dish is prepared with care and attention – because we genuinely enjoy feeding people well.' },
    { emoji: '🎯', title: 'Honest Flavours', text: 'No shortcuts on taste. What you see on the menu is what you get – and we think you\'ll love it.' },
  ]

  return (
    <div className="pt-16">
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #002858 0%, #003a7a 50%, #001a3a 100%)' }}
      >
        {/* Background decorative dots */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <DoodleDot
              key={i}
              className="absolute opacity-30"
              style={{
                left: `${(i * 37) % 95}%`,
                top: `${(i * 53) % 90}%`,
                width: `${8 + (i % 3) * 4}px`,
                height: `${8 + (i % 3) * 4}px`,
              }}
            />
          ))}
          <DoodleStar className="absolute top-20 right-20 float-anim opacity-60" style={{ width: 50, height: 50 }} />
          <DoodleStar className="absolute bottom-32 left-16 float-anim-delayed opacity-40" style={{ width: 35, height: 35 }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
              style={{ backgroundColor: 'rgba(228,8,20,0.2)', color: '#F4F0E4', border: '1px solid rgba(228,8,20,0.4)', fontFamily: 'Poppins, sans-serif' }}
            >
              🍴 Cloud Kitchen · Fresh Daily
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
              style={{ fontFamily: 'Fredoka, sans-serif', color: '#F4F0E4' }}
            >
              PIKKO
              <span style={{ color: '#E40814' }}> POINT</span>
            </h1>

            <p
              className="text-2xl sm:text-3xl font-medium mb-6 opacity-90"
              style={{ fontFamily: 'Fredoka, sans-serif', color: '#ECDCC4' }}
            >
              Good Food. Happy Mood.
            </p>

            <p
              className="text-base sm:text-lg mb-10 leading-relaxed max-w-lg opacity-80"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#F4F0E4' }}
            >
              Your favourite cloud kitchen bringing you fresh sandwiches, crispy bites, loaded fries, juicy burgers, comforting maggi and so much more – made with care, delivered with love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/menu"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
                style={{ backgroundColor: '#E40814', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
              >
                Explore Menu <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 border-2"
                style={{ borderColor: '#F4F0E4', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: food photography grid */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden h-48 bg-gray-800 shadow-2xl float-anim">
                  <img
                    src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80"
                    alt="Grilled sandwich"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-36 bg-gray-800 shadow-2xl float-anim-delayed">
                  <img
                    src="https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80"
                    alt="Fries"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden h-36 bg-gray-800 shadow-2xl float-anim-delayed">
                  <img
                    src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80"
                    alt="Burger"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-48 bg-gray-800 shadow-2xl float-anim">
                  <img
                    src="https://images.unsplash.com/photo-1562967915-6ba607ff7d05?w=400&q=80"
                    alt="Nuggets"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-full text-sm font-semibold shadow-2xl"
              style={{ backgroundColor: '#E40814', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
            >
              🔥 Fresh Every Day
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#intro"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
          style={{ color: '#F4F0E4' }}
        >
          <span className="text-xs" style={{ fontFamily: 'Poppins, sans-serif' }}>Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </a>
      </section>

      {/* ── BRAND INTRO ───────────────────────────────────── */}
      <section id="intro" className="py-20 overflow-hidden" style={{ backgroundColor: '#F4F0E4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image mosaic */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500&q=80"
                  alt="Maggi noodles"
                  className="rounded-3xl h-56 w-full object-cover shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1702572887741-85938ceb0eaf?w=500&q=80"
                  alt="Momos"
                  className="rounded-3xl h-56 w-full object-cover shadow-xl mt-8"
                />
              </div>
              {/* Decorative sticker */}
              <div
                className="absolute -bottom-6 -left-4 w-24 h-24 rounded-full flex items-center justify-center text-3xl shadow-2xl float-anim"
                style={{ backgroundColor: '#002858' }}
              >
                👨‍🍳
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <div
                className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
                style={{ backgroundColor: '#ECDCC4', color: '#002858', fontFamily: 'Poppins, sans-serif' }}
              >
                Our Story
              </div>
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
              >
                Good food made
                <span style={{ color: '#E40814' }}> simply</span>, served with heart.
              </h2>
              <DoodleWave className="mb-6" />
              <p
                className="text-base leading-relaxed mb-5 opacity-80"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
              >
                PIKKO POINT is a cloud kitchen built around one simple idea – great food should be accessible, honest and enjoyable every single time.
              </p>
              <p
                className="text-base leading-relaxed mb-8 opacity-80"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
              >
                From crispy sandwiches to comforting maggi, from golden fries to juicy burgers – our menu is built for real food lovers who appreciate freshness, flavour and value.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-all hover:gap-4"
                style={{ color: '#E40814', fontFamily: 'Poppins, sans-serif' }}
              >
                Learn our story <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED MENU ─────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#ECDCC4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#002858', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
            >
              🍴 Featured Items
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
            >
              Can't-miss favourites
            </h2>
            <p
              className="text-base opacity-70 max-w-xl mx-auto"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
            >
              A little taste of everything we do best. These are the dishes our customers keep coming back for.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredItems.slice(0, 6).map((item) => (
              <MenuItemCard key={item.id} item={item} compact />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#002858', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
            >
              View Full Menu <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY PIKKO POINT ───────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#F4F0E4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div
              className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
              style={{ backgroundColor: '#E40814', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
            >
              ✨ Why Us
            </div>
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
            >
              The Pikko Point difference
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyPoints.map(({ emoji, title, text }, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
                style={{
                  backgroundColor: i % 2 === 0 ? '#002858' : '#fff',
                  color: i % 2 === 0 ? '#F4F0E4' : '#002858',
                }}
              >
                <div className="text-4xl mb-5">{emoji}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'Fredoka, sans-serif' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-80"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MENU CATEGORIES STRIP ─────────────────────────── */}
      <section className="py-14 overflow-hidden" style={{ backgroundColor: '#002858' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {menuData.map(cat => (
              <Link
                key={cat.id}
                to={`/menu#${cat.id}`}
                className="flex items-center gap-2 px-5 py-3 rounded-full font-medium text-sm transition-all hover:scale-105"
                style={{
                  backgroundColor: 'rgba(244,240,228,0.1)',
                  color: '#F4F0E4',
                  border: '1px solid rgba(244,240,228,0.2)',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <span>{cat.emoji}</span> {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA CONTACT ───────────────────────────────────── */}
      <section className="py-24 relative overflow-hidden" style={{ backgroundColor: '#ECDCC4' }}>
        <div className="absolute inset-0 pointer-events-none">
          <DoodleStar className="absolute top-8 left-8 opacity-30 float-anim" />
          <DoodleStar className="absolute bottom-8 right-8 opacity-30 float-anim-delayed" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">🤝</div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
          >
            Ready to order or have questions?
          </h2>
          <p
            className="text-base opacity-70 mb-10 max-w-xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
          >
            Reach out to us via WhatsApp, give us a call, or drop us a message. We'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-2xl"
            style={{ backgroundColor: '#E40814', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}
