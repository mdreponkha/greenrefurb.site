import {
  ServiceItem,
  ProjectItem,
  GalleryItem,
  TestimonialItem,
  SiteSettings,
  HomepageContent,
  PageSEO,
  TeamMember,
  ContactEnquiry,
} from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    slug: 'interior-painting',
    title: 'Interior Painting',
    shortDescription: 'Flawless wall, ceiling, and woodwork finishes using premium eco-friendly paints and meticulous surface prep.',
    fullDescription: 'Our interior painting service transforms residential and commercial interiors across London. We take the time to properly protect furniture and floors, thoroughly prepare surfaces (filling, sanding, priming), and apply premium paints for smooth, durable, and vibrant finishes.',
    icon: 'Paintbrush',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    category: 'painting',
    features: [
      'Comprehensive wall and ceiling preparation & repair',
      'Woodwork, skirting boards, door frames, and sash window painting',
      'Dustless sanding technology for a clean home environment',
      'Colour consultation and specialist finish options (eggshell, matt, satin)',
      'Low-VOC, child- and pet-friendly paint selections'
    ],
    benefits: [
      'Increases interior property value and aesthetic appeal',
      'Protects walls against moisture and daily wear-and-tear',
      'Pristine edges, crisp lines, and zero roller streaks',
      'Fast, tidy, and punctual turnaround'
    ],
    whatWeProvide: [
      'Full room protection with clean plastic and heavy-duty dustsheets',
      'Crack filling, plaster skim patching, and caulk sealing',
      'Undercoat primer application where necessary',
      'Two full top coats of trade-grade paint',
      'Complete end-of-day clean-up'
    ],
    faqs: [
      {
        question: 'Do you move furniture before painting?',
        answer: 'Yes, our team carefully moves furniture to the centre of the room and covers it completely with protective plastic sheets.'
      },
      {
        question: 'Can you help choose the right paint colours?',
        answer: 'Absolutely. We offer tailored colour consultations and sample testing to ensure the shades suit your natural light and decor.'
      },
      {
        question: 'How long does an average 3-bedroom house interior take?',
        answer: 'Typically, a full interior takes between 4 to 7 working days depending on surface condition and preparatory requirements.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 1
  },
  {
    id: 'srv-2',
    slug: 'exterior-painting',
    title: 'Exterior Painting',
    shortDescription: 'Weather-resistant exterior masonry, render, fascias, and timber painting designed for British weather conditions.',
    fullDescription: 'Protect and elevate your property curb appeal with our specialized exterior decorating service. We work on London townhouses, Victorian terraces, suburban detached homes, and commercial premises using durable, micro-porous masonry coatings and weather-shield paints.',
    icon: 'Brush',
    image: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80',
    category: 'painting',
    features: [
      'Exterior masonry, brickwork, render, and pebble-dash painting',
      'Timber fascias, soffits, front doors, and bargeboards',
      'Cast iron and metal railings, downpipes, and rainwater goods',
      'Safe scaffold and tower setup complying with UK health and safety'
    ],
    benefits: [
      'Shields your building fabric from frost, UV rays, and rain ingress',
      'Dramatically elevates street appeal and prospective resale value',
      'Guaranteed up to 10-15 years weather protection with premium coatings',
      'Prevents costly damp penetrations and brick spalling'
    ],
    whatWeProvide: [
      'High-pressure wash down and fungicidal anti-mould wash',
      'Chipped paint scraping and structural crack repair',
      'Stabilising primer treatment on powdery substrates',
      'Minimum two coats of Weathershield / Dulux Trade Exterior'
    ],
    faqs: [
      {
        question: 'When is the best time of year to paint exteriors in the UK?',
        answer: 'We typically carry out exterior projects between April and October when temperatures stay consistently above 8°C and rain chances are lower.'
      },
      {
        question: 'Do you arrange scaffolding?',
        answer: 'Yes, we manage complete scaffolding permits, erection, and dismantling with licensed scaffolding contractors.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 2
  },
  {
    id: 'srv-3',
    slug: 'residential-painting',
    title: 'Residential Painting',
    shortDescription: 'Transform your home with precision, care, and high-quality craftsmanship — from single-room refreshes to full renovations.',
    fullDescription: 'Transform your home with professional residential painting services from Green Refurb. We bring precision, care, and high-quality craftsmanship to every project — from single-room refreshes to full property renovations. Our goal is to create beautiful, long-lasting finishes that make your home feel welcoming, comfortable, and truly yours. We have helped countless homeowners refresh their interiors and improve their property curb appeal. Whether you are preparing to sell or simply want to enjoy a more stylish living space, our team delivers results you can see and quality you can trust.',
    icon: 'Home',
    image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-1-1024x768.jpg',
    category: 'painting',
    features: [
      'Interior wall and ceiling painting',
      'Exterior painting and weather protection',
      'Kitchen cabinet painting',
      'Doors, trims, and architectural woodwork',
      'Wallpaper removal and flawless hanging',
      'Plaster surface preparation and crack repairs',
      'Feature walls and designer decorative finishes',
      'Whole-home and apartment repainting'
    ],
    benefits: [
      'Exceptional Quality: Premium paints and industry-leading techniques ensure smooth, flawless, and durable results.',
      'Clean & Respectful Work: We treat your home with highest respect, ensuring complete masking of furniture and spotless clean-up.',
      'Personalised Approach: Colour guidance, material recommendations, and a tailored plan based on your style and budget.',
      'Attention to Detail: Careful surface preparation and perfecting the finish to achieve a consistent master result.'
    ],
    whatWeProvide: [
      'Free in-person home survey & itemised transparent quote',
      'Complete carpet, floor, and furniture protection masking',
      'Plaster crack repairs, filling, and dustless sanding',
      'Two full top coats of trade-grade paint (Dulux Heritage, Farrow & Ball)',
      'Full room tidying, clean-down, and daily vacuuming'
    ],
    faqs: [
      {
        question: 'Can we stay in the house while you paint?',
        answer: 'Yes! We work room-by-room to ensure you always have functional living space, and we tidy thoroughly every evening.'
      },
      {
        question: 'What paint brands do you use for residential projects?',
        answer: 'We work with top UK designer and trade brands including Dulux Heritage, Farrow & Ball, Little Greene, and Johnstone’s Trade.'
      }
    ],
    galleryImages: [
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-1-1024x768.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-2-1024x768.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-3-1024x768.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-4-1024x1024.jpg'
    ],
    published: true,
    order: 3
  },
  {
    id: 'srv-4',
    slug: 'commercial-painting',
    title: 'Commercial Painting',
    shortDescription: 'High-quality commercial painting services designed to refresh, protect, and enhance your business space across London.',
    fullDescription: 'At Green Refurb, we provide high-quality commercial painting services designed to refresh, protect, and enhance your business space. Whether you manage an office, retail store, restaurant, warehouse, or any other commercial property, we deliver professional results that improve both appearance and durability. Green Refurb is committed to delivering reliable, high-quality commercial painting services for businesses of all sizes. Our focus on excellent workmanship, attention to detail, and customer satisfaction has helped us build lasting relationships with business owners, property managers, and commercial clients.',
    icon: 'Building2',
    image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-1-768x1024.jpg',
    category: 'painting',
    features: [
      'Interior & exterior commercial painting',
      'Office and workspace repainting',
      'Retail and hospitality painting',
      'Industrial coatings and protective finishes',
      'Surface preparation and minor plaster repairs',
      'Floor painting and specialist coatings',
      'Colour consultation',
      'Planned maintenance and touch-up services'
    ],
    benefits: [
      'Professional Finish: Experienced painters using premium-quality materials and proven techniques to deliver smooth, durable, and professional results.',
      'Minimal Disruption: Flexible scheduling, including evenings and weekends, to minimise disruption to your daily business operations.',
      'Tailored Solutions: Customised painting solutions that suit your budget, schedule, and business requirements.',
      'High Safety Standards: Strict health and safety procedures to ensure a clean, safe, and efficient working environment.'
    ],
    whatWeProvide: [
      'Commercial contract pricing and phased scheduling',
      'Durable paint specifications engineered for heavy footfall and high-traffic areas',
      'Full RAMS (Risk Assessments & Method Statements) and dedicated team supervisor',
      'Out-of-hours shifts (evenings, overnight, bank holidays)',
      'Post-completion inspection and planned maintenance contracts'
    ],
    faqs: [
      {
        question: 'Do you work outside normal office hours?',
        answer: 'Yes, we frequently carry out commercial contracts during evenings, overnight, and over bank holiday weekends to prevent disruption.'
      },
      {
        question: 'Do you supply health and safety documentation?',
        answer: 'Yes, we provide full Risk Assessments, Method Statements (RAMS), and public liability insurance documentation prior to commencing any commercial works.'
      }
    ],
    galleryImages: [
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-1-768x1024.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-2-768x1024.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-3-768x1024.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-4-768x1024.jpg'
    ],
    published: true,
    order: 4
  },
  {
    id: 'srv-5',
    slug: 'wallpapering',
    title: 'Wallpapering',
    shortDescription: 'Precision wallpaper hanging for designer wallcoverings, murals, textured vinyl, and classic feature walls.',
    fullDescription: 'Wallpaper hanging requires exacting mathematics, surface preparation, and steady craftsmanship. Our master decorators are experienced with luxury British and European designer brands including Farrow & Ball, Cole & Son, Morris & Co., and bespoke printed wall murals.',
    icon: 'Layers',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
    category: 'painting',
    features: [
      'Specialist luxury papers: grasscloth, metallic foil, vinyl, and silks',
      'Flawless pattern matching across doors, windows, and angled returns',
      'Wide-format feature wall murals and digital graphics',
      'Old wallpaper stripping and lining paper installation'
    ],
    benefits: [
      'Zero seam separation, bubbling, or pattern misalignment',
      'Protection of expensive luxury papers through professional handling',
      'Provides rich acoustic warmth and textural depth to rooms'
    ],
    whatWeProvide: [
      'Inspection of substrate and cross-lining with 1200-1400 grade lining paper',
      'Precision plumb-line setup and laser alignment',
      'High-grade anti-microbial adhesive application'
    ],
    faqs: [
      {
        question: 'Do I need lining paper before wallpapering?',
        answer: 'In most older UK properties, lining paper is highly recommended as it creates an even porosity, absorbs minor wall imperfections, and ensures seams remain tight.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 5
  },
  {
    id: 'srv-6',
    slug: 'home-improvements',
    title: 'Home Improvements',
    shortDescription: 'Complete residential upgrades, room reconfigurations, plastering, tiling, and turnkey enhancements.',
    fullDescription: 'Whether updating a newly purchased home or modernising an existing space, our home improvement team combines multiple skilled trades under one roof to deliver seamless interior renovations on schedule and on budget.',
    icon: 'Wrench',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    category: 'refurbishment',
    features: [
      'Room renovations and open-plan conversions',
      'Plaster skim coating, dry-lining, and partition walls',
      'Ceramic, porcelain, and stone wall & floor tiling',
      'Skirting, architrave, and door replacement'
    ],
    benefits: [
      'Single point of contact for all trade requirements',
      'Quality inspected at every milestone',
      'Clear timelines and transparent milestone payments'
    ],
    whatWeProvide: [
      'Architectural planning support and building regulations guidance',
      'Full site preparation, waste removal, and certified disposal',
      'Comprehensive finishing and handover inspection'
    ],
    faqs: [
      {
        question: 'Do you manage building control if needed?',
        answer: 'Yes, we work alongside certified building control officers when structural modifications or trade certifications are needed.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 6
  },
  {
    id: 'srv-7',
    slug: 'carpentry',
    title: 'Carpentry & Joinery',
    shortDescription: 'Custom architectural woodwork, timber stud walls, door hanging, panelling, and second-fix joinery.',
    fullDescription: 'Our skilled London carpenters create bespoke timber elements that bring character and lasting utility to your home. From heritage Victorian mouldings and acoustic wall panelling to hardwood flooring and bespoke partition screens.',
    icon: 'Hammer',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    category: 'carpentry',
    features: [
      'Internal and external door hanging with mortice lock fitting',
      'Bespoke MDF/hardwood wall panelling (Shaker, slat, Georgian)',
      'Engineered hardwood and laminate flooring installation',
      'Staircase refurbishments, handrails, and spindles'
    ],
    benefits: [
      'Precise joinery that fits non-standard London room dimensions',
      'Premium timber and durable eco-friendly board materials',
      'Adds authentic architectural character to your rooms'
    ],
    whatWeProvide: [
      'Detailed site measurements and 3D layout sketches',
      'Off-site precision cutting and on-site expert assembly',
      'Seamless caulking, sanding, and primed paint-ready finish'
    ],
    faqs: [
      {
        question: 'Can you install acoustic wood slat wall panels?',
        answer: 'Yes, acoustic wood slat walls with felt backing are one of our most requested contemporary features for living rooms and media walls.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 7
  },
  {
    id: 'srv-8',
    slug: 'electrical',
    title: 'Electrical Services',
    shortDescription: 'Certified domestic electrical installations, LED lighting design, consumer units, and rewires.',
    fullDescription: 'Our certified electricians deliver safe, efficient electrical installations compliant with BS 7671 UK Wiring Regulations. From energy-saving architectural LED lighting and smart home switches to complete consumer unit upgrades and full rewires.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
    category: 'trades',
    features: [
      'Energy-efficient LED downlights and architectural cove lighting',
      'Smart home lighting controls (Lutron, Philips Hue, dimmer switches)',
      'Consumer unit (fuse board) replacements with surge protection',
      'Kitchen and bathroom appliance wiring & extractor fan fitting'
    ],
    benefits: [
      'Fully qualified Part P / NICEIC compliant electricians',
      'Minor Works and Electrical Installation Certificates provided',
      'Lower energy bills through modern LED and smart control systems'
    ],
    whatWeProvide: [
      'Pre-work safety testing and load capacity verification',
      'Neat chasing and conduit installation with minimal wall disturbance',
      'Official Electrical Safety Certificate upon completion'
    ],
    faqs: [
      {
        question: 'Do you provide safety certificates for landlords?',
        answer: 'Yes, we carry out EICR (Electrical Installation Condition Reports) and issue legal compliance certificates.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1565636406456-91e843644bb3?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 8
  },
  {
    id: 'srv-9',
    slug: 'plumbing',
    title: 'Plumbing Services',
    shortDescription: 'Bathroom fitting, radiator replacement, pipework reconfiguration, and emergency leak resolution.',
    fullDescription: 'Reliable plumbing is fundamental to any successful refurbishment. Green Refurb provides certified plumbing services including bathroom suites, designer radiators, underfloor heating, unvented cylinders, and responsive emergency repairs across South London and Surrey borders.',
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&w=1200&q=80',
    category: 'trades',
    features: [
      'Full bathroom suite installations (walk-in showers, freestanding baths)',
      'Designer column radiators and heated towel rails',
      'Water pressure boosting and shower pump installations',
      'Leak detection, pipe repairs, and tap replacements'
    ],
    benefits: [
      'Gas Safe and WRAS compliant plumbers',
      'Guaranteed leak-free installations with pressure testing',
      'Clean soldering and tidy concealed pipework'
    ],
    whatWeProvide: [
      'Site water pressure assessment and cylinder advice',
      'Removal and eco-friendly disposal of old sanitaryware',
      'Complete installation and multi-point pressure testing'
    ],
    faqs: [
      {
        question: 'Can you install a walk-in shower in a small London bathroom?',
        answer: 'Yes, we specialize in space-maximising wet rooms and low-profile shower enclosures tailored for compact bathrooms.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 9
  },
  {
    id: 'srv-cep',
    slug: 'carpentry-electric-plumbing',
    title: 'Carpentry, Electric & Plumbing',
    shortDescription: 'Expert Carpentry, Electrical, and Plumbing solutions providing a truly seamless renovation experience across London.',
    fullDescription: 'At Green Refurb, we believe that a beautiful home is built on more than just a fresh coat of paint. To provide our clients in London with a truly seamless renovation experience, we have expanded our core decorating services to include expert Carpentry, Electrical, and Plumbing solutions. Instead of dealing with multiple subcontractors, delays, and miscommunication, you can rely on one trusted, professional team to manage your entire project from start to finish. Our qualified tradespeople work in harmony to transform your living spaces safely, efficiently, and to the highest industry standards.',
    icon: 'Hammer',
    image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/closet-with-wardrobe.jpg',
    category: 'trades',
    features: [
      'Built-in Furniture: Custom wardrobes, alcove shelving units, and cupboards tailored to your room geometry',
      'Flooring: Installation of premium laminate, engineered wood, and solid hardwood floors',
      'Doors & Windows: Fitting, trimming, and repairing internal and external doors with draft-proofing',
      'Skirting & Architraves: Precise architectural finishing touches that define a room',
      'Lighting Installation: From stylish recessed downlights and dimmer switches to outdoor security lighting',
      'Socket & Switch Upgrades: Replacing dated fittings with modern chrome, matt black, or USB-integrated finishes',
      'Fault Finding & Rewiring: Identifying and fixing electrical issues safely in compliance with UK regulations',
      'Plumbing Maintenance & Repairs: Fixing leaks, drips, low water pressure, and blocked pipework',
      'Sanitary Fixture Installation: Fitting new designer sinks, taps, showers, and toilets',
      'Radiator Installation: Replacement, modern column radiator fitting, and bleeding for maximum heating efficiency'
    ],
    benefits: [
      'All Trades Under One Roof: No need to hire and coordinate different independent contractors.',
      'Certified Master Tradespeople: Fully qualified carpenters, certified electricians, and experienced plumbers.',
      'Flawless Finish: Seamless integration between woodwork, electrical chasing, plumbing, and decorating.',
      'Fixed Transparent Pricing: Guaranteed quotes with clear breakdown of materials and labour.'
    ],
    whatWeProvide: [
      'Complete home survey and comprehensive project estimate',
      'Certified electrical and plumbing installations with safety documentation',
      'Precision joinery cut and fitted with minimal dust and disturbance',
      'Two-year workmanship guarantee on all installation works'
    ],
    faqs: [
      {
        question: 'Can you handle the electrical and plumbing alongside painting?',
        answer: 'Yes! That is our primary strength. We schedule first-fix plumbing and electrical, followed by carpentry, and finish with flawless painting and decorating without any scheduling gaps.'
      },
      {
        question: 'Do you provide safety certification for the electrical and plumbing work?',
        answer: 'Yes, all electrical and plumbing works are carried out by certified professionals in compliance with UK Building Regulations and certified where required.'
      }
    ],
    galleryImages: [
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/closet-with-wardrobe.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Kitchen-Installation-2-1024x769.jpg',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 7
  },
  {
    id: 'srv-10',
    slug: 'custom-wardrobes',
    title: 'Custom Wardrobes',
    shortDescription: 'Order a wardrobe custom-fitted to your space. Bespoke fitted wardrobes and luxury walk-in closets across London and the UK.',
    fullDescription: 'Order a wardrobe custom-fitted to your space. Our specialist team designs and installs bespoke wardrobes in London and across the UK, using premium materials to maximise storage and style. Made from high-quality materials, it maximizes storage efficiency. Personalize colors, handles, and shelf layouts to your needs. Create a luxurious walk-in closet tailored to your requirements with spacious interiors, LED lighting, and organization systems. Perfect for fashion enthusiasts, with full arrangement freedom. We take care of every detail – from 3D design and laser measurement to manufacturing, delivery, and installation.',
    icon: 'Maximize2',
    image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Wardrobe-6.png',
    category: 'interiors',
    features: [
      'Custom-fitted wardrobes tailored to your exact ceiling and wall dimensions',
      'Walk-in closets with integrated LED lighting and smart storage',
      'Bespoke internal drawers, tie racks, pull-out shoe organizers, and hanging rails',
      'Wide choice of finishes: shaker, modern flat, fluted, mirror, and designer handles',
      'Angled wardrobes for loft conversions and awkward chimney alcoves'
    ],
    benefits: [
      'Maximizes vertical and floor storage efficiency by up to 40%',
      'Adds measurable aesthetic and financial value to your bedroom',
      'Durable soft-close European hardware designed for lifetime use',
      'Hand-painted or factory-lacquered in any colour of your choice'
    ],
    whatWeProvide: [
      'Free in-home laser measurement and 3D visual layout',
      'High-grade moisture-resistant MDF or natural oak carcass build',
      'Master joinery installation and seamless on-site hand painting'
    ],
    faqs: [
      {
        question: 'Can you build wardrobes into sloped loft ceilings?',
        answer: 'Yes, custom angled wardrobes for loft conversions and mansard extensions are one of our core specialties.'
      },
      {
        question: 'How long does a bespoke wardrobe take to produce and install?',
        answer: 'Fabrication takes about 2-3 weeks, with on-site installation and finishing typically taking 2 to 3 days.'
      }
    ],
    galleryImages: [
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Wardrobe-6.png',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/1000029485-edited-1024x768.png',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/closet-with-wardrobe.jpg'
    ],
    published: true,
    order: 10
  },
  {
    id: 'srv-11',
    slug: 'kitchen-installation',
    title: 'Kitchen Installation',
    shortDescription: 'Order professional kitchen installation tailored to your space. Complete installations from design to finish across London.',
    fullDescription: 'Order professional kitchen installation tailored to your space in London and surroundings. Our team of experienced specialists handles complete installations from design to finish, using premium materials and modern technology to create functional and stylish spaces. We provide end-to-end services – from precise design and cabinetry fitting to appliance integration and flawless finishing, prioritising ergonomics, functionality, and elegant design. At Green Refurb, we ensure our clients receive top-quality services. We guarantee a seamless process from start to finish – your custom kitchen will be crafted to premium standards, serving you and your family for years to come.',
    icon: 'Utensils',
    image: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Kitchen-Installation-1.png',
    category: 'interiors',
    features: [
      'Bespoke design and planning of luxury kitchens tailored to your specifications',
      'Installation to professional standards by time-served master craftsmen',
      'All accessories supplied and fitted within our all-inclusive service package',
      'Cabinetry fitting, precision levelling, and filler scribe work',
      'Quartz, granite, composite, and solid wood worktop installation',
      'Sink, tap, dishwasher, hob, and oven plumbing and electrical integration',
      'Tile splashbacks, under-cabinet ambient LED illumination, and finish decorating'
    ],
    benefits: [
      'Turnkey delivery: single point of contact from removal to final polish',
      'Master craftsmanship with seamless worktop joins and aligned cabinets',
      'Certified plumbing and electrical work with safety compliance',
      'Clean, courteous installation team with minimum downtime'
    ],
    whatWeProvide: [
      'Complete strip-out and responsible disposal of old kitchen',
      'First-fix electrical and plumbing tailored to new layout',
      'Full cabinet installation, cornice, plinth, and door adjustments',
      'Worktop templating, fitting, and undermount sink sealing'
    ],
    faqs: [
      {
        question: 'Do you supply the kitchen or just fit it?',
        answer: 'We do both! We can design, supply, and fit bespoke cabinetry, or install a kitchen you have purchased independently from Howdens, Magnet, Wren, etc.'
      },
      {
        question: 'How long does a typical kitchen installation take?',
        answer: 'A standard complete kitchen installation takes between 7 to 12 working days depending on worktop fabrication and plumbing complexity.'
      }
    ],
    galleryImages: [
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Kitchen-Installation-1.png',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Kitchen-Installation-2-1024x769.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Kitchen-Installation-3-1024x573.png'
    ],
    published: true,
    order: 11
  },
  {
    id: 'srv-12',
    slug: 'repairs-emergency',
    title: 'Repairs & Emergency Services',
    shortDescription: 'Fast response property repairs, leak water damage restoration, cracked plaster, and urgent remedial fixes.',
    fullDescription: 'Property emergencies can cause compounding damage if not addressed rapidly. Green Refurb provides prompt diagnostic and repair services for water-damaged ceilings, burst pipes, cracked plaster, storm damaged fences, and broken fixtures.',
    icon: 'ShieldAlert',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
    category: 'refurbishment',
    features: [
      'Water damage ceiling repair, stain blocking, and re-plastering',
      'Emergency plumbing leak isolation and pipework repairs',
      'Structural crack stitching and lime plaster restoration',
      'Insurance claim repair quotes and photographic reports'
    ],
    benefits: [
      'Rapid assessment across South London and surrounding boroughs',
      'Prevents secondary mould and rot formation',
      'Insurance-compliant documentation and invoices'
    ],
    whatWeProvide: [
      'Immediate stabilization of affected area to prevent further damage',
      'Moisture level readings with industrial dehumidifiers if required',
      'Permanent structural and decorative restoration'
    ],
    faqs: [
      {
        question: 'Can you provide quotes for building insurance claims?',
        answer: 'Yes, we provide itemised insurance repair estimates detailing labour and materials with photographic evidence.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 12
  },
  {
    id: 'srv-13',
    slug: 'handyman',
    title: 'Handyman / Odd Jobs',
    shortDescription: 'Multi-skilled handyman service for furniture assembly, TV mounting, shelving, lock changes, and minor fixes.',
    fullDescription: 'Our professional handyman team tackles the to-do list that never seems to get done. Fully equipped with professional tools and hardware, our technicians handle minor domestic and commercial jobs with speed, tidiness, and a friendly smile.',
    icon: 'CheckCircle',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80',
    category: 'refurbishment',
    features: [
      'Flat-pack furniture assembly (IKEA, Wayfair, John Lewis)',
      'Secure wall-mounting for heavy mirrors, artwork, and large TVs',
      'Curtain track, Venetian blind, and shelving installation',
      'Door handle, latch, silicone sealant, and draught-proofing fixes'
    ],
    benefits: [
      'Charged by clear hourly or half-day rates with no hidden fees',
      'All tools, rawlplugs, and specialist fixings supplied',
      'Friendly, punctual, and respectful of your home'
    ],
    whatWeProvide: [
      'Punctual arrival with fully stocked trade van',
      'Laser-level alignment on all wall mountings',
      'Complete packaging breakdown and clean-up'
    ],
    faqs: [
      {
        question: 'Is there a minimum booking time?',
        answer: 'Our standard minimum booking is 2 hours, which is usually plenty of time to resolve multiple tasks on your list.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 13
  },
  {
    id: 'srv-14',
    slug: 'property-refurbishment',
    title: 'Property Refurbishment',
    shortDescription: 'Comprehensive full-house and apartment renovations, layout overhauls, modernisations, and project management.',
    fullDescription: 'Green Refurb provides end-to-end property refurbishment for private homeowners, buy-to-let investors, and commercial landlords. We take dated or neglected properties and transform them into luxurious, energy-efficient, and contemporary living spaces.',
    icon: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    category: 'refurbishment',
    features: [
      'Complete stripped-back whole-property renovations',
      'Wall knock-throughs with steel beam (RSJ) installations',
      'Subfloor insulation, underfloor heating, and screeding',
      'Integrated interior design, electrical, plumbing, joinery, and decor'
    ],
    benefits: [
      'Dedicated project manager overseeing daily operations',
      'Comprehensive master schedule with guaranteed milestone check-ins',
      'Substantial return on investment through elevated rental yield & capital value'
    ],
    whatWeProvide: [
      'Initial feasibility assessment and budget estimation',
      'Full trade coordination, site logistics, and health & safety compliance',
      'Final snagging, deep professional clean, and comprehensive warranty pack'
    ],
    faqs: [
      {
        question: 'Do you offer a warranty on full property refurbishments?',
        answer: 'Yes, all our full refurbishment projects carry a 24-month workmanship warranty alongside manufacturer warranties.'
      }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80'
    ],
    published: true,
    order: 14
  }
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Victorian Townhouse Full Residential Painting & Refurbishment',
    category: 'Residential',
    description: 'Complete residential painting and decorating in London, featuring heritage cornicing restoration, luxury master rooms, and full interior and exterior redecoration.',
    location: 'London & Croydon',
    completionDate: 'June 2025',
    featured: true,
    coverImage: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-1-1024x768.jpg',
    images: [
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-1-1024x768.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-2-1024x768.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-3-1024x768.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Residential-4-1024x1024.jpg'
    ],
    client: 'Private Residence',
    published: true
  },
  {
    id: 'proj-2',
    title: 'Corporate Office & Commercial Redecoration',
    category: 'Commercial',
    description: 'Turnkey interior commercial painting and decorating for offices and workspaces across London with durable eggshell finishes and zero downtime.',
    location: 'Central London',
    completionDate: 'November 2025',
    featured: true,
    coverImage: 'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-1-768x1024.jpg',
    images: [
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-1-768x1024.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-2-768x1024.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-3-768x1024.jpg',
      'https://greenrefurblimited.com/Orginal/wp-content/uploads/2025/12/Commercial-4-768x1024.jpg'
    ],
    client: 'Commercial Client',
    published: true
  },
  {
    id: 'proj-3',
    title: 'Edwardian Villa Exterior Facelift & Sash Restoration',
    category: 'Exterior',
    description: 'Full exterior masonry restoration, render repairs, black gloss front door overhaul, and multi-pane sash window refurbishment with Weathershield protection.',
    location: 'Richmond, Greater London',
    completionDate: 'August 2025',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'Private Estate',
    published: true
  },
  {
    id: 'proj-4',
    title: 'Bespoke Oak Kitchen & Open Plan Living',
    category: 'Interior',
    description: 'Custom kitchen installation with quartz waterfall island, engineered herringbone flooring, flush ceiling spotlights, and sage green cabinet finish.',
    location: 'Wimbledon, London',
    completionDate: 'January 2026',
    featured: true,
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'The Henderson Family',
    published: true
  },
  {
    id: 'proj-5',
    title: 'Master Bedroom Fitted Wardrobes & Dressing Room',
    category: 'Refurbishment',
    description: 'Floor-to-ceiling Shaker wardrobes built into chimney alcoves with interior LED lighting, velvet lined drawers, and bespoke dressing table.',
    location: 'Bromley, Kent / London',
    completionDate: 'February 2026',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'Private Residence',
    published: true
  },
  {
    id: 'proj-6',
    title: 'Luxury Retail Boutique Redecoration',
    category: 'Commercial',
    description: 'Specialist microcement walls, brass inlay details, and custom wallpaper hanging for an upscale fashion boutique.',
    location: 'Chelsea, London',
    completionDate: 'December 2025',
    featured: false,
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
    images: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80'
    ],
    client: 'Atelier Mode',
    published: true
  }
];

export const INITIAL_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'David & Sarah Mitchell',
    location: 'Croydon, CR0',
    rating: 5,
    testimonial: 'Green Refurb decorated our entire four-bedroom Edwardian home. Their attention to detail was exceptional. They arrived promptly at 8 AM every day, kept everything impeccably clean, and the paint finish on our sash windows and woodwork is like glass. Worth every penny.',
    serviceUsed: 'Interior Painting & Carpentry',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'February 2026'
  },
  {
    id: 'test-2',
    name: 'Julian Vance',
    location: 'Richmond, TW9',
    rating: 5,
    testimonial: 'We engaged Green Refurb for a full exterior repaint and masonry restoration. The team arranged the scaffolding swiftly and finished ahead of schedule. The property looks brand new from the road. Highly recommended to anyone who values genuine craftsmanship.',
    serviceUsed: 'Exterior Painting',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: 'January 2026'
  },
  {
    id: 'test-3',
    name: 'Elena Rostova',
    location: 'Wimbledon, SW19',
    rating: 5,
    testimonial: 'The bespoke wardrobes they designed and fitted in our bedroom are simply magnificent. They managed to build around awkward chimney alcoves perfectly, and the interior LED lighting makes it feel like a five-star hotel suite.',
    serviceUsed: 'Bespoke Wardrobes',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    date: 'December 2025'
  },
  {
    id: 'test-4',
    name: 'Mark Edwards',
    location: 'Bromley, BR1',
    rating: 5,
    testimonial: 'From our initial consultation to final snagging, the communication was clear, honest, and transparent. The kitchen install and open-plan knock-through went without a hitch. Truly a top-tier London refurbishment team.',
    serviceUsed: 'Kitchen Installation & Refurbishment',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: 'November 2025'
  }
];

export const INITIAL_GALLERY: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Victorian Living Room Decor',
    category: 'Interior',
    url: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    uploadedAt: '2026-01-10'
  },
  {
    id: 'gal-2',
    title: 'Sage Green Fitted Kitchen',
    category: 'Interior',
    url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    uploadedAt: '2026-01-12'
  },
  {
    id: 'gal-3',
    title: 'Master Bedroom Shaker Wardrobe',
    category: 'Carpentry',
    url: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
    uploadedAt: '2026-01-15'
  },
  {
    id: 'gal-4',
    title: 'Modern Bathroom & Brass Taps',
    category: 'Plumbing',
    url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    uploadedAt: '2026-01-18'
  },
  {
    id: 'gal-5',
    title: 'London Townhouse Exterior Masonry',
    category: 'Exterior',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    uploadedAt: '2026-01-20'
  },
  {
    id: 'gal-6',
    title: 'Commercial Office Suite',
    category: 'Commercial',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    uploadedAt: '2026-01-22'
  },
  {
    id: 'gal-7',
    title: 'Acoustic Wood Slat Wall Feature',
    category: 'Carpentry',
    url: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80',
    uploadedAt: '2026-01-25'
  },
  {
    id: 'gal-8',
    title: 'Bespoke Dining Room Wall Panelling',
    category: 'Interior',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    uploadedAt: '2026-01-28'
  }
];

export const INITIAL_SETTINGS: SiteSettings = {
  companyName: 'Green Refurb',
  tagline: 'Painting & Decorating • Home Improvements',
  domain: 'greenrefurb.site',
  logoUrl: '',
  faviconUrl: '',
  address: {
    line1: '61 Bridge Street',
    line2: 'Kington',
    city: 'Herefordshire & London',
    postcode: 'HR5 3DJ',
    country: 'United Kingdom'
  },
  phone: '07908 173 549',
  email: 'info@greenrefurb.site',
  whatsappNumber: '+44 7908 173549',
  openingHours: 'Monday – Saturday: 08:00 – 18:00',
  socialLinks: {
    facebook: 'https://facebook.com/greenrefurb',
    instagram: 'https://instagram.com/greenrefurb',
    linkedin: 'https://linkedin.com/company/greenrefurb',
    houzz: 'https://houzz.co.uk/pro/greenrefurb'
  },
  stats: {
    yearsExperience: 20,
    completedProjects: 850,
    satisfactionRate: 99,
    qualifiedTradesmen: 25
  },
  footerText: 'Green Refurb is a premier UK painting, decorating, home improvement, and property refurbishment contractor serving private homeowners and commercial clients across London and surrounding areas.',
  copyrightText: '© 2026 Green Refurb. All Rights Reserved. Registered in England & Wales (Company No. 17378871).'
};

export const INITIAL_HOMEPAGE: HomepageContent = {
  heroHeadline: 'Expert Painters and Decorators in London',
  heroSubheading: 'Welcome to Green Refurb – your trusted team of professional painters and decorators serving London and the surrounding areas. We specialise in residential and commercial painting and decorating, delivering high-quality workmanship, reliable service, and attention to detail on every project.',
  heroImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1600&q=85',
  heroCtaQuoteText: 'Get a Free Quote',
  heroCtaServicesText: 'Explore Our Services',
  introHeading: 'Why Choose Us?',
  introTextParagraph1: 'Whether you’re looking to refresh a single room or completely renovate your property, we offer a reliable, high-quality, and cost-effective service tailored to your needs.',
  introTextParagraph2: 'From preparation to the final coat, we ensure clean lines, durable finishes, and minimal disruption to your home or business. Our team coordinates every stage with care and professionalism.',
  introImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  introBulletPoints: [
    'Over 20 years of experience in painting, decorating, and home improvement services',
    'Specialists in interior and exterior painting, wallpapering, plaster repair, and woodwork',
    'Fully insured with £5,000,000 public liability cover for complete peace of mind',
    'We use premium-grade materials like Dulux Heritage, Johnstone’s Trade, and Zinsser',
    'Advanced dust-extraction tools such as Festool ensure precision and cleanliness',
    'Punctual, tidy, and fully committed to customer satisfaction with transparent fixed pricing'
  ]
};

export const INITIAL_TEAM: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Oliver Green',
    role: 'Managing Director & Master Decorator',
    bio: 'With over 20 years leading high-end residential and commercial refurbishment projects across London.',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'team-2',
    name: 'Marcus Bailey',
    role: 'Lead Project Manager',
    bio: 'Oversees site operations, trade scheduling, client communication, and strict quality control standards.',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 'team-3',
    name: 'Sophie Thornton',
    role: 'Colour Specialist & Interior Designer',
    bio: 'Assists homeowners and architects in curating bespoke palettes, finishes, and custom interior solutions.',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
  }
];

export const INITIAL_ENQUIRIES: ContactEnquiry[] = [
  {
    id: 'enq-1',
    name: 'Charlotte Davies',
    email: 'charlotte.d@example.co.uk',
    phone: '07700 900123',
    service: 'Interior Painting',
    message: 'Looking for full redecoration of our 3-bedroom Victorian terraced house in Croydon. Looking to start late next month.',
    propertyType: 'Residential Victorian',
    postcode: 'CR0 3AB',
    createdAt: '2026-03-12T10:30:00Z',
    status: 'New'
  },
  {
    id: 'enq-2',
    name: 'Robert Hastings',
    email: 'r.hastings@capitalventures.co.uk',
    phone: '020 7946 0912',
    service: 'Commercial Painting',
    message: 'Office refurbishment for two floors in London Bridge. Work needs to be carried out over weekends.',
    propertyType: 'Commercial Office',
    postcode: 'SE1 2TY',
    createdAt: '2026-03-10T14:15:00Z',
    status: 'Contacted'
  },
  {
    id: 'enq-3',
    name: 'Amara Patel',
    email: 'amara.patel@gmail.com',
    phone: '07800 554321',
    service: 'Bespoke Wardrobes',
    message: 'Need fitted floor-to-ceiling wardrobes in master bedroom alcoves with integrated LED lighting.',
    propertyType: 'Residential Detached',
    postcode: 'SW19 4EE',
    createdAt: '2026-03-08T09:00:00Z',
    status: 'Completed'
  }
];

export const INITIAL_SEO: PageSEO[] = [
  {
    path: '/',
    title: 'Green Refurb | Professional Painting, Decorating & Property Refurbishment London',
    metaDescription: 'Quality painting, decorating, property refurbishment, carpentry, and home improvement services across London and Croydon. Request a free quote today.',
    keywords: 'painting, decorating, property refurbishment, London decorators, Croydon painters, bespoke wardrobes, kitchen installation, home improvement UK',
    ogTitle: 'Green Refurb | Professional Painting, Decorating & Property Refurbishment',
    ogDescription: 'Quality workmanship, reliable service, and beautifully finished spaces for homes and businesses across London.',
    ogImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://greenrefurb.site/'
  },
  {
    path: '/about',
    title: 'About Us | Green Refurb – 20+ Years Quality Workmanship London',
    metaDescription: 'Learn about Green Refurb, Croydon and London’s premier painting, decorating and refurbishment contractors with over 20 years experience.',
    keywords: 'about green refurb, painting contractors London, reliable refurbishment Croydon, certified tradesmen London',
    ogTitle: 'About Green Refurb | 20+ Years Trusted Refurbishment London',
    ogDescription: 'Trusted UK home improvement and commercial decorating contractors with verified trades and full guarantee.',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://greenrefurb.site/about'
  },
  {
    path: '/services',
    title: 'Services | Painting, Decorating & Home Improvements – Green Refurb',
    metaDescription: 'Explore our complete spectrum of painting, decorating, carpentry, plumbing, electrical, and full refurbishment services in London.',
    keywords: 'painting services, decorating services, property refurbishment, carpentry London, electrical, plumbing',
    ogTitle: 'Professional Refurbishment & Decorating Services | Green Refurb',
    ogDescription: 'From interior and exterior painting to bespoke wardrobes and full house renovations.',
    ogImage: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://greenrefurb.site/services'
  },
  {
    path: '/our-work',
    title: 'Our Work | Recent Projects Portfolio – Green Refurb London',
    metaDescription: 'View our portfolio of residential and commercial painting, decorating, and refurbishment projects completed across London and Surrey.',
    keywords: 'decorating portfolio London, refurbishment projects Croydon, commercial painting photos, residential makeover',
    ogTitle: 'Project Portfolio | Green Refurb London',
    ogDescription: 'Browse high-resolution galleries of our completed painting, carpentry, and full refurbishment projects.',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://greenrefurb.site/our-work'
  },
  {
    path: '/custom-interior-solutions',
    title: 'Custom Interior Solutions | Bespoke Wardrobes & Kitchens – Green Refurb',
    metaDescription: 'Handcrafted bespoke wardrobes, fitted cabinetry, kitchen installations, and bespoke storage designed and fitted across London.',
    keywords: 'bespoke wardrobes London, fitted storage Croydon, custom kitchen fitting, alcove cabinets London',
    ogTitle: 'Custom Interior Solutions & Joinery | Green Refurb',
    ogDescription: 'Tailor-made fitted wardrobes, luxury kitchens, and built-in architectural storage crafted to perfection.',
    ogImage: 'https://images.unsplash.com/photo-1558997519-83ea9252def8?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://greenrefurb.site/custom-interior-solutions'
  },
  {
    path: '/contact',
    title: 'Contact Us | Request a Free Quote – Green Refurb Croydon & London',
    metaDescription: 'Get in touch with Green Refurb for a free, no-obligation quote on painting, decorating, or property refurbishment in London. Call 020 8123 4567.',
    keywords: 'contact green refurb, painting quote London, refurbishment quote Croydon, 65 Lodge Road Croydon',
    ogTitle: 'Contact Green Refurb | Free Quote for Painting & Refurbishment',
    ogDescription: 'Visit our Croydon office at 65 Lodge Road, or call/WhatsApp us for immediate advice and site visits.',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    canonicalUrl: 'https://greenrefurb.site/contact'
  }
];
