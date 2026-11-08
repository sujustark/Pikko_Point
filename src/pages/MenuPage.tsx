import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { menuData } from '../data/menuData'
import MenuItemCard from '../components/MenuItemCard'

export default function MenuPage() {
  const location = useLocation()
  const [activeCategory, setActiveCategory] = useState(menuData[0].id)

  useEffect(() => {
    const hash = location.hash.replace('#', '')
    if (hash && menuData.find(c => c.id === hash)) {
      setActiveCategory(hash)
    }
  }, [location.hash])

  const currentCategory = menuData.find(c => c.id === activeCategory) ?? menuData[0]

  return (
    <div className="pt-16" style={{ backgroundColor: '#F4F0E4' }}>
      {/* ── PAGE HERO ─────────────────────────────────────── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #002858 0%, #003a7a 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 300">
            <circle cx="750" cy="-50" r="200" fill="#E40814" />
            <circle cx="50" cy="300" r="150" fill="#ECDCC4" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{ backgroundColor: 'rgba(228,8,20,0.2)', color: '#F4F0E4', border: '1px solid rgba(228,8,20,0.4)', fontFamily: 'Poppins, sans-serif' }}
          >
            🍴 Our Menu
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-4"
            style={{ fontFamily: 'Fredoka, sans-serif', color: '#F4F0E4' }}
          >
            What's cooking? <span style={{ color: '#E40814' }}>Everything.</span>
          </h1>
          <p
            className="text-base sm:text-lg opacity-80 max-w-xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#F4F0E4' }}
          >
            From crispy sandwiches to comforting momos – browse our full menu and find your next favourite.
          </p>
        </div>
      </section>

      {/* ── STICKY CATEGORY TABS ──────────────────────────── */}
      <div
        className="sticky z-30 shadow-sm"
        style={{ top: '64px', backgroundColor: '#002858' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {menuData.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeCategory === cat.id
                    ? 'shadow-lg scale-105'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: activeCategory === cat.id ? '#E40814' : 'rgba(244,240,228,0.1)',
                  color: '#F4F0E4',
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                <span>{cat.emoji}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORY CONTENT ──────────────────────────────── */}
      <section className="py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category header */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-3">
              <span className="text-5xl">{currentCategory.emoji}</span>
              <div>
                <h2
                  className="text-4xl font-bold"
                  style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
                >
                  {currentCategory.name}
                </h2>
                <p
                  className="text-sm opacity-70 mt-1"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
                >
                  {currentCategory.description}
                </p>
              </div>
            </div>
            <div className="h-1 w-16 rounded-full" style={{ backgroundColor: '#E40814' }} />
          </div>

          {/* Items grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentCategory.items.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>

          {/* Category note (for Sandwiches – chicken hidden note) */}
          {currentCategory.id === 'sandwiches' && (
            <div
              className="mt-8 p-4 rounded-2xl text-sm"
              style={{
                backgroundColor: '#ECDCC4',
                color: '#002858',
                fontFamily: 'Poppins, sans-serif',
                border: '1px solid #ECDCC4',
              }}
            >
              <span className="font-semibold">📝 Note:</span> The Chicken Sandwich is currently unavailable as we're perfecting the recipe. Watch this space!
            </div>
          )}

          {/* Schezwan note for Maggi & Momos */}
          {currentCategory.id === 'maggi-momos' && (
            <div
              className="mt-8 p-4 rounded-2xl text-sm"
              style={{
                backgroundColor: '#ECDCC4',
                color: '#002858',
                fontFamily: 'Poppins, sans-serif',
                border: '1px solid #ECDCC4',
              }}
            >
              <span className="font-semibold">🌶️ Add-on:</span> Schezwan sauce availability will be confirmed soon – contact us for details.
            </div>
          )}
        </div>
      </section>

      {/* ── ALL CATEGORIES OVERVIEW ───────────────────────── */}
      <section className="py-16" style={{ backgroundColor: '#ECDCC4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-3xl font-bold text-center mb-10"
            style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
          >
            Browse all categories
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {menuData.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                className={`flex flex-col items-center gap-2 p-5 rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                  activeCategory === cat.id ? 'ring-2 shadow-lg' : ''
                }`}
                style={{
                  backgroundColor: activeCategory === cat.id ? '#002858' : '#fff',
                  color: activeCategory === cat.id ? '#F4F0E4' : '#002858',
                  fontFamily: 'Poppins, sans-serif',
                  outline: activeCategory === cat.id ? '2px solid #E40814' : 'none',
                }}
              >
                <span className="text-3xl">{cat.emoji}</span>
                <span className="text-xs font-semibold text-center leading-tight">{cat.name}</span>
                <span
                  className="text-xs opacity-60"
                  style={{ color: activeCategory === cat.id ? '#ECDCC4' : '#002858' }}
                >
                  {cat.items.filter(i => i.available !== false).length} items
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING NOTE ──────────────────────────────────── */}
      <section className="py-10" style={{ backgroundColor: '#F4F0E4' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div
            className="p-6 rounded-3xl"
            style={{ backgroundColor: '#fff', border: '1px solid #ECDCC4' }}
          >
            <p
              className="text-sm opacity-70 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
            >
              💬 <strong>Menu prices are available on request.</strong> Contact us via WhatsApp or phone to get the latest pricing. Menu items and availability may change.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
