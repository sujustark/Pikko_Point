export interface MenuItem {
  id: string
  name: string
  description: string
  image: string
  tags?: string[]
  available?: boolean
  isNew?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  emoji: string
  description: string
  items: MenuItem[]
}

// Unsplash food images – freely usable
const IMGS = {
  grilledVeg: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=400&q=80',
  grilledEgg: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&q=80',
  chicken: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&q=80',
  grilledCheese: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80',
  breadOmelette: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80',
  nuggets: 'https://images.unsplash.com/photo-1562967915-6ba607ff7d05?w=400&q=80',
  bites: 'https://images.unsplash.com/photo-1587245850333-00d7caa71d2a?w=400&q=80',
  strips: 'https://images.unsplash.com/photo-1626082894474-5a9b6bfe0f94?w=400&q=80',
  cheeseBalls: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=400&q=80',
  saltedFries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80',
  periPeriFries: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=400&q=80',
  tandooriFries: 'https://images.unsplash.com/photo-1619881589412-6e9bb50e8a97?w=400&q=80',
  loadedFries: 'https://images.unsplash.com/photo-1619881591453-16d2e1c7e77c?w=400&q=80',
  vegBurger: 'https://images.unsplash.com/photo-1550317138-10000687a72b?w=400&q=80',
  chickenBurger: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80',
  maggi: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&q=80',
  momos: 'https://images.unsplash.com/photo-1702572887741-85938ceb0eaf?w=400&q=80',
  cola: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&q=80',
  sprite: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=400&q=80',
}

