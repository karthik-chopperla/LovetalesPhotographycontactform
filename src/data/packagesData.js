// Package Data for Love Tales Photography & Films

export const SHOOT_TYPES = [
  { id: 'wedding', label: 'Wedding', icon: 'Heart', desc: 'Full wedding ceremony & festivities' },
  { id: 'pre-wedding', label: 'Pre-Wedding', icon: 'Camera', desc: 'Cinematic romantic couple portrait session' },
  { id: 'engagement', label: 'Engagement', icon: 'Sparkles', desc: 'Roka & engagement ring ceremony' },
  { id: 'maternity', label: 'Maternity', icon: 'UserCheck', desc: 'Gentle, fine-art maternity memories' },
  { id: 'family', label: 'Family', icon: 'Users', desc: 'Generational family portraiture' },
  { id: 'baby-shoot', label: 'Baby Shoot', icon: 'Smile', desc: 'Milestone baby & newborn portraits' },
  { id: 'other', label: 'Other', icon: 'PlusCircle', desc: 'Custom celebrations & special events' }
];

export const WEDDING_PACKAGES = [
  {
    id: 'classic',
    name: 'Classic Wedding',
    priceDisplay: '₹2,00,000',
    priceValue: 200000,
    coverImg: '/images/classic.jpg',
    isRecommended: false,
    shortDesc: 'A complete wedding photography and cinematography experience for couples looking for elegant coverage of their special day.',
    highlights: [
      'Photography',
      'Cinematography',
      'Wedding Coverage',
      'Edited Photos',
      'Wedding Film'
    ],
    details: {
      coverage: 'Standard Coverage: 1 Day',
      intro: 'Designed for intimacy and timeless grace, the Classic Wedding package delivers complete multi-angle coverage of your ceremony with professional color-grading and cinematic storytelling.',
      included: [
        { title: 'Photography', desc: 'Candid Photography & Traditional Portrait Coverage' },
        { title: 'Cinematography', desc: 'High Definition Cinematic Video Storytelling' },
        { title: 'Drone Coverage', desc: 'Available on request / optional add-on' },
        { title: 'Wedding Coverage', desc: 'Standard 1 Day Coverage (Main Rituals & Reception)' },
        { title: 'Team', desc: '2 Senior Photographers + 2 Senior Cinematographers' },
        { title: 'Equipment', desc: 'Sony Alpha FX Full-Frame Cameras & Prime Lenses' },
        { title: 'Album', desc: '1 Flush-Mount Leatherette Photobook (40 Pages)' },
        { title: 'Edited Photos', desc: '300+ Color-Graded High Resolution Photos' },
        { title: 'Wedding Films', desc: '1 Teaser (3-5 min) + 1 Full Feature Film (30-45 min)' },
        { title: 'Deliverables', desc: 'Online Cloud Gallery + Custom USB Drive' }
      ],
      deliverablesList: [
        '300+ High-Resolution Color Graded Digital Photos',
        '1 Cinematic Wedding Teaser Trailer (3–5 Minutes)',
        '1 Traditional Full Ceremony Documentary Film (30–45 Minutes)',
        '1 Premium Handcrafted Photobook (40 Pages)',
        'High-Speed Cloud Gallery Access (1-Year Retention)',
        'Custom Engraved USB Storage Drive'
      ],
      additionalInfo: 'Coverage duration is standardized for 1 event day. Outstation travel and hotel accommodations, if applicable, are arranged by the client.'
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
      intro: 'Our signature package crafted for grand celebrations. Includes 4K aerial drone perspectives, master portraiture, and dual-photobook luxury deliverables.',
      included: [
        { title: 'Photography', desc: 'Master Candid Photography + Fine Art Portraits' },
        { title: 'Cinematography', desc: '4K Cinematic Film Production & Creative Teaser' },
        { title: 'Drone Coverage', desc: 'Included — 4K Aerial Cinematography & Venue Views' },
        { title: 'Wedding Coverage', desc: 'Standard 1 Day Comprehensive Coverage' },
        { title: 'Team', desc: '3 Lead Photographers + 3 Cinematographers + 1 Drone Operator' },
        { title: 'Equipment', desc: 'Cinema-Grade Cameras, Gimbals, Slider Rigs & Audio Mics' },
        { title: 'Album', desc: '2 Premium Flush-Mount Photobooks (50 Pages Each)' },
        { title: 'Edited Photos', desc: '500+ Color-Graded High Resolution Photos' },
        { title: 'Wedding Films', desc: '1 Highlight Reel (5-7 min) + Extended Film (45-60 min)' },
        { title: 'Deliverables', desc: 'Dedicated Online Cloud Gallery + Premium Storage Drive' }
      ],
      deliverablesList: [
        '500+ Color-Graded High Resolution Digital Photos',
        '4K Cinematic Wedding Highlight Film (5–7 Minutes)',
        '4K Full Wedding Feature Documentary Film (45–60 Minutes)',
        '4K Aerial Drone Highlights & Scenic Shots',
        '2 Handcrafted Premium Flush-Mount Photobooks (50 Pages Each)',
        'Wooden Presentation Storage Box with Engraved Drive',
        'High-Speed Private Online Gallery'
      ],
      additionalInfo: 'Standard 1-Day coverage. Pre-wedding creative alignment session included. Drone flights operated strictly as permitted by local event regulations.'
    }
  },
  {
    id: 'luxury',
    name: 'Luxury Wedding',
    priceDisplay: '₹5,00,000',
    priceValue: 500000,
    coverImg: '/images/luxury.jpg',
    isRecommended: false,
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
      intro: 'The pinnacle of wedding filmmaking and photography art. Directed by executive visual directors with multi-camera cinema rigs, anamorphic lenses, and handcrafted velvet albums.',
      included: [
        { title: 'Photography', desc: 'Executive Director Candid Team + Creative Editorial Portraits' },
        { title: 'Cinematography', desc: 'Feature Film Production Suite & Same-Day Edit Preview' },
        { title: 'Drone Coverage', desc: 'Dual 4K Aerial Drone Coverage (Indoor & Outdoor)' },
        { title: 'Wedding Coverage', desc: 'Standard 1 Day Unlimited Hours Production' },
        { title: 'Team', desc: '4 Lead Photographers + 4 Cinematographers + 2 Drone Pilots + Director' },
        { title: 'Equipment', desc: 'RED / Sony Cinema Line, Anamorphic Lenses & Lighting Rigs' },
        { title: 'Album', desc: '3 Luxury Velvet Flush Mount Albums + 2 Parent Mini-Books' },
        { title: 'Edited Photos', desc: '800+ Master Color-Graded Fine Art Photos' },
        { title: 'Wedding Films', desc: 'Trailer (2 min) + Signature Film (8-10 min) + Full Documentary' },
        { title: 'Deliverables', desc: 'Custom Luxury Gift Box with SSD & Printed Fine Art Proofs' }
      ],
      deliverablesList: [
        '800+ Master Edited Fine Art Photos',
        '1 Cinematic Film Trailer (2 Minutes)',
        '1 Signature Cinema Storyboard Film (8–10 Minutes)',
        '1 Comprehensive Multi-Angle Ceremony Film',
        'Dual-Drone 4K Cinematic Aerial Angles',
        '3 Luxury Velvet Photobooks + 2 Parent Pocket Albums',
        'Handcrafted Luxury Presentation Box with High-Speed SSD',
        'Lifetime Private Cloud Gallery Access'
      ],
      additionalInfo: 'Executive creative director oversees production from pre-planning to post-production. Licensed commercial audio tracks included for all public video teasers.'
    }
  }
];
