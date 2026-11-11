import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { WhatsAppButton } from '../components/WhatsAppButton';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe2, 
  Calendar, 
  User, 
  MessageSquare 
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    date: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = "Please enter your full name.";
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.service) {
      errs.service = "Please select the service required.";
    }
    if (!formData.location.trim()) {
      errs.location = "Please provide the project location.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const waText = `Hello Agarwal Glass,
I would like to enquire about your glass design services.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Service Required: ${formData.service}
Project Location: ${formData.location.trim()}
Preferred Site Visit Date: ${formData.date || "To be discussed"}
Additional Requirements: ${formData.message.trim() || "None"}

Please contact me regarding the next steps.
Thank you.`;

    const url = `https://wa.me/919073407966?text=${encodeURIComponent(waText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-24 bg-[#121110]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Talk About Your Space."
          subtitle="Whether you need an apartment partition consultation or a bespoke shower enclosure, our team is just a call or message away."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Business Information & Map */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 sm:p-7 rounded-2xl bg-[#1A1918] border border-gold/30 shadow-subtle">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-5 pb-3 border-b border-gold/20">
                Agarwal Glass
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#242220] border border-gold/25 text-gold shrink-0">
                    <MapPin className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                      Head Office
                    </p>
                    <p className="text-white mt-0.5">
                      New Alipore, Kolkata, West Bengal, India
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#242220] border border-gold/25 text-gold shrink-0">
                    <Phone className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                      Phone Call
                    </p>
                    <a 
                      href="tel:+919073407966"
                      className="font-medium text-white hover:text-gold transition-colors mt-0.5 block"
                    >
                      +91 9073407966
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#242220] border border-gold/25 text-gold shrink-0">
                    <Mail className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                      Email Enquiries
                    </p>
                    <a 
                      href="mailto:agarwalglass1986@gmail.com"
                      className="font-medium text-white hover:text-gold transition-colors mt-0.5 block break-all"
                    >
                      agarwalglass1986@gmail.com
                    </a>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#242220] border border-gold/25 text-gold shrink-0">
                    <Globe2 className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gold">
                      Service Area
                    </p>
                    <p className="text-white mt-0.5">
                      Kolkata and across West Bengal
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Click-to-call & WhatsApp */}
              <div className="mt-6 pt-5 border-t border-gold/20 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+919073407966"
                  className="flex-1 py-2.5 px-4 rounded-full bg-burgundy hover:bg-burgundy-light text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 border border-gold/40 shadow-sm transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-gold-light" />
                  <span>Call Now</span>
                </a>

                <WhatsAppButton
                  className="flex-1"
                  size="md"
                  message="Hello Agarwal Glass, I would like to enquire about your glass design solutions."
                >
                  WhatsApp Chat
                </WhatsAppButton>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gold/30 bg-[#1A1918] p-2.5 shadow-subtle">
              <div className="relative h-52 w-full rounded-xl overflow-hidden bg-[#121110]">
                <iframe
                  title="Agarwal Glass - New Alipore Kolkata Office Location"
                  src="https://maps.google.com/maps?q=New%20Alipore%2C%20Kolkata%2C%20West%20Bengal%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-2 px-2 text-[10px] text-[#A89F91] leading-tight">
                Head office based in New Alipore, Kolkata. Exact site visits arranged on request across Kolkata & West Bengal.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1A1918] border border-gold/35 shadow-premium">
              <div className="mb-5 pb-3 border-b border-gold/20">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Request a Quotation & Site Visit
                </h3>
                <p className="mt-1 text-xs text-[#A89F91] leading-relaxed">
                  Fill in your details below. We will format your request into WhatsApp so you can send it directly to our team with a single tap.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Name */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gold mb-1">
                      Customer Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Rajesh Sharma"
                        className={`w-full pl-10 pr-3.5 py-2 rounded-lg bg-[#121110] border text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold ${
                          errors.name ? 'border-red-500' : 'border-gold/30'
                        }`}
                      />
                    </div>
                    {errors.name && <p className="text-red-400 text-[11px] mt-1">{errors.name}</p>}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gold mb-1">
                      Contact Phone Number *
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g., 9073407966"
                        className={`w-full pl-10 pr-3.5 py-2 rounded-lg bg-[#121110] border text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold ${
                          errors.phone ? 'border-red-500' : 'border-gold/30'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-red-400 text-[11px] mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Service Required */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gold mb-1">
                      Service Required *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full px-3.5 py-2 rounded-lg bg-[#121110] border text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold ${
                        errors.service ? 'border-red-500' : 'border-gold/30'
                      }`}
                    >
                      <option value="">Select a glass solution...</option>
                      <option value="Glass Partitions">Glass Partitions</option>
                      <option value="Glass Doors">Glass Doors</option>
                      <option value="Glass Railings">Glass Railings</option>
                      <option value="Shower Enclosures">Shower Enclosures</option>
                      <option value="Designer Mirrors">Designer Mirrors</option>
                      <option value="Decorative Glass">Decorative Glass</option>
                      <option value="Frosted Glass">Frosted Glass</option>
                    </select>
                    {errors.service && <p className="text-red-400 text-[11px] mt-1">{errors.service}</p>}
                  </div>

                  {/* Project Location */}
                  <div>
                    <label className="block text-[11px] font-semibold text-gold mb-1">
                      Project Location *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g., New Alipore, Salt Lake"
                        className={`w-full pl-10 pr-3.5 py-2 rounded-lg bg-[#121110] border text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold ${
                          errors.location ? 'border-red-500' : 'border-gold/30'
                        }`}
                      />
                    </div>
                    {errors.location && <p className="text-red-400 text-[11px] mt-1">{errors.location}</p>}
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-[11px] font-semibold text-gold mb-1">
                    Preferred Site Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-gold absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-2 rounded-lg bg-[#121110] border border-gold/30 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-[11px] font-semibold text-gold mb-1">
                    Additional Requirements / Dimensions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your room size, glass finish preference, or design ideas..."
                    className="w-full px-3.5 py-2 rounded-lg bg-[#121110] border border-gold/30 text-xs sm:text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold"
                  />
                </div>

                {/* Privacy and Transmission Notice */}
                <div className="p-3 bg-[#242220] rounded-lg border border-gold/20 text-[11px] text-[#A89F91] leading-relaxed">
                  <span className="font-semibold text-gold">Customer-Initiated WhatsApp Message:</span>{" "}
                  Clicking this button formats your details into WhatsApp. You will be redirected to WhatsApp to review and tap 'Send' directly to Agarwal Glass (+91 9073407966).
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Enquiry via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
