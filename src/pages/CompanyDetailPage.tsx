import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { GROUP_COMPANIES } from '../data/groupData';
import { ArrowLeft, MapPin, Mail, Phone, Car, Users, Shield, Globe } from 'lucide-react';
import { BrandMonogram, BhutaneseTextileBackground } from '../components/BhutaneseMotifs';

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
      description: "Our flagship fleet of premium SUVs is built for Bhutan's demanding mountain terrain. Power, comfort, and reliability across every highway and mountain pass.",
    },
    {
      category: 'Hi-Roof Buses',
      count: '7',
      vehicles: ['Toyota Hi-Roof (8-seater)', 'Toyota Hi-Roof (9-seater)'],
      description: 'Spacious Toyota Hi-Roof buses for tour groups, corporate delegations, and large parties. Professionally maintained with ample luggage space.',
    },
    {
      category: 'Additional Vehicles',
      count: 'Available',
      vehicles: ['Executive Sedans', 'Mini Vans', 'Specialty Vehicles'],
      description: 'Additional vehicles for VIP transfers, smaller groups, and specialized transportation requirements.',
    },
  ],
  services: [
    { title: 'Airport Transfers', description: 'Seamless Paro Airport pickups and drop-offs to any destination in Bhutan.' },
    { title: 'Corporate & Delegation', description: 'Large-scale transportation for corporate events, government delegations, and conferences.' },
    { title: 'Tour Groups', description: "Multi-vehicle logistics for tour operators across Bhutan's diverse regions." },
    { title: 'Long-Distance Travel', description: 'Multi-day packages with experienced drivers who know every route in the Kingdom.' },
    { title: 'Family & Individual', description: 'Personal vehicle rentals with chauffeur for families and small groups.' },
    { title: 'Event Transportation', description: 'Coordinated fleet deployment for weddings, festivals, and special occasions.' },
  ],
};

const COMPANY_ROLES: Record<string, string> = {
  'thangka': 'Founder & Patron',
  'car-rental': 'President & CEO',
  'travelers': 'Founder & Director',
  'enterprise': 'Chairman',
  'food-247': 'Founder',
  'hitokara': 'Founder & Owner',
  'trading': 'Managing Director',
};

export const CompanyDetailPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const company = GROUP_COMPANIES.find(c => c.id === companyId);

  if (!company) {
    return (
      <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif-luxury text-3xl mb-4">Company Not Found</h1>
          <Link to="/" className="text-[#C5A059] hover:text-[#E8D4A2] transition-colors text-sm">Return to Home</Link>
        </div>
      </div>
    );
  }

  const isCarRental = company.id === 'car-rental';

  return (
    <div className="min-h-screen bg-[#09090b] text-[#f4f4f5]">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#09090b]/95 backdrop-blur-md border-b border-[#27272a] py-4">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#C5A059] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <BrandMonogram size={44} />
          </Link>
          <span className="text-[10px] font-mono tracking-widest text-[#52525B]">{company.number}</span>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative pt-20">
        <div className="relative aspect-[16/9] max-h-[500px] overflow-hidden">
          <img src={company.image} alt={company.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-16">
            <div className="max-w-7xl mx-auto">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C5A059] mb-3">{company.industry}</p>
              <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-normal mb-3">{company.name}</h1>
              <p className="text-lg italic text-white/70 font-serif-luxury">{company.subtitle}</p>
              {COMPANY_ROLES[company.id] && (
                <p className="text-xs text-[#71717A] mt-3 uppercase tracking-[0.2em]">{COMPANY_ROLES[company.id]}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Stats */}
      {isCarRental && (
        <div className="border-y border-[#27272a] py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#71717A] mb-8 text-center">Fleet at a Glance</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {CAR_RENTAL_FLEET.stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="text-center">
                    <Icon className="w-5 h-5 text-[#C5A059] mx-auto mb-3" />
                    <p className="font-serif-luxury text-3xl text-[#E8D4A2] font-light">{stat.number}</p>
                    <p className="text-xs text-[#A1A1AA] mt-1">{stat.label}</p>
                    <p className="text-[10px] text-[#52525B] mt-0.5">{stat.detail}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-[10px] text-[#52525B] mt-8 uppercase tracking-[0.2em]">17+ SUVs &nbsp;|&nbsp; 7 Hi-Roof Buses &nbsp;|&nbsp; 8-9 Seaters &nbsp;|&nbsp; More Available</p>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* About */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">ABOUT</span>
            <span className="h-px w-12 bg-[#C5A059]/40" />
          </div>
          <div className="text-base text-[#A1A1AA] leading-relaxed max-w-3xl space-y-4 font-light">
            {company.fullStory.split('\n\n').map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>

        {/* Fleet Details */}
        {isCarRental && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">FLEET</span>
              <span className="h-px w-12 bg-[#C5A059]/40" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#27272a]">
              {CAR_RENTAL_FLEET.fleetDetails.map((fleet, idx) => (
                <div key={idx} className="bg-[#09090b] p-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059] mb-3">{fleet.category}</p>
                  <p className="font-serif-luxury text-2xl text-[#FAF9F6] font-light mb-3">{fleet.count}</p>
                  <p className="text-sm text-[#71717A] leading-relaxed mb-4">{fleet.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {fleet.vehicles.map((v, i) => (
                      <span key={i} className="text-[10px] border border-[#27272a] px-2 py-0.5 text-[#52525B]">{v}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services */}
        {isCarRental && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">SERVICES</span>
              <span className="h-px w-12 bg-[#C5A059]/40" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a]">
              {CAR_RENTAL_FLEET.services.map((s, idx) => (
                <div key={idx} className="bg-[#09090b] p-8">
                  <h3 className="font-serif-luxury text-lg text-[#FAF9F6] mb-2">{s.title}</h3>
                  <p className="text-sm text-[#71717A] leading-relaxed font-light">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {company.gallery && company.gallery.length > 0 && (
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">GALLERY</span>
              <span className="h-px w-12 bg-[#C5A059]/40" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a]">
              {company.gallery.map((img, i) => (
                <div key={i} className="aspect-video overflow-hidden">
                  <img src={img} alt={`${company.name} ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Highlights */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">HIGHLIGHTS</span>
            <span className="h-px w-12 bg-[#C5A059]/40" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {company.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3 py-4 border-b border-[#27272a]">
                <span className="w-1 h-1 bg-[#C5A059] rounded-full shrink-0 mt-2" />
                <span className="text-sm text-[#A1A1AA] font-light">{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="border-t border-[#27272a] pt-12">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">CONTACT</span>
            <span className="h-px w-12 bg-[#C5A059]/40" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {company.location && (
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1">Location</p>
                  <p className="text-sm text-[#D4D4D8]">{company.location}</p>
                </div>
              </div>
            )}
            {company.contactEmail && (
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1">Email</p>
                  <a href={`mailto:${company.contactEmail}`} className="text-sm text-[#D4D4D8] hover:text-[#C5A059] transition-colors">{company.contactEmail}</a>
                </div>
              </div>
            )}
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1">Phone</p>
                <a href="tel:+97517377777" className="text-sm text-[#D4D4D8] hover:text-[#C5A059] transition-colors">+975 17377777</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#050507] py-10 border-t border-[#27272a]/50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 text-center">
          <BrandMonogram size={48} className="justify-center mb-4" />
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#52525B]">&copy; {new Date().getFullYear()} All Rights Reserved. Thimphu, Bhutan</p>
        </div>
      </footer>
    </div>
  );
};
