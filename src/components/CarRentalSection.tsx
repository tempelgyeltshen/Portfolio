import React from 'react';
import { Car, ShieldCheck, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/assets';

interface CarRentalSectionProps {
  onInquire: (subject: string) => void;
}

export const CarRentalSection: React.FC<CarRentalSectionProps> = ({ onInquire }) => {
  const services = [
    'Chauffeur-Driven Executive Travel',
    'Airport Transfers (Paro Airport Gateway)',
    'Corporate & Delegation Mobility',
    'Customized Travel & Expedition Vehicles',
    'Inter-District Mountain Highway Travel',
    'Short-Term & Long-Term Leases'
  ];

  return (
    <section id="car-rental-section" className="py-24 bg-[#e9edc9] text-[#2C2D31] relative border-t border-gray-200 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT: Premium Vehicle Photography Frame */}
          <div className="lg:col-span-6 relative animate-fade-in-up">
            <div className="relative rounded-sm overflow-hidden border border-[#8B6914]/30 bg-[#faedcd] shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={ASSETS.carental1}
                  alt="High Quality Car Rental Premium Fleet"
                  className="w-full h-full object-cover filter brightness-100 contrast-105 transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 bg-white border-t border-[#8B6914]/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#8B6914]">
                  <MapPin className="w-4 h-4" />
                  <span>Headquartered in Thimphu, Bhutan</span>
                </div>
                <span className="text-[11px] text-[#4A4843] font-medium">President: Mr. Pema Tshering</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Services & Mobility Standards */}
          <div className="lg:col-span-6 space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#8B6914]/10 border border-[#8B6914]/30 text-xs uppercase tracking-[0.2em] text-[#8B6914] font-semibold transition-all duration-300 hover:bg-[#8B6914]/20">
              <Car className="w-3.5 h-3.5" />
              <span>02 — TRANSPORTATION & MOBILITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#2C2D31] tracking-tight text-shadow-sm">
              High Quality Car Rental
            </h2>

            <p className="text-lg font-serif italic text-[#8B6914] font-semibold text-shadow-sm">
              Mobility You Can Depend On
            </p>

            <p className="text-sm text-[#4A4843] font-normal leading-relaxed">
              Reliable transportation is an essential component of Bhutan's tourism ecosystem and corporate infrastructure. High Quality Car Rental complements group activities by providing visitors and partners with transportation solutions suited to different mountain travel requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {services.map((srv, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 p-3 bg-[#faedcd] border border-gray-200 rounded-sm text-xs text-[#2C2D31] font-medium transition-all duration-300 hover:border-[#8B6914]/50 hover:shadow-md">
                  <CheckCircle2 className="w-4 h-4 text-[#8B6914] shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>

            {/* Value Indicators */}
            <div className="pt-4 flex items-center space-x-6 text-xs text-[#4A4843] font-medium">
              <div className="flex items-center space-x-1.5 transition-all duration-300 hover:text-[#8B6914]">
                <ShieldCheck className="w-4 h-4 text-[#8B6914]" />
                <span>Safety Inspected</span>
              </div>
              <div className="flex items-center space-x-1.5 transition-all duration-300 hover:text-[#8B6914]">
                <Clock className="w-4 h-4 text-[#8B6914]" />
                <span>Punctual Service</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onInquire('Car Rental & Chauffeur Inquiry')}
                className="px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#2C2D31] hover:bg-[#8B6914] transition-all duration-300 rounded-sm shadow-md hover:shadow-lg"
              >
                Reserve Transportation Service
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
