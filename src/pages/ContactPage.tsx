import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function FacebookIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

// ── Editable contact details – fill these in when available ──
const CONTACT = {
  phone: '', // e.g. '+91 98765 43210'
  whatsapp: '', // e.g. '+91 98765 43210'
  whatsappLink: '', // e.g. 'https://wa.me/919876543210'
  email: '', // e.g. 'hello@pikkopoint.com'
  address: '', // e.g. '123, Main Street, Your City – 400001'
  mapsLink: '', // e.g. 'https://maps.google.com/...'
  hours: {
    weekdays: '', // e.g. 'Monday – Saturday: 11:00 AM – 10:00 PM'
    weekends: '', // e.g. 'Sunday: 12:00 PM – 9:00 PM'
  },
  instagram: '', // e.g. 'https://instagram.com/pikkopoint'
  facebook: '', // e.g. 'https://facebook.com/pikkopoint'
}

function ContactCard({
  icon,
  title,
  value,
  link,
  linkLabel,
  placeholder,
}: {
  icon: React.ReactNode
  title: string
  value?: string
  link?: string
  linkLabel?: string
  placeholder: string
}) {
  return (
    <div
      className="p-6 rounded-3xl transition-all hover:shadow-lg"
      style={{ backgroundColor: '#fff', border: '1px solid #ECDCC4' }}
    >
      <div
        className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
        style={{ backgroundColor: '#002858', color: '#F4F0E4' }}
      >
        {icon}
      </div>
      <h3
        className="text-base font-semibold mb-1"
        style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858', fontSize: '1.1rem' }}
      >
        {title}
      </h3>
      {value ? (
        <>
          <p
            className="text-sm opacity-80 mb-2"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
          >
            {value}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold transition-all hover:gap-2"
              style={{ color: '#E40814', fontFamily: 'Poppins, sans-serif' }}
            >
              {linkLabel ?? 'Open'} <ExternalLink size={12} />
            </a>
          )}
        </>
      ) : (
        <p
          className="text-sm opacity-40 italic"
          style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
        >
          {placeholder}
        </p>
      )}
    </div>
  )
}

export default function ContactPage() {
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
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
            style={{ backgroundColor: 'rgba(228,8,20,0.2)', color: '#F4F0E4', border: '1px solid rgba(228,8,20,0.4)', fontFamily: 'Poppins, sans-serif' }}
          >
            💬 Say Hello
          </div>
          <h1
            className="text-5xl sm:text-6xl font-bold mb-6"
            style={{ fontFamily: 'Fredoka, sans-serif', color: '#F4F0E4' }}
          >
            Get In <span style={{ color: '#E40814' }}>Touch</span>
          </h1>
          <p
            className="text-lg opacity-80 max-w-xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#F4F0E4' }}
          >
            Have a question, want to place an order, or just want to say hi? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS ─────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">

            {/* Phone */}
            <ContactCard
              icon={<Phone size={20} />}
              title="Call Us"
              value={CONTACT.phone || undefined}
              link={CONTACT.phone ? `tel:${CONTACT.phone}` : undefined}
              linkLabel="Tap to call"
              placeholder="Phone number to be added"
            />

            {/* WhatsApp */}
            <ContactCard
              icon={<MessageCircle size={20} />}
              title="WhatsApp"
              value={CONTACT.whatsapp || undefined}
              link={CONTACT.whatsappLink || undefined}
              linkLabel="Open WhatsApp"
              placeholder="WhatsApp number to be added"
            />

            {/* Email */}
            <ContactCard
              icon={<Mail size={20} />}
              title="Email Us"
              value={CONTACT.email || undefined}
              link={CONTACT.email ? `mailto:${CONTACT.email}` : undefined}
              linkLabel="Send email"
              placeholder="Email address to be added"
            />

            {/* Address */}
            <ContactCard
              icon={<MapPin size={20} />}
              title="Our Kitchen"
              value={CONTACT.address || undefined}
              link={CONTACT.mapsLink || undefined}
              linkLabel="View on Google Maps"
              placeholder="Location to be added"
            />

            {/* Hours */}
            <div
              className="p-6 rounded-3xl transition-all hover:shadow-lg"
              style={{ backgroundColor: '#fff', border: '1px solid #ECDCC4' }}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#002858', color: '#F4F0E4' }}
              >
                <Clock size={20} />
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858', fontSize: '1.1rem' }}
              >
                Opening Hours
              </h3>
              {CONTACT.hours.weekdays ? (
                <div className="space-y-1">
                  <p className="text-sm opacity-80" style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}>
                    {CONTACT.hours.weekdays}
                  </p>
                  {CONTACT.hours.weekends && (
                    <p className="text-sm opacity-80" style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}>
                      {CONTACT.hours.weekends}
                    </p>
                  )}
                </div>
              ) : (
                <p className="text-sm opacity-40 italic" style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}>
                  Hours to be confirmed
                </p>
              )}
            </div>

            {/* Social */}
            <div
              className="p-6 rounded-3xl transition-all hover:shadow-lg"
              style={{ backgroundColor: '#fff', border: '1px solid #ECDCC4' }}
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                style={{ backgroundColor: '#002858', color: '#F4F0E4' }}
              >
                <InstagramIcon size={20} />
              </div>
              <h3
                className="text-base font-semibold mb-3"
                style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858', fontSize: '1.1rem' }}
              >
                Follow Us
              </h3>
              <div className="flex gap-3">
                <a
                  href={CONTACT.instagram || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: '#002858', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
                >
                  <InstagramIcon size={14} /> Instagram
                </a>
                <a
                  href={CONTACT.facebook || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: '#002858', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
                >
                  <FacebookIcon size={14} /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div
            className="rounded-3xl overflow-hidden h-72 flex items-center justify-center"
            style={{ backgroundColor: '#ECDCC4', border: '2px dashed #002858' }}
          >
            {CONTACT.mapsLink ? (
              <iframe
                src={CONTACT.mapsLink}
                className="w-full h-full border-0"
                title="PIKKO POINT Location"
                loading="lazy"
              />
            ) : (
              <div className="text-center px-6">
                <MapPin size={40} className="mx-auto mb-4 opacity-30" style={{ color: '#002858' }} />
                <p
                  className="text-base font-semibold opacity-50"
                  style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
                >
                  Map will appear here once the location is confirmed
                </p>
                <p
                  className="text-xs opacity-40 mt-2"
                  style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
                >
                  Add the Google Maps embed link in <code>src/pages/ContactPage.tsx</code>
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA BUTTONS ───────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: '#ECDCC4' }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
          >
            Ready to order?
          </h2>
          <p
            className="text-base opacity-70 mb-10"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
          >
            Reach out to us on WhatsApp or give us a call and we'll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={CONTACT.whatsappLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: '#25D366', color: '#fff', fontFamily: 'Poppins, sans-serif' }}
            >
              <MessageCircle size={20} /> Message on WhatsApp
            </a>
            <a
              href={CONTACT.phone ? `tel:${CONTACT.phone}` : '#'}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-all hover:scale-105 border-2"
              style={{ borderColor: '#002858', color: '#002858', fontFamily: 'Poppins, sans-serif' }}
            >
              <Phone size={20} /> Call Us
            </a>
          </div>
          <p
            className="text-xs mt-6 opacity-50"
            style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
          >
            Contact details will be live once the kitchen is set up.
          </p>
        </div>
      </section>
    </div>
  )
}
