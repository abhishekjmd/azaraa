'use client';

import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');

  const quickLinks = [
    { label: 'Shop All', href: '#' },
    { label: 'Bridal Trousseau', href: '#' },
    { label: 'New Arrivals', href: '#' },
    { label: 'Collections', href: '#' },
  ];

  const customerCare = [
    { label: 'Shipping Policy', href: '#' },
    { label: 'Returns & Exchanges', href: '#' },
    { label: 'Size Guide', href: '#' },
    { label: 'Track Order', href: '#' },
  ];

  const footerLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookies', href: '#' },
  ];

  return (
    <footer className="bg-white text-[#1A1A1A] border-t border-gray-100">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-gray-100 text-center">
        <h3 className="text-[16px] font-sans font-bold uppercase tracking-[0.3em] mb-8">
          Subscribe to our Newsletter
        </h3>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            className="flex-1 border-b border-gray-300 focus:border-[#C9A86A] focus:ring-0 text-sm px-0 py-2 transition-colors"
            placeholder="Enter your email address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-[#C9A86A] text-white px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="h-10 font-bold text-lg">AZARAA</h3>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9A86A]">Heritage Artistry</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Crafting legacies since 1992. Experience the finest in ethnic luxury, where tradition meets modern
              elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500 uppercase tracking-widest">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-[#C9A86A] transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-8">Customer Care</h4>
            <ul className="space-y-4 text-sm text-gray-500 uppercase tracking-widest">
              {customerCare.map((link) => (
                <li key={link.label}>
                  <a className="hover:text-[#C9A86A] transition-colors" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#C9A86A] text-xl">call</span>
                <a className="hover:text-[#C9A86A]" href="tel:+918141673583">
                  +91 8141673583
                </a>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#C9A86A] text-xl">mail</span>
                <a className="hover:text-[#C9A86A]" href="mailto:Info@azaraa.com">
                  Info@azaraa.com
                </a>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#C9A86A] text-xl">location_on</span>
                <span>
                  Thaltej, Ahmedabad, <br />
                  Gujarat, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">© 2025 Azaraa. All Rights Reserved.</p>
            <div className="flex gap-6 text-[10px] uppercase tracking-[0.2em] text-gray-500">
              {footerLinks.map((link) => (
                <a key={link.label} className="hover:text-[#1A1A1A]" href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
