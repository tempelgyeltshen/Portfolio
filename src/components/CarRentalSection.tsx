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
    <section id="car-rental-section" className="py-24 bg-[#e9edc9] text-[#1C1D21] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Premium Vehicle Photography Frame */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-sm overflow-hidden border border-[#d4a373]/30 bg-[#faedcd] shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={ASSETS.carental1}
                  alt="High Quality Car Rental Premium Fleet"
                  className="w-full h-full object-cover filter brightness-100 contrast-105"
                />
              </div>

              <div className="p-6 bg-white border-t border-[#d4a373]/20 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#ccd5ae]">
                  <MapPin className="w-4 h-4" />
                  <span>Headquartered in Thimphu, Bhutan</span>
                </div>
                <span className="text-[11px] text-[#5A5854] font-medium">President: Mr. Pema Tshering</span>
              </div>
            </div>
          </div>

          {/* RIGHT: Services & Mobility Standards */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded bg-[#d4a373]/10 border border-[#d4a373]/30 text-xs uppercase tracking-[0.2em] text-[#ccd5ae] font-semibold">
              <Car className="w-3.5 h-3.5" />
              <span>04 — TRANSPORTATION & MOBILITY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1C1D21] tracking-tight">
              High Quality Car Rental
            </h2>

            <p className="text-lg font-serif italic text-[#ccd5ae] font-semibold">
              Mobility You Can Depend On
            </p>

            <p className="text-sm text-[#5A5854] font-normal leading-relaxed">
              Reliable transportation is an essential component of Bhutan's tourism ecosystem and corporate infrastructure. High Quality Car Rental complements group activities by providing visitors and partners with transportation solutions suited to different mountain travel requirements.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {services.map((srv, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 p-3 bg-[#faedcd] border border-gray-200 rounded-sm text-xs text-[#1C1D21] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#ccd5ae] shrink-0" />
                  <span>{srv}</span>
                </div>
              ))}
            </div>

            {/* Value Indicators */}
            <div className="pt-4 flex items-center space-x-6 text-xs text-[#5A5854] font-medium">
              <div className="flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4 text-[#ccd5ae]" />
                <span>Safety Inspected</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Clock className="w-4 h-4 text-[#ccd5ae]" />
                <span>Punctual Service</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onInquire('Car Rental & Chauffeur Inquiry')}
                className="px-6 py-3 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C1D21] hover:bg-[#d4a373] transition-colors rounded-sm shadow-md"
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
