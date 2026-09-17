import React from 'react';
import {
  Paintbrush,
  Brush,
  Home,
  Building2,
  Layers,
  Wrench,
  Hammer,
  Zap,
  Droplets,
  Maximize2,
  Utensils,
  ShieldAlert,
  CheckCircle,
  Sparkles,
  HelpCircle,
  LucideProps
} from 'lucide-react';

interface ServiceIconProps extends LucideProps {
  name: string;
}

export const ServiceIcon: React.FC<ServiceIconProps> = ({ name, ...props }) => {
  switch (name.toLowerCase()) {
    case 'paintbrush':
      return <Paintbrush {...props} />;
    case 'brush':
      return <Brush {...props} />;
    case 'home':
      return <Home {...props} />;
    case 'building2':
    case 'building':
      return <Building2 {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'wrench':
      return <Wrench {...props} />;
    case 'hammer':
      return <Hammer {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'droplets':
    case 'droplet':
      return <Droplets {...props} />;
    case 'maximize2':
    case 'wardrobe':
      return <Maximize2 {...props} />;
    case 'utensils':
    case 'kitchen':
      return <Utensils {...props} />;
    case 'shieldalert':
    case 'shield':
      return <ShieldAlert {...props} />;
    case 'checkcircle':
    case 'handyman':
      return <CheckCircle {...props} />;
    case 'sparkles':
    case 'refurbishment':
      return <Sparkles {...props} />;
    default:
      return <Paintbrush {...props} />;
  }
};
