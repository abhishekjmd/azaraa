export default function FeaturedCollections() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
        <div>
          <span className="text-primary uppercase tracking-[0.3em] text-xs font-bold">
            Exquisite Selection
          </span>
          <h2 className="text-4xl font-bold mt-2">Featured Collections</h2>
        </div>
        <a
          className="text-sm border-b border-primary text-primary pb-1 hover:text-black transition-colors uppercase tracking-widest"
          href="#"
        >
          View All
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[700px]">
        {/* Bridal */}
        <div className="md:col-span-8 group relative overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBmEPneTcPs7XSDkBo6Ockz8UVAg4fIii6WMAlrdi0S-o1MiCtEyfj5DR9l_Q96-HDY-VIBe4mfa-lGLIjNh84P5CqC89CnV94on35Z0PL-q3eq9SQ3b5bU9Ykg_yiddPi0qvr6PUP1AX6StUmvPuecEFlb6w9_d6X-fH963BpgMHNKUzJcZEeXLZAMHSv6UGfvFAOfzhT5niEHI3XwkUQNbHz1ws6oY-VjXDO4LJ__tFl6aBWEyoXMLB4FFz-OrpT7j6PZc6n4hc')`,
            }}
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
          <div className="absolute bottom-10 left-10 text-white">
            <h3 className="text-3xl font-bold mb-2">Bridal</h3>
            <p className="mb-4 opacity-80 max-w-xs">
              The quintessential ensemble for your most sacred day.
            </p>
            <button className="bg-white text-black px-6 py-2 rounded-md text-xs font-bold uppercase tracking-widest">
              Shop Now
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* New Arrivals */}
          <div className="flex-1 group relative overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuCtZOszRSlpkAyTQyTpHznB7WpvE3zXcmBcurGRGeaSrHXKaP5avXiTRmy5uhVPcGW_8UNsN4RU8sWDi86Imae_7oA1Rh_HPIJlRn179cDN3tQ_i7N9pfzwIyK9IgYnH6jQxXi6ZSm99t44Pg3yT2Ma_B8F5L7qSvgx-4_dei9ULjwTFtxp9zshpaWajntgOwdv2vhPANwnLYpKSf0EaFkYLMljUWtczMvpcNdrdrhawAPMSnIk1fxDPiNVfMMhvAuM8vJxhI77s4o')`,
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold uppercase tracking-widest">New Arrivals</h3>
              <div className="w-10 h-0.5 bg-primary mt-2" />
            </div>
          </div>

          {/* Silk Thread */}
          <div className="flex-1 group relative overflow-hidden rounded-xl">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDjSdIGTc-cYa5DGNDlBf_0RRcy1lrfH6zD_Sgwz25kDpUBOrECJx1IKJCn2AdyUNBRy5TA8jzgKj6LVk56vKfd5z9X82f5IhTPD81xRxuZ2j10ikggsNhj_5EPxR5-qgj2wyags7QKKGN9p4zY15ckZmfJIrehDrYcHHEyA5LswHc3Aoz7iWcOYK3MKmL-Tt3hm3IqgRT3dQMcfslQGLfUmgJugmjqooRsJ6u4vgcSE_nqE36-Q6s-27UYwZWMpNuF7fG2vV2sx4s')`,
              }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h3 className="text-2xl font-bold uppercase tracking-widest text-center">
                Silk Thread<br />
                <span className="text-sm font-normal normal-case italic">Hand-woven Luxury</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
