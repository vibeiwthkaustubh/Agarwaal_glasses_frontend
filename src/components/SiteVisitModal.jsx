import React, { useState, useEffect } from 'react';
import { X, Calendar, MapPin, User, Phone, MessageSquare } from 'lucide-react';

export const SiteVisitModal = ({
  isOpen,
  onClose,
  initialService = ""
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || '',
    location: '',
    date: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your full name.";
    }
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone || cleanPhone.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit mobile number.";
    }
    if (!formData.service) {
      newErrors.service = "Please select the service required.";
    }
    if (!formData.location.trim()) {
      newErrors.location = "Please provide the project location.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const formattedMessage = `Hello Agarwal Glass,
I would like to enquire about your glass design services.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Service Required: ${formData.service}
Project Location: ${formData.location.trim()}
Preferred Site Visit Date: ${formData.date || "To be discussed"}
Additional Requirements: ${formData.notes.trim() || "None"}

Please contact me regarding the next steps.
Thank you.`;

    const whatsappUrl = `https://wa.me/919073407966?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto bg-[#181716] text-[#EDE7DF] rounded-2xl shadow-2xl border border-gold/40 z-10 p-6 sm:p-7">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-[#242220] text-gold hover:bg-burgundy hover:text-white flex items-center justify-center transition-colors border border-gold/30"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="mb-5">
          <div className="inline-flex items-center gap-2 mb-1.5">
            <span className="w-4 h-[1.5px] bg-gold" />
            <span className="text-[10px] font-semibold uppercase tracking-luxury text-gold">
              COMPLIMENTARY SITE SURVEY
            </span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
            Book a Site Visit
          </h3>
          <p className="mt-1 text-xs text-[#A89F91]">
            Our team serves Kolkata & across West Bengal with on-site measurement, design review, and transparent quotations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          {/* Customer Name */}
          <div>
            <label className="block text-[11px] font-semibold text-gold mb-1">
              Customer Name *
            </label>
            <div className="relative">
              <User className="w-3.5 h-3.5 text-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g., Rajesh Sharma"
                className={`w-full pl-9 pr-3 py-2 rounded-lg bg-[#121110] border text-xs text-white focus:outline-none focus:ring-1 focus:ring-gold ${
                  errors.name ? 'border-red-500' : 'border-gold/30'
                }`}
              />
            </div>
            {errors.name && <p className="text-red-400 text-[10px] mt-0.5">{errors.name}</p>}
          </div>

          {/* Contact Phone */}
          <div>
            <label className="block text-[11px] font-semibold text-gold mb-1">
              Contact Phone Number *
            </label>
            <div className="relative">
              <Phone className="w-3.5 h-3.5 text-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g., 9073407966"
                className={`w-full pl-9 pr-3 py-2 rounded-lg bg-[#121110] border text-xs text-white focus:outline-none focus:ring-1 focus:ring-gold ${
                  errors.phone ? 'border-red-500' : 'border-gold/30'
                }`}
              />
            </div>
            {errors.phone && <p className="text-red-400 text-[10px] mt-0.5">{errors.phone}</p>}
          </div>

          {/* Service Required */}
          <div>
            <label className="block text-[11px] font-semibold text-gold mb-1">
              Service Required *
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className={`w-full px-3 py-2 rounded-lg bg-[#121110] border text-xs text-white focus:outline-none focus:ring-1 focus:ring-gold ${
                errors.service ? 'border-red-500' : 'border-gold/30'
              }`}
            >
              <option value="">-- Select a glass solution --</option>
              <option value="Glass Partitions">Glass Partitions</option>
              <option value="Glass Doors">Glass Doors</option>
              <option value="Glass Railings">Glass Railings</option>
              <option value="Shower Enclosures">Shower Enclosures</option>
              <option value="Designer Mirrors">Designer Mirrors</option>
              <option value="Decorative Glass">Decorative Glass</option>
              <option value="Frosted Glass">Frosted Glass</option>
            </select>
            {errors.service && <p className="text-red-400 text-[10px] mt-0.5">{errors.service}</p>}
          </div>

          {/* Project Location */}
          <div>
            <label className="block text-[11px] font-semibold text-gold mb-1">
              Project Location (City / Area) *
            </label>
            <div className="relative">
              <MapPin className="w-3.5 h-3.5 text-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g., New Alipore, Salt Lake, Ballygunge"
                className={`w-full pl-9 pr-3 py-2 rounded-lg bg-[#121110] border text-xs text-white focus:outline-none focus:ring-1 focus:ring-gold ${
                  errors.location ? 'border-red-500' : 'border-gold/30'
                }`}
              />
            </div>
            {errors.location && <p className="text-red-400 text-[10px] mt-0.5">{errors.location}</p>}
          </div>

          {/* Preferred Date */}
          <div>
            <label className="block text-[11px] font-semibold text-gold mb-1">
              Preferred Site Visit Date (Optional)
            </label>
            <div className="relative">
              <Calendar className="w-3.5 h-3.5 text-gold absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#121110] border border-gold/30 text-xs text-white focus:outline-none focus:ring-1 focus:ring-gold"
              />
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-[11px] font-semibold text-gold mb-1">
              Additional Requirements / Room Dimensions
            </label>
            <textarea
              rows={2}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Share approximate room height, glass finish preferences, or specific ideas..."
              className="w-full px-3 py-1.5 rounded-lg bg-[#121110] border border-gold/30 text-xs text-white focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Notice */}
          <div className="p-2.5 bg-[#242220] rounded-lg border border-gold/20 text-[10px] text-[#A89F91] leading-tight">
            <span className="font-semibold text-gold block mb-0.5">
              Direct WhatsApp Transmission:
            </span>
            Submitting formats your request into a ready-to-send WhatsApp message. You review and tap Send directly to Agarwal Glass (+91 9073407966).
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center justify-center gap-2 mt-3"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Schedule via WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  );
};
