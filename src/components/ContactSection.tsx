import React, { useState } from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { Mail, Phone, MapPin, Send, CheckCircle2, X } from 'lucide-react';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

export const ContactModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}> = ({ isOpen, onClose, initialTopic }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', organization: '',
    inquiryType: 'Car Rental Inquiry',
    message: initialTopic ? `Inquiring regarding ${initialTopic}: ` : '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`Inquiry - ${formData.inquiryType}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nOrg: ${formData.organization}\nType: ${formData.inquiryType}\n\n${formData.message}`);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.location.href = `mailto:${CHAIRMAN_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({ name: '', email: '', organization: '', inquiryType: 'Car Rental Inquiry', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-xl bg-[#09090b] border border-[#27272a] p-8 sm:p-10 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="absolute top-6 right-6 text-[#71717A] hover:text-[#C5A059] transition-colors" aria-label="Close">
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <CheckCircle2 className="w-10 h-10 text-[#C5A059] mx-auto" />
            <div className="space-y-2">
              <h3 className="font-serif-luxury text-2xl text-[#FAF9F6]">Inquiry Received</h3>
              <p className="text-sm text-[#A1A1AA] max-w-sm mx-auto">Thank you. We will review your message within 24 business hours.</p>
            </div>
            <button onClick={handleReset} className="text-[11px] uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#E8D4A2] transition-colors">Close</button>
          </div>
        ) : (
          <div>
            <h3 className="font-serif-luxury text-2xl text-[#FAF9F6] mb-1">Get in Touch</h3>
            <p className="text-xs text-[#71717A] mb-8">For tourists, travelers, and business inquiries worldwide.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1.5 block">Name *</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-transparent border border-[#27272a] focus:border-[#C5A059] px-3 py-2.5 text-sm text-[#FAF9F6] outline-none transition-colors" />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1.5 block">Email *</label>
                  <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-transparent border border-[#27272a] focus:border-[#C5A059] px-3 py-2.5 text-sm text-[#FAF9F6] outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1.5 block">Inquiry Type</label>
                <select value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value})} className="w-full bg-transparent border border-[#27272a] focus:border-[#C5A059] px-3 py-2.5 text-sm text-[#FAF9F6] outline-none transition-colors">
                  <option>Car Rental Inquiry</option>
                  <option>Tour Package / Travel</option>
                  <option>Business Partnership</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1.5 block">Message *</label>
                <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="w-full bg-transparent border border-[#27272a] focus:border-[#C5A059] px-3 py-2.5 text-sm text-[#FAF9F6] outline-none transition-colors resize-none" />
              </div>
              <button type="submit" disabled={loading} className="w-full py-3 bg-[#C5A059] text-[#09090b] text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#E8D4A2] transition-colors flex items-center justify-center gap-2 disabled:opacity-50">
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export const ContactSection: React.FC<{ onOpenContactModal: () => void }> = ({ onOpenContactModal }) => {
  return (
    <section id="contact" className="relative bg-[#09090b] text-[#f4f4f5] py-28 sm:py-36 overflow-hidden border-t border-[#27272a]">
      <BhutaneseTextileBackground variant="dark" opacity={0.05} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#C5A059]">CONTACT</span>
              <span className="h-px w-12 bg-[#C5A059]/40" />
            </div>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-normal tracking-tight text-[#FAF9F6] leading-[1.1]">
              Plan Your Journey<br />to Bhutan
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1">Email</p>
                <a href={`mailto:${CHAIRMAN_INFO.email}`} className="text-sm text-[#D4D4D8] hover:text-[#C5A059] transition-colors">{CHAIRMAN_INFO.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1">Phone</p>
                <a href={`tel:${CHAIRMAN_INFO.phone}`} className="text-sm text-[#D4D4D8] hover:text-[#C5A059] transition-colors">{CHAIRMAN_INFO.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C5A059] mt-0.5 shrink-0" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#71717A] mb-1">Location</p>
                <p className="text-sm text-[#D4D4D8]">Thimphu, Bhutan</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <button
              onClick={onOpenContactModal}
              className="text-[11px] uppercase tracking-[0.22em] text-[#C5A059] border border-[#C5A059] px-6 py-3 hover:bg-[#C5A059] hover:text-[#09090b] transition-all duration-300 font-medium"
            >
              Start a Conversation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
