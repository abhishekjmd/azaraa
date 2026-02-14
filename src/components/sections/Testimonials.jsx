const testimonials = [
  {
    id: 1,
    text: '"The craftsmanship is unparalleled. My bridal set was the talk of the evening. Truly a masterpiece."',
    author: 'Ananya S.',
  },
  {
    id: 2,
    text: '"Every piece tells a story. I feel like I\'m wearing a part of my heritage. The service was exceptional."',
    author: 'Meera K.',
  },
  {
    id: 3,
    text: '"Elegant, sophisticated, and authentic. Azaraa is my go-to for all luxury ethnic jewellery now."',
    author: 'Priya R.',
  },
];

function TestimonialCard({ testimonial }) {
  return (
    <div className="text-center p-8 bg-primary/5 rounded-xl border border-primary/10">
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="material-symbols-outlined text-primary fill-1">
            star
          </span>
        ))}
      </div>
      <p className="italic text-gray-700 mb-6 font-display">{testimonial.text}</p>
      <h4 className="font-bold uppercase tracking-widest text-xs">{testimonial.author}</h4>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-display font-bold">Voices of Elegance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
