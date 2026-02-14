const arrivals = [
  {
    id: 1,
    name: 'Silk Thread Bangles',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjSdIGTc-cYa5DGNDlBf_0RRcy1lrfH6zD_Sgwz25kDpUBOrECJx1IKJCn2AdyUNBRy5TA8jzgKj6LVk56vKfd5z9X82f5IhTPD81xRxuZ2j10ikggsNhj_5EPxR5-qgj2wyags7QKKGN9p4zY15ckZmfJIrehDrYcHHEyA5LswHc3Aoz7iWcOYK3MKmL-Tt3hm3IqgRT3dQMcfslQGLfUmgJugmjqooRsJ6u4vgcSE_nqE36-Q6s-27UYwZWMpNuF7fG2vV2sx4s',
  },
  {
    id: 2,
    name: 'Temple Earrings',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtnkBiP70n1bKKUb1JannhaF-HveuDQpXXjdMGpqI1TFGih8eWg5jVtVQLUBvGjWqJNZJSbemyfHufZ72cuGPgPhOmemmJYCG296Y4nAIiy17_0y20PNVDgnUEk7YGF2vyaJFAhvHZGeIUzftmd8BN6YtnUiPfm97ZV69DFaJLphQugcsFyrx7NbNhVEwfkYdqntSOzFTzEa1QJVlsL2F_VVB65gOBzd9LJy24IVjjIsOCAQCj6jkWEd2uwpbAsms2D_2-MnChmoY',
  },
  {
    id: 3,
    name: 'Gold Kada',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAMZ2D5W6_xKZVorj7tsMLn_sxTQneBcC-DnIb0au3OV1ebY9W9zMPt_6MtxSpfZ9gdJhXxYNv89dYWEQ1BcMSXigT5g48LOyAJHSo2G_3jfXNBOLPLvUCzFwzitKw_ommy0qXrSRpUgH_1z5r_Ml_C4RTmSbafr-6nPuk5GvJs8dS-Afy_7Ezba-EeVCJlIk4DDso6wpAk4Wv4Log7-AyF05J9gB5f8KrZ7EA7fLHkGLwJwFT1JCgZIXvYNjl5WQkKNeCjPYVOCfk',
  },
  {
    id: 4,
    name: 'Rose Gold Bracelet',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcmtH99WZUZyHjnKl1hN9CjsPxgS75H5tlhclnwzLuwiny-XirOBQbyUR6SwGxcp3b5MoW3m1-ZCMx9JK2ISGr0suOL6ThriTwLuYoT_8Dg4nYsH9xJ3U7Z2eSDCcI8FPXl-hFjuKxnIBgoD-JN2kk7uGqVAPph7F0w8NvOX01AnMFBXzrfDY8A9-jBozCkoQFo0laPAWv0n-wV_dHFWX1OMlmDnLLSlANuH2MK3vBD6aTFDGKynqP5qUOmZ1EMvzdxcNNog_o5kM',
  },
];

export default function NewEdits() {
  return (
    <section className="bg-[#FBF9F6] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] font-display font-bold">The New Edit</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {arrivals.map((item) => (
            <div key={item.id} className="group relative">
              <div className="absolute top-4 left-4 z-10 bg-primary text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded">
                New
              </div>
              <div className="aspect-square overflow-hidden rounded-lg bg-white mb-6">
                <img
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={item.image}
                />
              </div>
              <h3 className="text-lg font-bold text-center">{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
