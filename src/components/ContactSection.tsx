import React, { useState } from 'react';
import { CHAIRMAN_INFO } from '../data/groupData';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const mailtoSubject = encodeURIComponent(`Inquiry from Portfolio Website - ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${CHAIRMAN_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 bg-white">
      {/* Subtle Bhutanese pattern */}
      <div className="absolute inset-0 bhutan-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-black mb-4">
            Contact
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px w-16 bg-[#C9A227]"></div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C9A227] font-semibold">
              Get in Touch
            </span>
            <div className="h-px w-16 bg-[#C9A227]"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="premium-card p-8">
              {/* Name & Title */}
              <div className="mb-8">
                <h3 className="text-3xl font-serif font-bold text-black mb-2">
                  {CHAIRMAN_INFO.name}
                </h3>
                <p className="text-sm uppercase tracking-[0.2em] text-[#C9A227] font-semibold">
                  Chairman | High Quality Pvt. Ltd.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-[#C9A227] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-1">
                      Email
                    </span>
                    <a
                      href={`mailto:${CHAIRMAN_INFO.email}`}
                      className="text-lg text-black hover:text-[#C9A227] transition-colors duration-300"
                    >
                      {CHAIRMAN_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-[#C9A227] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-1">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${CHAIRMAN_INFO.phone}`}
                      className="text-lg text-black hover:text-[#C9A227] transition-colors duration-300"
                    >
                      {CHAIRMAN_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 border border-[#C9A227] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#C9A227]" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold block mb-1">
                      Location
                    </span>
                    <p className="text-lg text-black">
                      Thimphu, Kingdom of Bhutan
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="my-8 border-t border-gray-200"></div>

              {/* Website */}
              <div>
                <a
                  href={CHAIRMAN_INFO.webUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-[#C9A227] transition-colors duration-300 uppercase tracking-[0.1em]"
                >
                  {CHAIRMAN_INFO.website}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="premium-card p-8">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#C9A227]/20 border border-[#C9A227] flex items-center justify-center mx-auto text-[#C9A227]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-black">
                  Thank You
                </h3>
                <p className="text-gray-600">
                  Your inquiry has been received. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 text-xs uppercase tracking-[0.2em] text-white bg-black border border-black hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A227] focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A227] focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A227] focus:outline-none transition-colors duration-300"
                    placeholder="+975..."
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A227] focus:outline-none transition-colors duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="Business Inquiry">Business Inquiry</option>
                    <option value="Partnership">Partnership Opportunity</option>
                    <option value="Investment">Investment Discussion</option>
                    <option value="General">General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] text-gray-500 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-[#C9A227] focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-xs uppercase tracking-[0.2em] text-white bg-black border border-black hover:bg-[#C9A227] hover:border-[#C9A227] transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
