export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  image: string;
  category: 'painting' | 'refurbishment' | 'carpentry' | 'trades' | 'interiors';
  features: string[];
  benefits: string[];
  whatWeProvide: string[];
  faqs: { question: string; answer: string }[];
  galleryImages: string[];
  published: boolean;
  order: number;
}

export interface ProjectItem {
  id: string;
  slug?: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Interior' | 'Exterior' | 'Refurbishment';
  description: string;
  location: string;
  completionDate?: string;
  featured: boolean;
  coverImage: string;
  images: string[];
  scope?: string[];
  client?: string;
  published: boolean;
  order?: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  url: string;
  projectId?: string;
  uploadedAt: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  testimonial: string;
  serviceUsed: string;
  photo?: string;
  date: string;
}

export interface ContactEnquiry {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  propertyType?: string;
  postcode?: string;
  createdAt: string;
  status: 'New' | 'Contacted' | 'Completed';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export interface SiteSettings {
  companyName: string;
  tagline: string;
  domain: string;
  logoUrl?: string;
  faviconUrl?: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    postcode: string;
    country: string;
  };
  phone: string;
  email: string;
  whatsappNumber: string;
  openingHours: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    linkedin: string;
    houzz: string;
  };
  stats: {
    yearsExperience: number;
    completedProjects: number;
    satisfactionRate: number;
    qualifiedTradesmen: number;
  };
  footerText: string;
  copyrightText: string;
}

export interface HomepageContent {
  heroHeadline: string;
  heroSubheading: string;
  heroImage: string;
  heroCtaQuoteText: string;
  heroCtaServicesText: string;
  introHeading: string;
  introTextParagraph1: string;
  introTextParagraph2: string;
  introImage: string;
  introBulletPoints: string[];
}

export interface PageSEO {
  path: string;
  title: string;
  metaDescription: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl: string;
}

export interface AdminUser {
  id: string;
  username: string;
  name: string;
  role: 'super_admin' | 'editor';
  lastLogin?: string;
}
