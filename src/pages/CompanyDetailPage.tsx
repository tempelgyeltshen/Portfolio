import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GROUP_COMPANIES } from '../data/groupData';
import { ArrowLeft, MapPin, Mail, Phone, Car, Users, Shield, Globe } from 'lucide-react';
import { BrandMonogram, BhutaneseTextileBackground, CornerAccents, VentureIcon } from '../components/BhutaneseMotifs';

const CAR_RENTAL_FLEET = {
  stats: [
    { icon: Car, number: '17+', label: 'Premium SUVs', detail: 'Including Tank 500 & GWM' },
    { icon: Users, number: '7', label: 'Hi-Roof Buses', detail: '8-9 Passengers Each' },
    { icon: Globe, number: '20', label: 'Dzongkhags', detail: 'Nationwide Coverage' },
    { icon: Shield, number: '100%', label: 'Fleet Maintenance', detail: 'Professional Standards' },
  ],
  fleetDetails: [
    {
      category: 'Premium SUVs',
      count: '17+',
      vehicles: ['Tank 500', 'GWM Models', 'Toyota Land Cruiser', 'Toyota Prado', 'Mitsubishi Pajero'],
      description: "Our flagship fleet of premium SUVs is built for Bhutan's demanding mountain terrain. Whether navigating the winding roads to Bumthang or the high passes to Lingshi, our SUVs deliver power, comfort, and reliability.",
    },
    {
      category: 'Hi-Roof Buses',
      count: '7',
      vehicles: ['Toyota Hi-Roof (8-seater)', 'Toyota Hi-Roof (9-seater)'],
      description: 'Spacious Toyota Hi-Roof buses perfect for tour groups, corporate delegations, family gatherings, and large parties. Each bus is professionally maintained with ample luggage space and comfortable seating.',
    },
    {
      category: 'Additional Vehicles',
      count: 'Available',
      vehicles: ['Executive Sedans', 'Mini Vans', 'Specialty Vehicles'],
      description: 'Beyond our core fleet, we maintain additional vehicles for specific requirements -- from executive sedans for VIP transfers to mini vans for smaller groups.',
    },
  ],
  services: [
    { title: 'Airport Transfers', description: 'Seamless Paro Airport pickups and drop-offs to any destination in Bhutan. Professional chauffeurs, punctual service, premium vehicles.' },
    { title: 'Corporate & Delegation', description: 'Large-scale transportation for corporate events, government delegations, international conferences, and institutional requirements.' },
    { title: 'Tour Groups', description: "Multi-vehicle logistics for tour operators managing groups across Bhutan's diverse regions and attractions." },
    { title: 'Long-Distance Travel', description: 'Multi-day travel packages with experienced drivers who know every highway, mountain pass, and scenic route in the Kingdom.' },
    { title: 'Family & Individual', description: 'Personal vehicle rentals with chauffeur for families, honeymooners, solo travelers, and small groups exploring Bhutan.' },
    { title: 'Event Transportation', description: 'Coordinated fleet deployment for weddings, festivals, corporate events, and special occasions requiring multiple vehicles.' },
  ],
};

const COMPANY_ICONS: Record<string, 'palette' | 'car' | 'mountain' | 'diamond' | 'flower' | 'shield' | 'leaf' | 'knot'> = {
  'thangka': 'palette',
  'car-rental': 'car',
  'travelers': 'mountain',
  'enterprise': 'diamond',
  'food-247': 'flower',
  'hitokara': 'knot',
  'trading': 'shield',
};

