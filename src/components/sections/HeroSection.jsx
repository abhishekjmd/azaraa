export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4), transparent), url('https://lh3.googleusercontent.com/aida-public/AB6AXuC1ykFNw9QYF0C_1TgDfGuUEV8uLQvplZnmwh8qzM--XjH6xXfu9a9pX-UgU8lEy0kq0hrgDZYKwYeh0mLIr4-U3xczQyQjgJTOIsbfJ42zu55IaNyOUK9nZm5Irqw0vFgkSBSK2LvjBl9El7ljWH3J9N9q-ftlJgJLudintDTAhS7kiNhMjH8P-Cya4vh-9gI2fo6pt4JNe0OTVlWLhQpyTbtpNiO_BXnttkQnTy44pWkiNm4OsJXczWsxUa9WP_yiLBkMPSUpeXg')`,
        }}
      />
      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-start text-white">
        <span className="uppercase tracking-[0.5em] text-sm mb-4 font-sans text-primary">
          The Bridal Edit 2024
        </span>
        <h1 className="text-5xl md:text-7xl font-bold max-w-2xl leading-tight mb-8">
          The Art of <br />
          <span className="italic font-normal">Heritage</span>
        </h1>
        <p className="text-lg md:text-xl max-w-lg mb-10 opacity-90 font-light">
          Discover the timeless elegance of hand-crafted Indian jewellery, designed for the modern bride who honors tradition.
        </p>
        <div className="flex gap-4">
          <button className="bg-primary text-[#1b160d] px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-white transition-all shadow-xl">
            Explore Bridal
          </button>
          <button className="border border-white/50 backdrop-blur-sm text-white px-8 py-4 rounded-md font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all">
            View Lookbook
          </button>
        </div>
      </div>
    </section>
  );
}
