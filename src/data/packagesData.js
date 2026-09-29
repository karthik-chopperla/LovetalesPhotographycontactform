// Package & Shoot Type Data for Love Tales Photography & Films

export const SHOOT_TYPES = [
  { id: 'wedding', label: 'Wedding', image: '/images/premium.jpg', desc: 'Full wedding ceremony & festivities' },
  { id: 'pre-wedding', label: 'Pre-Wedding', image: '/images/hero.jpg', desc: 'Cinematic romantic couple portrait session' },
  { id: 'engagement', label: 'Engagement', image: '/images/classic.jpg', desc: 'Roka & engagement ring ceremony' },
  { id: 'maternity', label: 'Maternity', image: '/images/luxury.jpg', desc: 'Gentle, fine-art maternity memories' },
  { id: 'family', label: 'Family', image: '/images/classic.jpg', desc: 'Generational family portraiture' },
  { id: 'baby-shoot', label: 'Baby Shoot', image: '/images/premium.jpg', desc: 'Milestone baby & newborn portraits' },
  { id: 'other', label: 'Other', isIconOnly: true, desc: 'Custom celebrations & special events' }
];

export const WEDDING_PACKAGES = [
  {
    id: 'classic',
    name: 'Classic Wedding',
    priceDisplay: '₹2,00,000',
    priceValue: 200000,
    coverImg: '/images/classic.jpg',
    shortDesc: 'A complete wedding photography and cinematography experience for couples looking for elegant coverage of their special day.',
    highlights: [
      'Photography',
      'Cinematography',
      'Drone Coverage',
      'Edited Photos',
      'Wedding Film'
    ],
    details: {
      coverage: 'Standard Coverage: 1 Day',
      intro: 'Designed for intimacy and timeless grace, the Classic Wedding package delivers complete multi-angle coverage of your ceremony with professional color-grading and cinematic storytelling.',
      included: [
        { icon: 'camera', title: 'Photography', desc: 'Candid Photography & Traditional Portrait Coverage' },
        { icon: 'film', title: 'Cinematography', desc: 'High Definition Cinematic Video Storytelling' },
        { icon: 'drone', title: 'Drone Coverage', desc: 'Aerial Drone Highlights & Scenic Views' },
        { icon: 'church', title: 'Wedding Coverage', desc: 'Standard 1 Day Coverage (Main Rituals)' },
        { icon: 'users', title: 'Team', desc: '2 Photographers + 1 Cinematographer' },
        { icon: 'clock', title: 'Standard Coverage', desc: '1 Day Complete Event Coverage' },
        { icon: 'cog', title: 'Equipment', desc: 'Professional Cinema Gear & Lenses' },
        { icon: 'book', title: 'Album', desc: 'Handcrafted Photobook Album' },
        { icon: 'image', title: 'Edited Photos', desc: 'High-Resolution Color Graded Photos' },
        { icon: 'video', title: 'Wedding Films', desc: 'Teaser & Full Feature Film' },
        { icon: 'sparkles', title: 'Cinematic Highlights', desc: 'Short Highlight Reel' }
      ]
    }
  },
  {
    id: 'premium',
    name: 'Premium Wedding',
    priceDisplay: '₹3,00,000',
    priceValue: 300000,
    coverImg: '/images/premium.jpg',
    isRecommended: true,
    badgeText: 'MOST POPULAR',
    shortDesc: 'A complete premium wedding storytelling experience with photography, cinematography, drone coverage and cinematic deliverables.',
    highlights: [
      'Photography',
      'Cinematography',
      'Drone Coverage',
      'Premium Album',
      'Cinematic Films'
    ],
    details: {
      coverage: 'Standard Coverage: 1 Day',
      intro: 'A complete premium wedding storytelling experience with photography, cinematography, drone coverage and cinematic deliverables.',
      included: [
        { icon: 'camera', title: 'Photography', desc: 'Master Candid Photography + Fine Art Portraits' },
        { icon: 'film', title: 'Cinematography', desc: '4K Cinematic Film Production & Creative Teaser' },
        { icon: 'drone', title: 'Drone Coverage', desc: 'Included — 4K Aerial Cinematography & Venue Views' },
        { icon: 'church', title: 'Wedding Coverage', desc: 'Standard 1 Day Comprehensive Coverage' },
        { icon: 'users', title: 'Team', desc: '2 Photographers, 1 Cinematographer' },
        { icon: 'clock', title: 'Standard Coverage', desc: '1 Day Complete Coverage' },
        { icon: 'cog', title: 'Equipment', desc: 'Professional Gear (Sony FX Series & Prime Lenses)' },
        { icon: 'book', title: 'Album', desc: 'Premium Album (Flush-Mount Leatherette)' },
        { icon: 'image', title: 'Edited Photos', desc: '500+ Color-Graded High Resolution Photos' },
        { icon: 'video', title: 'Wedding Films', desc: 'Highlight Reel + Full Ceremony Film' },
        { icon: 'sparkles', title: 'Cinematic Highlights', desc: 'Short Films & Teaser Trailers' }
      ]
    }
  },
  {
    id: 'luxury',
    name: 'Luxury Wedding',
    priceDisplay: '₹5,00,000',
    priceValue: 500000,
    coverImg: '/images/luxury.jpg',
    shortDesc: 'A high-end wedding production experience designed for couples who want comprehensive coverage and premium cinematic deliverables.',
    highlights: [
      'Photography',
      'Cinematography',
      'Drone Coverage',
      'Premium Album',
      'Multiple Films'
    ],
    details: {
      coverage: 'Standard Coverage: 1 Day',
      intro: 'The pinnacle of wedding filmmaking and photography art. Directed by executive visual directors with multi-camera cinema rigs and luxury albums.',
      included: [
        { icon: 'camera', title: 'Photography', desc: 'Executive Director Team & Editorial Portraits' },
        { icon: 'film', title: 'Cinematography', desc: 'Feature Film Production Suite & Teasers' },
        { icon: 'drone', title: 'Drone Coverage', desc: 'Dual 4K Aerial Drone Coverage' },
        { icon: 'church', title: 'Wedding Coverage', desc: 'Standard 1 Day Unlimited Hours Production' },
        { icon: 'users', title: 'Team', desc: '4 Lead Photographers + 4 Cinematographers + Drone Operator' },
        { icon: 'clock', title: 'Standard Coverage', desc: '1 Day Full Event Production' },
        { icon: 'cog', title: 'Equipment', desc: 'RED / Sony Cinema Line & Anamorphic Lenses' },
        { icon: 'book', title: 'Album', desc: 'Luxury Velvet Flush Mount Albums' },
        { icon: 'image', title: 'Edited Photos', desc: '800+ Master Color-Graded Fine Art Photos' },
        { icon: 'video', title: 'Wedding Films', desc: 'Trailer + Signature Film + Full Documentary' },
        { icon: 'sparkles', title: 'Cinematic Highlights', desc: 'Multiple Short Highlights & Social Reels' }
      ]
    }
  }
];

