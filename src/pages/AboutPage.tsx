import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function SectionBadge({ text }: { text: string }) {
  return (
    <div
      className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
      style={{ backgroundColor: '#ECDCC4', color: '#002858', fontFamily: 'Poppins, sans-serif' }}
    >
      {text}
    </div>
  )
}

export default function AboutPage() {
  const values = [
    { emoji: '🌿', title: 'Freshness First', text: 'We use fresh ingredients in every dish we prepare. Quality is never an afterthought.' },
    { emoji: '🎨', title: 'Flavour & Creativity', text: 'Our menu reflects a love for bold flavours, creative combinations and satisfying food.' },
    { emoji: '🤝', title: 'Community', text: 'We exist to serve our neighbourhood. Your satisfaction and trust matter deeply to us.' },
    { emoji: '📦', title: 'Convenience', text: 'As a cloud kitchen, we focus on getting great food to you quickly and reliably.' },
    { emoji: '💬', title: 'Honest Approach', text: 'We keep our menu real, our prices fair and our communication transparent.' },
    { emoji: '📈', title: 'Always Improving', text: 'We\'re constantly refining our recipes and processes so every order is better than the last.' },
  ]

  return (
    <div className="pt-16" style={{ backgroundColor: '#F4F0E4' }}>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #002858 0%, #003a7a 100%)' }}
      >
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 800 400">
            <circle cx="700" cy="50" r="200" fill="#E40814" />
            <circle cx="100" cy="350" r="150" fill="#ECDCC4" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{ backgroundColor: 'rgba(228,8,20,0.2)', color: '#F4F0E4', border: '1px solid rgba(228,8,20,0.4)', fontFamily: 'Poppins, sans-serif' }}
          >
            👋 Get to Know Us
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Fredoka, sans-serif', color: '#F4F0E4' }}
          >
            About <span style={{ color: '#E40814' }}>PIKKO POINT</span>
          </h1>
          <p
            className="text-lg sm:text-xl opacity-80 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#F4F0E4' }}
          >
            A cloud kitchen built on a simple belief – that good food should be fresh, honest and genuinely enjoyable.
          </p>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionBadge text="🏠 Our Beginning" />
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
              >
                Where it all started
              </h2>
              <p
                className="text-base leading-relaxed mb-5 opacity-80"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
              >
                PIKKO POINT was born from a simple desire – to make food that people genuinely look forward to. Not just any food, but the kind that feels comforting, satisfying and worth coming back for.
              </p>
              <p
                className="text-base leading-relaxed mb-5 opacity-80"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
              >
                As a cloud kitchen, we focus entirely on what matters most: the food. Without the distractions of a dine-in setup, every bit of our energy goes into perfecting recipes, sourcing fresh ingredients and making sure every order leaves our kitchen at its best.
              </p>
              <p
                className="text-base leading-relaxed opacity-80"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
              >
                Whether you're craving a crispy sandwich, comforting maggi or some loaded fries, we're here to make your meal memorable.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1540914124281-342587941389?w=500&q=80"
                  alt="Sandwich preparation"
                  className="rounded-3xl h-56 w-full object-cover shadow-xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80"
                  alt="Food preparation"
                  className="rounded-3xl h-56 w-full object-cover shadow-xl mt-8"
                />
              </div>
              <div
                className="absolute -bottom-6 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-3xl shadow-2xl float-anim"
                style={{ backgroundColor: '#E40814' }}
              >
                🍴
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOD PHILOSOPHY ───────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#ECDCC4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700&q=80"
                  alt="Fresh food"
                  className="rounded-3xl w-full h-80 object-cover shadow-2xl"
                />
                <div
                  className="absolute inset-0 rounded-3xl"
                  style={{ background: 'linear-gradient(to top, rgba(0,40,88,0.3), transparent)' }}
                />
                <div
                  className="absolute bottom-6 left-6 px-5 py-3 rounded-2xl backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(0,40,88,0.8)', color: '#F4F0E4' }}
                >
                  <p className="text-sm font-semibold" style={{ fontFamily: 'Fredoka, sans-serif', fontSize: '1rem' }}>
                    Fresh. Flavourful. For you.
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <SectionBadge text="🧑‍🍳 Our Philosophy" />
              <h2
                className="text-4xl sm:text-5xl font-bold mb-6 leading-tight"
                style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
              >
                Food made with intention
              </h2>
              <p
                className="text-base leading-relaxed mb-5 opacity-80"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
              >
                Our food philosophy is straightforward: use real ingredients, build real flavour and serve food that people genuinely enjoy.
              </p>
              <p
                className="text-base leading-relaxed mb-5 opacity-80"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
              >
                We don't believe in cutting corners on what goes into your food. Every dish on our menu has been thought through, tested and refined before it reaches you.
              </p>
              <p
                className="text-base leading-relaxed opacity-80"
                style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
              >
                We also believe in keeping it honest – no inflated promises, no overloaded menus. Just a focused selection of dishes we're genuinely proud to serve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#F4F0E4' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionBadge text="💡 What We Stand For" />
            <h2
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
            >
              Our values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ emoji, title, text }, i) => (
              <div
                key={i}
                className="p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                style={{ backgroundColor: '#fff', border: '1px solid #ECDCC4' }}
              >
                <div className="text-3xl mb-4">{emoji}</div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm leading-relaxed opacity-70"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #002858 0%, #003a7a 100%)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="inline-block text-xs font-semibold tracking-widest uppercase mb-4 px-3 py-1 rounded-full"
            style={{ backgroundColor: 'rgba(244,240,228,0.1)', color: '#ECDCC4', fontFamily: 'Poppins, sans-serif', border: '1px solid rgba(244,240,228,0.2)' }}
          >
            🎯 What to Expect
          </div>
          <h2
            className="text-4xl sm:text-5xl font-bold mb-8"
            style={{ fontFamily: 'Fredoka, sans-serif', color: '#F4F0E4' }}
          >
            When you order from us
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { num: '01', title: 'Fresh preparation', text: 'Your order is freshly prepared – not reheated or pre-made hours in advance.' },
              { num: '02', title: 'Genuine flavour', text: 'Each dish is seasoned and prepared to taste great, not just look great.' },
              { num: '03', title: 'Honest service', text: 'We\'re upfront about what\'s on the menu and always happy to help with questions.' },
            ].map(({ num, title, text }) => (
              <div
                key={num}
                className="p-6 rounded-3xl text-left"
                style={{ backgroundColor: 'rgba(244,240,228,0.07)', border: '1px solid rgba(244,240,228,0.12)' }}
              >
                <div
                  className="text-4xl font-bold mb-4 opacity-30"
                  style={{ fontFamily: 'Fredoka, sans-serif', color: '#E40814' }}
                >
                  {num}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: 'Fredoka, sans-serif', color: '#F4F0E4' }}
                >
                  {title}
                </h3>
                <p
                  className="text-sm opacity-70 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#F4F0E4' }}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>

          <Link
            to="/menu"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105"
            style={{ backgroundColor: '#E40814', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
          >
            See Our Menu <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  )
}

