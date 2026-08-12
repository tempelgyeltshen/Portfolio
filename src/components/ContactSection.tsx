import React, { useState } from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { Mail, Phone, Globe, Send, CheckCircle2, Building2 } from 'lucide-react';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: initialSubject || 'Partnership',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const mailtoSubject = encodeURIComponent(`[High Quality Group Inquiry] ${formData.inquiryType} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nOrganization: ${formData.organization}\nCategory: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:pemsbumthap@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#e9edc9] text-[#1C1D21] relative border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#ccd5ae]">
            EXECUTIVE ENGAGEMENT
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1C1D21] tracking-tight">
            LET'S BUILD SOMETHING MEANINGFUL
          </h2>
          <p className="text-sm text-[#5A5854] font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            Connect directly with the Chairman's Office and the leadership of High Quality Pvt. Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: Official Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#faedcd] border border-[#d4a373]/30 rounded-sm space-y-6 shadow-md">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#ccd5ae] font-semibold block mb-1">
                  OFFICE OF THE CHAIRMAN
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1C1D21]">
                  {CHAIRMAN_INFO.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#5A5854] font-medium">
                  Chairman | {CHAIRMAN_INFO.company}
                </p>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-200 text-sm">
                <a
                  href={`mailto:${CHAIRMAN_INFO.email}`}
                  className="flex items-center space-x-3.5 text-[#1C1D21] hover:text-[#ccd5ae] transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-[#d4a373]/10 border border-[#d4a373]/30 flex items-center justify-center shrink-0 text-[#ccd5ae]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8B85] font-semibold block">Email Address</span>
                    <span className="font-mono text-xs font-medium">{CHAIRMAN_INFO.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${CHAIRMAN_INFO.phone}`}
                  className="flex items-center space-x-3.5 text-[#1C1D21] hover:text-[#ccd5ae] transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-[#d4a373]/10 border border-[#d4a373]/30 flex items-center justify-center shrink-0 text-[#ccd5ae]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8B85] font-semibold block">Mobile / WhatsApp</span>
                    <span className="font-mono text-xs font-medium">{CHAIRMAN_INFO.phone}</span>
                  </div>
                </a>

                <a
                  href={CHAIRMAN_INFO.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3.5 text-[#1C1D21] hover:text-[#ccd5ae] transition-colors group"
                >
                  <div className="w-10 h-10 rounded bg-[#d4a373]/10 border border-[#d4a373]/30 flex items-center justify-center shrink-0 text-[#ccd5ae]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#8E8B85] font-semibold block">Official Tourism Website</span>
                    <span className="font-mono text-xs font-medium">{CHAIRMAN_INFO.website}</span>
                  </div>
                </a>
              </div>

              <div className="pt-4 border-t border-gray-200 space-y-2">
                <span className="text-xs font-semibold text-[#ccd5ae] uppercase tracking-wider block">
                  Enterprise Headquarters:
                </span>
                <p className="text-xs text-[#5A5854] font-normal leading-relaxed">
                  High Quality Pvt. Ltd.<br />
                  Thimphu, Kingdom of Bhutan
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Corporate Inquiry Form */}
          <div className="lg:col-span-7 bg-[#faedcd] border border-[#d4a373]/30 rounded-sm p-8 sm:p-10 shadow-md">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#d4a373]/20 border border-[#d4a373] flex items-center justify-center mx-auto text-[#ccd5ae]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1C1D21]">
                  Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-[#5A5854] max-w-md mx-auto font-normal leading-relaxed">
                  Thank you for connecting with High Quality Pvt. Ltd. Your communication has been dispatched directly to <strong className="text-[#1C1D21]">pemsbumthap@gmail.com</strong> and the Chairman's Office.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold text-white bg-[#1C1D21] hover:bg-[#d4a373] transition-colors rounded-sm mt-4 shadow-md"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-gray-200 pb-4 mb-2">
                  <h3 className="text-xl font-serif font-bold text-[#1C1D21] flex items-center space-x-2">
                    <Building2 className="w-5 h-5 text-[#ccd5ae]" />
                    <span>Corporate Inquiry Form</span>
                  </h3>
                  <p className="text-xs text-[#5A5854] mt-1 font-normal">
                    Please provide details regarding your proposal, partnership, or service request.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ccd5ae] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Tashi Dorji"
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm text-xs text-[#1C1D21] placeholder-gray-400 focus:outline-none focus:border-[#d4a373]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ccd5ae] mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@company.com"
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm text-xs text-[#1C1D21] placeholder-gray-400 focus:outline-none focus:border-[#d4a373]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ccd5ae] mb-1.5">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+975..."
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm text-xs text-[#1C1D21] placeholder-gray-400 focus:outline-none focus:border-[#d4a373]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#ccd5ae] mb-1.5">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Global Travel Inc."
                      className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm text-xs text-[#1C1D21] placeholder-gray-400 focus:outline-none focus:border-[#d4a373]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#8A6B29] mb-1.5">
                    Inquiry Category
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm text-xs text-[#1C1D21] focus:outline-none focus:border-[#d4a373]"
                  >
                    <option value="Partnership">Commercial Partnership</option>
                    <option value="Tourism">High Quality Travelers (Tourism)</option>
                    <option value="Thangka">High Quality Thangka Art & Crafts</option>
                    <option value="Trading">Commercial Sourcing & Trading</option>
                    <option value="CarRental">Car Rental & Transportation</option>
                    <option value="Enterprise">Enterprise Ventures</option>
                    <option value="Hitokara">Hitokara Lounge</option>
                    <option value="General">General Chairman's Office Query</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#8A6B29] mb-1.5">
                    Message / Proposal *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry or proposal..."
                    className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-sm text-xs text-[#1C1D21] placeholder-gray-400 focus:outline-none focus:border-[#B08B46]"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs uppercase tracking-[0.2em] font-bold text-white bg-[#1C1D21] hover:bg-[#d4a373] transition-colors rounded-sm flex items-center justify-center space-x-2 shadow-md"
                >
                  <Send className="w-4 h-4 text-[#d4a373]" />
                  <span>Transmit Inquiry to Chairman's Office</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
