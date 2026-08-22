import React, { useState } from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { Mail, Phone, MapPin, Send, CheckCircle2, X, Shield } from 'lucide-react';
import { BhutaneseTextileBackground } from './BhutaneseMotifs';

export const ContactModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  initialTopic?: string;
}> = ({ isOpen, onClose, initialTopic }) => {
  const [formData, setFormData] = useState({
    name: '', email: '', organization: '',
    inquiryType: 'Business Inquiry',
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
    setFormData({ name: '', email: '', organization: '', inquiryType: 'Business Inquiry', message: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-2xl bg-[#121214] text-[#f4f4f5] border border-[#C5A059]/50 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#C5A059]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#C5A059]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#C5A059]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#C5A059]" />
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-[#A1A1AA] hover:text-[#C5A059] transition-colors cursor-pointer" aria-label="Close"><X className="w-5 h-5" /></button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#C5A059]/10 border border-[#C5A059] flex items-center justify-center text-[#C5A059]"><CheckCircle2 className="w-8 h-8" /></div>
            <div className="space-y-2">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[#FAF9F6]">Inquiry Received</h3>
              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-md mx-auto leading-relaxed">Thank you. Your message has been received. A representative will review your correspondence within 24 business hours.</p>
            </div>
            <button onClick={handleReset} className="px-6 py-2.5 bg-[#C5A059] text-[#09090b] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#E8D4A2] cursor-pointer">CLOSE</button>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#27272a] pb-6 mb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-semibold text-[#C5A059] mb-1"><span>EXECUTIVE INQUIRY</span></div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#FAF9F6]">Initiate a Conversation</h3>
              <p className="text-xs text-[#A1A1AA] mt-1 font-light">Direct engagement for partnerships, investments, and business inquiries.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1"><label className="text-[10px] uppercase tracking-[0.18em] text-[#A1A1AA] font-medium">Full Name *</label><input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Your name" className="w-full bg-[#18181B] border border-[#27272a] focus:border-[#C5A059] px-3.5 py-2.5 text-xs text-[#FAF9F6] outline-none transition-colors" /></div>
                <div className="space-y-1"><label className="text-[10px] uppercase tracking-[0.18em] text-[#A1A1AA] font-medium">Email *</label><input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" className="w-full bg-[#18181B] border border-[#27272a] focus:border-[#C5A059] px-3.5 py-2.5 text-xs text-[#FAF9F6] outline-none transition-colors" /></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1"><label className="text-[10px] uppercase tracking-[0.18em] text-[#A1A1AA] font-medium">Organization</label><input type="text" value={formData.organization} onChange={e => setFormData({...formData, organization: e.target.value})} placeholder="Organization Name" className="w-full bg-[#18181B] border border-[#27272a] focus:border-[#C5A059] px-3.5 py-2.5 text-xs text-[#FAF9F6] outline-none transition-colors" /></div>
                <div className="space-y-1"><label className="text-[10px] uppercase tracking-[0.18em] text-[#A1A1AA] font-medium">Inquiry Type</label><select value={formData.inquiryType} onChange={e => setFormData({...formData, inquiryType: e.target.value})} className="w-full bg-[#18181B] border border-[#27272a] focus:border-[#C5A059] px-3 py-2.5 text-xs text-[#FAF9F6] outline-none transition-colors"><option>Business Inquiry</option><option>Partnership</option><option>Investment</option><option>General</option></select></div>
              </div>
              <div className="space-y-1"><label className="text-[10px] uppercase tracking-[0.18em] text-[#A1A1AA] font-medium">Message *</label><textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} placeholder="Your inquiry..." className="w-full bg-[#18181B] border border-[#27272a] focus:border-[#C5A059] px-3.5 py-2.5 text-xs text-[#FAF9F6] outline-none transition-colors resize-none" /></div>
              <div className="pt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[10px] text-[#71717A]"><Shield className="w-3.5 h-3.5 text-[#C5A059]" /><span>Confidential</span></div>
                <button type="submit" disabled={loading} className="px-6 py-2.5 bg-[#C5A059] text-[#09090b] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#E8D4A2] transition-colors flex items-center gap-2 disabled:opacity-50 cursor-pointer"><span>{loading ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE'}</span><Send className="w-3.5 h-3.5" /></button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export const ContactSection: React.FC<{ onOpenContactModal: () => void }> = ({ onOpenContactModal }) => {
  return (
    <section id="contact" className="relative bg-[#09090b] text-[#f4f4f5] py-24 sm:py-32 overflow-hidden border-t border-[#27272a]/80">
      <BhutaneseTextileBackground variant="dark" opacity={0.045} />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3"><span className="text-xs uppercase tracking-[0.26em] font-semibold text-[#C5A059]">GET IN TOUCH</span><span className="h-[1px] w-10 bg-[#C5A059]/60" /></div>
            <h2 id="contact-headline" className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#FAF9F6] leading-[1.15]">Let&apos;s Build<br />the Future Together.</h2>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#D4D4D8]"><div className="p-2 border border-[#27272a] text-[#C5A059] shrink-0"><Mail className="w-4 h-4" /></div><div><p className="text-[10px] uppercase tracking-[0.16em] text-[#71717A]">Email</p><a href={`mailto:${CHAIRMAN_INFO.email}`} className="hover:text-[#C5A059] transition-colors font-mono">{CHAIRMAN_INFO.email}</a></div></div>
            <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#D4D4D8]"><div className="p-2 border border-[#27272a] text-[#C5A059] shrink-0"><Phone className="w-4 h-4" /></div><div><p className="text-[10px] uppercase tracking-[0.16em] text-[#71717A]">Phone</p><a href={`tel:${CHAIRMAN_INFO.phone}`} className="hover:text-[#C5A059] transition-colors font-mono">{CHAIRMAN_INFO.phone}</a></div></div>
            <div className="flex items-center gap-3.5 text-xs sm:text-sm text-[#D4D4D8]"><div className="p-2 border border-[#27272a] text-[#C5A059] shrink-0"><MapPin className="w-4 h-4" /></div><div><p className="text-[10px] uppercase tracking-[0.16em] text-[#71717A]">Headquarters</p><span className="text-[#A1A1AA]">Thimphu, Kingdom of Bhutan</span></div></div>
          </div>
          <div className="lg:col-span-3 flex justify-start lg:justify-end">
            <button onClick={onOpenContactModal} className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#C5A059] text-xs font-medium uppercase tracking-[0.2em] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#09090b] transition-all duration-300 shadow-sm cursor-pointer"><span>START A CONVERSATION</span><svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg></button>
          </div>
        </div>
      </div>
    </section>
  );
};
