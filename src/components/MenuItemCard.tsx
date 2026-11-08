interface TagProps {
  label: string
}

function Tag({ label }: TagProps) {
  const style =
    label === 'Veg'
      ? { backgroundColor: '#dcfce7', color: '#16a34a' }
      : label === 'Non-Veg'
      ? { backgroundColor: '#fee2e2', color: '#dc2626' }
      : label === 'Egg'
      ? { backgroundColor: '#fef9c3', color: '#ca8a04' }
      : label === 'Spicy'
      ? { backgroundColor: '#ffedd5', color: '#ea580c' }
      : { backgroundColor: '#e0e7ff', color: '#4f46e5' }

  return (
    <span
      className="text-xs font-medium px-2 py-0.5 rounded-full"
      style={{ ...style, fontFamily: 'Poppins, sans-serif' }}
    >
      {label}
    </span>
  )
}

interface MenuItemCardProps {
  item: {
    id: string
    name: string
    description: string
    image: string
    tags?: string[]
    available?: boolean
  }
  compact?: boolean
}

export default function MenuItemCard({ item, compact }: MenuItemCardProps) {
  const isUnavailable = item.available === false

  return (
    <div
      className={`rounded-3xl overflow-hidden transition-all duration-300 group ${
        isUnavailable ? 'opacity-60' : 'hover:-translate-y-1 hover:shadow-xl'
      }`}
      style={{ backgroundColor: '#fff', border: '1px solid #ECDCC4' }}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${compact ? 'h-44' : 'h-52'}`}>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {isUnavailable && (
          <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(0,40,88,0.6)' }}>
            <span
              className="px-4 py-2 rounded-full text-xs font-semibold"
              style={{ backgroundColor: '#002858', color: '#F4F0E4', fontFamily: 'Poppins, sans-serif' }}
            >
              Coming Soon
            </span>
          </div>
        )}
        {/* Tags overlay */}
        {item.tags && item.tags.length > 0 && !isUnavailable && (
          <div className="absolute top-3 left-3 flex gap-1 flex-wrap">
            {item.tags.map(tag => <Tag key={tag} label={tag} />)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3
          className="text-lg font-bold mb-2"
          style={{ fontFamily: 'Fredoka, sans-serif', color: '#002858' }}
        >
          {item.name}
        </h3>
        <p
          className="text-xs leading-relaxed opacity-70"
          style={{ fontFamily: 'Poppins, sans-serif', color: '#002858' }}
        >
          {item.description}
        </p>
      </div>
    </div>
  )
}