export const CompanyDetailPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const company = GROUP_COMPANIES.find(c => c.id === companyId);

  if (!company) {
    return (
      <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif-luxury font-bold mb-4">Company Not Found</h1>
          <Link to="/" className="text-[#C5A059] hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  const isCarRental = company.id === 'car-rental';

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/95 backdrop-blur-md border-b border-[#C5A059]/20 py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#D4D4D8] hover:text-[#C5A059] transition-colors duration-300 group">
            <ArrowLeft className="w-5 h-5" />
            <BrandMonogram size={40} />
          </Link>
          <div className="text-[10px] font-mono tracking-widest text-[#71717A] group-hover:text-[#C5A059] transition-colors">
            {company.number}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-20">
        <div className="relative aspect-[16/9] max-h-[600px] overflow-hidden">
          <img src={company.image} alt={company.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-16">
            <div className="max-w-7xl mx-auto">
              <div className="text-white">
                <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-semibold mb-4">{company.industry}</div>
                <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-medium mb-4">{company.name}</h1>
                <p className="text-xl italic text-white/90 font-serif-luxury">{company.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Stats Banner - Car Rental Only */}
      {isCarRental && (
        <div className="bg-[#050507] py-16 border-t border-b border-[#27272a]">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="text-center mb-10">
              <p className="text-[#C5A059] text-xs uppercase tracking-[0.3em] font-semibold mb-2">Our Fleet at a Glance</p>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-medium text-[#FAF9F6]">One of Bhutan&apos;s Largest Car Rental Fleets</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {CAR_RENTAL_FLEET.stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="text-center p-6 border border-[#27272a] hover:border-[#C5A059] transition-colors duration-300 bg-[#121214]/60">
                    <Icon className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                    <div className="font-serif-luxury text-3xl font-semibold text-[#E8D4A2] mb-1">{stat.number}</div>
                    <div className="text-sm text-white/80 font-medium">{stat.label}</div>
                    <div className="text-xs text-[#71717A] mt-1">{stat.detail}</div>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 text-center">
              <p className="text-[#71717A] text-sm tracking-wide">17+ SUVs &nbsp;|&nbsp; 7 Hi-Roof Buses &nbsp;|&nbsp; 8-9 Seaters &nbsp;|&nbsp; More Vehicles Available</p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        {/* About Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">ABOUT</span>
            <span className="h-[1px] w-10 bg-[#C5A059]/60" />
          </div>
          <div className="text-lg text-[#A1A1AA] leading-relaxed max-w-4xl space-y-4 font-sans-luxury font-light">
            {company.fullStory.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Fleet Details - Car Rental Only */}
        {isCarRental && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">OUR FLEET</span>
              <span className="h-[1px] w-10 bg-[#C5A059]/60" />
            </div>
            <p className="text-[#71717A] text-sm uppercase tracking-[0.15em] mb-8">Professional vehicles maintained to the highest standards</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CAR_RENTAL_FLEET.fleetDetails.map((fleet, idx) => (
                <div key={idx} className="border border-[#27272a] p-6 hover:border-[#C5A059] transition-colors duration-300 bg-[#121214]/60">
                  <div className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-semibold mb-3">{fleet.category}</div>
                  <div className="font-serif-luxury text-2xl font-semibold text-[#FAF9F6] mb-3">{fleet.count} Vehicles</div>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed mb-4 font-light">{fleet.description}</p>
                  <div className="border-t border-[#27272a] pt-3">
                    <p className="text-xs text-[#71717A] uppercase tracking-[0.1em] mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                      {fleet.vehicles.map((v, vIdx) => (
                        <span key={vIdx} className="text-xs bg-[#18181B] border border-[#27272a] px-2 py-1 text-[#A1A1AA]">{v}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services - Car Rental Only */}
        {isCarRental && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">SERVICES</span>
              <span className="h-[1px] w-10 bg-[#C5A059]/60" />
            </div>
            <p className="text-[#71717A] text-sm uppercase tracking-[0.15em] mb-8">Comprehensive transportation solutions across Bhutan</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CAR_RENTAL_FLEET.services.map((service, idx) => (
                <div key={idx} className="bg-[#121214]/80 border border-[#27272a] p-6 hover:border-[#C5A059] transition-colors duration-300">
                  <h3 className="font-serif-luxury text-lg font-medium text-[#FAF9F6] mb-3">{service.title}</h3>
                  <p className="text-[#A1A1AA] text-sm leading-relaxed font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Section */}
        {company.gallery && company.gallery.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">GALLERY</span>
              <span className="h-[1px] w-10 bg-[#C5A059]/60" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {company.gallery.map((imgUrl, idx) => (
                <div key={idx} className="aspect-video overflow-hidden border border-[#27272a] hover:border-[#C5A059] transition-colors">
                  <img src={imgUrl} alt={`${company.name} gallery ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Highlights */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">KEY HIGHLIGHTS</span>
            <span className="h-[1px] w-10 bg-[#C5A059]/60" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {company.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-[#121214]/80 border border-[#27272a] p-4 hover:border-[#C5A059] transition-colors duration-300">
                <span className="w-1.5 h-1.5 bg-[#C5A059] rounded-full shrink-0 mt-1.5" />
                <span className="text-[#A1A1AA] text-sm font-light">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="border-t border-[#27272a] pt-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">CONTACT</span>
            <span className="h-[1px] w-10 bg-[#C5A059]/60" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {company.location && (
              <div className="flex items-start gap-3">
                <div className="p-2 border border-[#27272a] text-[#C5A059] shrink-0"><MapPin className="w-4 h-4" /></div>
                <div><p className="text-[10px] uppercase tracking-[0.16em] text-[#71717A] mb-1">Location</p><p className="text-[#D4D4D8] text-sm">{company.location}</p></div>
              </div>
            )}
            {company.contactEmail && (
              <div className="flex items-start gap-3">
                <div className="p-2 border border-[#27272a] text-[#C5A059] shrink-0"><Mail className="w-4 h-4" /></div>
                <div><p className="text-[10px] uppercase tracking-[0.16em] text-[#71717A] mb-1">Email</p><a href={`mailto:${company.contactEmail}`} className="text-[#D4D4D8] text-sm hover:text-[#C5A059] transition-colors font-mono">{company.contactEmail}</a></div>
              </div>
            )}
            <div className="flex items-start gap-3">
              <div className="p-2 border border-[#27272a] text-[#C5A059] shrink-0"><Phone className="w-4 h-4" /></div>
              <div><p className="text-[10px] uppercase tracking-[0.16em] text-[#71717A] mb-1">Phone</p><a href="tel:+97517377777" className="text-[#D4D4D8] text-sm hover:text-[#C5A059] transition-colors font-mono">+975 17377777</a></div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#050507] text-[#A1A1AA] py-8 mt-16 border-t border-[#27272a]/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <BrandMonogram size={40} className="justify-center mb-4" />
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#71717A]">
            &copy; {new Date().getFullYear()} All Rights Reserved. Thimphu, Kingdom of Bhutan
          </p>
        </div>
      </footer>
    </div>
  );
};
