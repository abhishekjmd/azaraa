import TopBanner from './TopBanner';

export default function Header() {
  return (
    <>
      <TopBanner />
      <header className="sticky top-0 z-50 w-full h-[90px] bg-white border-b border-gray-100 flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
          {/* Left: Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">Home</a>
            <div className="group relative">
              <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors flex items-center gap-1" href="#">
                Shop <span className="material-symbols-outlined text-sm">expand_more</span>
              </a>
            </div>
            <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">Designers</a>
            <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">Collections</a>
          </nav>

          {/* Center: Logo */}
          <a className="absolute left-1/2 -translate-x-1/2" href="/">
            <h1 className="text-2xl font-bold tracking-[0.2em] text-[#1A1A1A]">AZARAA</h1>
          </a>

          {/* Right: Nav + Icons */}
          <div className="flex items-center gap-6">
            <nav className="hidden xl:flex items-center gap-8 mr-4">
              <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">About</a>
              <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#1A1A1A] hover:text-[#C9A86A] transition-colors" href="#">Contact</a>
              <a className="text-[14px] font-sans uppercase tracking-[0.15em] text-[#C9A86A] font-semibold border-b border-[#C9A86A]" href="#">Book Appointment</a>
            </nav>
            <div className="flex items-center gap-4 text-[#1A1A1A]">
              <button className="hover:text-[#C9A86A] transition-colors">
                <span className="material-symbols-outlined">search</span>
              </button>
              <button className="hover:text-[#C9A86A] transition-colors hidden md:block">
                <span className="material-symbols-outlined">person</span>
              </button>
              <button className="hover:text-[#C9A86A] transition-colors">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <button className="hover:text-[#C9A86A] transition-colors relative">
                <span className="material-symbols-outlined">shopping_bag</span>
                <span className="absolute -top-2 -right-2 bg-[#C9A86A] text-[9px] text-white rounded-full w-4 h-4 flex items-center justify-center font-bold">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
