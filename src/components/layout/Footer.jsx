'use client';

export default function Footer() {
  return (
    <footer className="bg-white text-[#1A1A1A] border-t border-gray-100">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 border-b border-gray-100 text-center">
        <h3 className="text-[16px] font-sans font-bold uppercase tracking-[0.3em] mb-8">Subscribe to our Newsletter</h3>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            className="flex-1 bg-transparent border border-gray-300 px-4 py-3 text-sm focus:ring-1 focus:ring-[#C9A86A] focus:border-[#C9A86A] transition-colors outline-none placeholder:text-gray-400 rounded-md"
            placeholder="Enter your email address"
            type="email"
          />
          <button className="bg-[#C9A86A] text-white px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-[#D4AF37] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-[0.2em] text-[#1A1A1A]">AZARAA</h2>
            <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#C9A86A]">Heritage Artistry</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Crafting legacies since 1992. Experience the finest in ethnic luxury, where tradition meets modern elegance.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-8">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500 uppercase tracking-widest">
              <li><a className="hover:text-[#C9A86A] transition-colors" href="#">Shop All</a></li>
              <li><a className="hover:text-[#C9A86A] transition-colors" href="#">Bridal Trousseau</a></li>
              <li><a className="hover:text-[#C9A86A] transition-colors" href="#">New Arrivals</a></li>
              <li><a className="hover:text-[#C9A86A] transition-colors" href="#">Collections</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-8">Customer Care</h4>
            <ul className="space-y-4 text-sm text-gray-500 uppercase tracking-widest">
              <li><a className="hover:text-[#C9A86A] transition-colors" href="#">Shipping Policy</a></li>
              <li><a className="hover:text-[#C9A86A] transition-colors" href="#">Returns & Exchanges</a></li>
              <li><a className="hover:text-[#C9A86A] transition-colors" href="#">Size Guide</a></li>
              <li><a className="hover:text-[#C9A86A] transition-colors" href="#">Track Order</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-[0.2em] mb-8">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#C9A86A] text-xl">call</span>
                <a className="hover:text-[#C9A86A]" href="tel:+918141673583">+91 8141673583</a>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#C9A86A] text-xl">mail</span>
                <a className="hover:text-[#C9A86A]" href="mailto:Info@azaraa.com">Info@azaraa.com</a>
              </li>
              <li className="flex gap-3">
                <span className="material-symbols-outlined text-[#C9A86A] text-xl">location_on</span>
                <span>Thaltej, Ahmedabad, <br />Gujarat, India</span>
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
              <a className="hover:text-[#1A1A1A]" href="#">Privacy Policy</a>
              <a className="hover:text-[#1A1A1A]" href="#">Terms of Service</a>
              <a className="hover:text-[#1A1A1A]" href="#">Cookies</a>
            </div>
          </div>
          {/* Payment placeholder */}
          <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default">
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
            <div className="h-4 w-12 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
