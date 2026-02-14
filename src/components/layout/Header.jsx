'use client';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-[90px] bg-white border-b border-gray-100 flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Left: Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">
            Home
          </a>
          <div className="group relative">
            <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors flex items-center gap-1" href="#">
              Shop <span className="material-symbols-outlined text-sm">expand_more</span>
            </a>
          </div>
          <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">
            Designers
          </a>
          <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">
            Collections
          </a>
        </nav>

        {/* Center: Logo */}
        <a className="absolute left-1/2 -translate-x-1/2" href="/">
          <img
            alt="AZARAA Luxury Jewellery"
            className="h-[45px] md:h-[50px] object-contain"
            src="/logo.png"
          />
        </a>

        {/* Right: Nav + Icons */}
        <div className="flex items-center gap-6">
          <nav className="hidden xl:flex items-center gap-8 mr-4">
            <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">
              About
            </a>
            <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">
              Contact
            </a>
            <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#C9A86A] font-semibold border-b border-[#C9A86A]" href="#">
              Book Appointment
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined text-sm">search</span>
            </button>
            <button className="hover:opacity-70 transition-opacity hidden md:block">
              <span className="material-symbols-outlined text-sm">person</span>
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <span className="material-symbols-outlined text-sm">favorite</span>
            </button>
            <button className="hover:opacity-70 transition-opacity relative">
              <span className="material-symbols-outlined text-sm">shopping_cart</span>
              <span className="absolute -top-2 -right-2 bg-[#C9A86A] text-[9px] text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