export const menuData: MenuCategory[] = [
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    emoji: '🥪',
    description: 'Freshly made sandwiches with generous fillings, toasted to golden perfection.',
    items: [
      {
        id: 'grilled-veg',
        name: 'Grilled Veg',
        description: 'A hearty grilled sandwich packed with fresh vegetables, melted cheese and house sauces.',
        image: IMGS.grilledVeg,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'grilled-egg',
        name: 'Grilled Egg',
        description: 'A golden grilled sandwich filled with fluffy egg, veggies and flavourful seasoning.',
        image: IMGS.grilledEgg,
        tags: ['Egg'],
        available: true,
      },
      {
        id: 'chicken-sandwich',
        name: 'Chicken',
        description: 'Coming soon – our signature chicken sandwich is under development.',
        image: IMGS.chicken,
        tags: ['Non-Veg'],
        available: false,
      },
      {
        id: 'grilled-cheese',
        name: 'Grilled Cheese',
        description: 'Classic comfort food – a golden-grilled sandwich bursting with gooey melted cheese.',
        image: IMGS.grilledCheese,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'bread-omelette',
        name: 'Bread Omelette',
        description: 'A satisfying breakfast-style favourite – soft bread with a perfectly made omelette.',
        image: IMGS.breadOmelette,
        tags: ['Egg'],
        available: true,
      },
    ],
  },
  {
    id: 'crispy-bites',
    name: 'Crispy Bites',
    emoji: '🍗',
    description: 'Crunchy, golden and impossible to stop eating.',
    items: [
      {
        id: 'chicken-nuggets',
        name: 'Chicken Nuggets',
        description: 'Tender chicken pieces in a light, crispy coating – a crowd-pleaser every time.',
        image: IMGS.nuggets,
        tags: ['Non-Veg'],
        available: true,
      },
      {
        id: 'chicken-bites',
        name: 'Chicken Bites',
        description: 'Juicy bite-sized chicken pieces seasoned and fried to a satisfying crunch.',
        image: IMGS.bites,
        tags: ['Non-Veg'],
        available: true,
      },
      {
        id: 'chicken-strips',
        name: 'Chicken Strips',
        description: 'Long, golden strips of crispy chicken – great on their own or with a dip.',
        image: IMGS.strips,
        tags: ['Non-Veg'],
        available: true,
      },
      {
        id: 'cheese-balls',
        name: 'Cheese Balls',
        description: 'Irresistible golden balls with a crispy shell and a warm, melted cheese centre.',
        image: IMGS.cheeseBalls,
        tags: ['Veg'],
        available: true,
      },
    ],
  },
  {
    id: 'fries',
    name: 'Fries & Loaded Fries',
    emoji: '🍟',
    description: 'Perfectly cooked fries – plain, spiced or fully loaded.',
    items: [
      {
        id: 'salted-fries',
        name: 'Salted Fries',
        description: 'Classic golden fries seasoned with just the right amount of salt.',
        image: IMGS.saltedFries,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'peri-peri-fries',
        name: 'Peri Peri Fries',
        description: 'Golden fries dusted with our signature peri peri spice blend for a fiery kick.',
        image: IMGS.periPeriFries,
        tags: ['Veg', 'Spicy'],
        available: true,
      },
      {
        id: 'tandoori-fries',
        name: 'Tandoori Fries',
        description: 'Fries tossed in bold tandoori seasoning for a smoky, aromatic experience.',
        image: IMGS.tandooriFries,
        tags: ['Veg', 'Spicy'],
        available: true,
      },
      {
        id: 'loaded-fries-veg',
        name: 'Loaded Fries (Veg)',
        description: 'Crispy fries loaded with sauces, fresh toppings and melted cheese – the full experience.',
        image: IMGS.loadedFries,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'loaded-fries-chicken',
        name: 'Loaded Fries (Chicken)',
        description: 'Crispy fries topped with seasoned chicken, sauces and melted cheese.',
        image: IMGS.loadedFries,
        tags: ['Non-Veg'],
        available: true,
      },
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    emoji: '🍔',
    description: 'Satisfying burgers with fresh ingredients and flavour-packed fillings.',
    items: [
      {
        id: 'veg-burger',
        name: 'Veg Burger',
        description: 'A hearty vegetarian burger with a flavourful veg patty, fresh veggies and sauces.',
        image: IMGS.vegBurger,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'chicken-burger',
        name: 'Chicken Burger',
        description: 'A satisfying chicken burger with a juicy patty, crisp toppings and house sauces.',
        image: IMGS.chickenBurger,
        tags: ['Non-Veg'],
        available: true,
      },
    ],
  },
  {
    id: 'maggi-momos',
    name: 'Maggi & Momos',
    emoji: '🥟',
    description: 'Comforting Indian-street-food favourites, made fresh for you.',
    items: [
      {
        id: 'cheese-maggi',
        name: 'Cheese Maggi',
        description: 'Classic Maggi noodles elevated with generous melted cheese – pure comfort in a bowl.',
        image: IMGS.maggi,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'chicken-maggi',
        name: 'Chicken Maggi',
        description: 'Flavourful Maggi noodles cooked with tender chicken pieces and aromatic spices.',
        image: IMGS.maggi,
        tags: ['Non-Veg'],
        available: true,
      },
      {
        id: 'egg-maggi',
        name: 'Egg Maggi',
        description: 'Maggi noodles tossed with eggs and seasoned to perfection – a satisfying treat.',
        image: IMGS.maggi,
        tags: ['Egg'],
        available: true,
      },
      {
        id: 'plain-maggi',
        name: 'Plain Maggi',
        description: 'Simple, comforting and deeply satisfying – Maggi made the classic way.',
        image: IMGS.maggi,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'veg-momos-steamed',
        name: 'Veg Momos – Steamed',
        description: 'Soft, pillowy steamed dumplings filled with a fresh vegetable mixture.',
        image: IMGS.momos,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'veg-momos-fried',
        name: 'Veg Momos – Fried',
        description: 'Crispy on the outside, tender on the inside – fried veg dumplings you will love.',
        image: IMGS.momos,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'chicken-momos-steamed',
        name: 'Chicken Momos – Steamed',
        description: 'Steamed dumplings filled with juicy, well-seasoned chicken – light yet satisfying.',
        image: IMGS.momos,
        tags: ['Non-Veg'],
        available: true,
      },
      {
        id: 'chicken-momos-fried',
        name: 'Chicken Momos – Fried',
        description: 'Golden fried chicken dumplings with a satisfying crunch and flavourful filling.',
        image: IMGS.momos,
        tags: ['Non-Veg'],
        available: true,
      },
    ],
  },
  {
    id: 'beverages',
    name: 'Beverages',
    emoji: '🥤',
    description: 'Chilled drinks to complete your meal.',
    items: [
      {
        id: 'coca-cola',
        name: 'Coca-Cola',
        description: 'The classic refreshing cola to wash down your meal.',
        image: IMGS.cola,
        tags: ['Veg'],
        available: true,
      },
      {
        id: 'sprite',
        name: 'Sprite',
        description: 'Crisp, refreshing lemon-lime soda – the perfect companion for spicy food.',
        image: IMGS.sprite,
        tags: ['Veg'],
        available: true,
      },
    ],
  },
]

export const featuredItems = [
  { ...menuData[0].items[0], category: 'Sandwiches' },
  { ...menuData[1].items[0], category: 'Crispy Bites' },
  { ...menuData[2].items[3], category: 'Fries' },
  { ...menuData[3].items[1], category: 'Burgers' },
  { ...menuData[4].items[6], category: 'Momos' },
  { ...menuData[2].items[1], category: 'Fries' },
]

