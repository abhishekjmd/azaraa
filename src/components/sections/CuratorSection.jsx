export default function CuratorSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative">
        <div
          className="w-full aspect-[4/5] bg-gray-200 rounded-lg overflow-hidden shadow-2xl"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxYwqgEMlBYfZKrwUIS-JBkVRkQe3YMeJocDB52rbDpFQuc0oj7Yz4lzShAEDOxgq8LBPfsXKLssbDvcZ1nfHbUBwDq_1Z3wQ9waFa6xfWnyz5BDG5NwE7yaBlXNBLah9zuJ7fVPGeA_HgULGuVyLf_cP-62Rn7mfLcBoWZOagWmFRvydMZBqWok3g_7asCZyLVYF39PWDJp1L5yyw7wivjkUYseKs6-MArAJX5kmy9hivbs9fHHzweEwQJyecZ9NgSbD4ei-BQ_E')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute -bottom-10 -right-10 bg-primary p-12 hidden md:block">
          <span className="text-4xl text-white font-display italic">"Legacy is our luxury."</span>
        </div>
      </div>

      <div>
        <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">
          The Heart of Azaraa
        </span>
        <h2 className="text-5xl font-bold mb-8 leading-tight">
          A Vision of <br />
          Curated Brilliance
        </h2>
        <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed font-light text-lg">
          <p>
            Azaraa was born from a deep-rooted passion for the craftsmanship that has adorned Indian heritage for
            centuries. Our curator, Ananya Singh, envisioned a sanctuary where the golden era of artistry meets the
            contemporary soul.
          </p>
          <p>
            Every piece in our collection is hand-selected, telling a story of ancient techniques and timeless beauty.
            We believe jewellery is not just an accessory, but an heirloom that carries the spirit of our culture
            forward.
          </p>
          <p className="italic font-display text-primary text-xl">
            "Our mission is to preserve the intricate details of the past while making them accessible to the modern
            woman who celebrates her identity."
          </p>
        </div>
        <button className="mt-12 border border-[#1b160d] dark:border-white px-10 py-4 uppercase text-xs tracking-widest font-bold hover:bg-primary hover:border-primary hover:text-white transition-all">
          Read Our Story
        </button>
      </div>
    </section>
  );
}
