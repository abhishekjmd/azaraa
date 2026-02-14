export default function TrustMarkers() {
  const markers = [
    {
      icon: 'verified_user',
      title: 'Authentic Badge',
      desc: '100% Certified Hallmarked Gold',
    },
    {
      icon: 'lock_person',
      title: 'Secure Checkout',
      desc: 'Encrypted Payments & Privacy',
    },
    {
      icon: 'diamond',
      title: 'Expert Curation',
      desc: 'Hand-selected by Royal Artisans',
    },
  ];

  return (
    <div className="bg-white dark:bg-[#1a150a] border-y border-primary/10 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {markers.map((marker, idx) => (
          <div key={idx} className="flex items-center gap-4 justify-center">
            <span className="material-symbols-outlined text-primary text-4xl">
              {marker.icon}
            </span>
            <div>
              <h4 className="font-bold text-xs uppercase tracking-widest">
                {marker.title}
              </h4>
              <p className="text-xs text-gray-500">{marker.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
