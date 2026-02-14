export default function Testimonials() {
  const reviews = [
    {
      name: 'Ananya S.',
      content: '"The craftsmanship is unparalleled. My bridal set was the talk of the evening. Truly a masterpiece."',
    },
    {
      name: 'Meera K.',
      content: '"Every piece tells a story. I feel like I\'m wearing a part of my heritage. The service was exceptional."',
    },
    {
      name: 'Priya R.',
      content: '"Elegant, sophisticated, and authentic. Azaraa is my go-to for all luxury ethnic jewellery now."',
    },
  ];

  return (
    <section className="py-24 bg-white text-[#1b160d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-display font-bold">Voices of Elegance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {reviews.map((review, idx) => (
            <div key={idx} className="text-center p-8 bg-primary/5 rounded-xl border border-primary/10">
              <div className="flex justify-center mb-4 text-primary">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1" style={{ fontVariationSettings: "'FILL' 1" }}>
                    star
                  </span>
                ))}
              </div>
              <p className="italic text-gray-700 mb-6 font-display">{review.content}</p>
              <h4 className="font-bold uppercase tracking-widest text-xs">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
