const galleryImages = [
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCcmtH99WZUZyHjnKl1hN9CjsPxgS75H5tlhclnwzLuwiny-XirOBQbyUR6SwGxcp3b5MoW3m1-ZCMx9JK2ISGr0suOL6ThriTwLuYoT_8Dg4nYsH9xJ3U7Z2eSDCcI8FPXl-hFjuKxnIBgoD-JN2kk7uGqVAPph7F0w8NvOX01AnMFBXzrfDY8A9-jBozCkoQFo0laPAWv0n-wV_dHFWX1OMlmDnLLSlANuH2MK3vBD6aTFDGKynqP5qUOmZ1EMvzdxcNNog_o5kM',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAMZ2D5W6_xKZVorj7tsMLn_sxTQneBcC-DnIb0au3OV1ebY9W9zMPt_6MtxSpfZ9gdJhXxYNv89dYWEQ1BcMSXigT5g48LOyAJHSo2G_3jfXNBOLPLvUCzFwzitKw_ommy0qXrSRpUgH_1z5r_Ml_C4RTmSbafr-6nPuk5GvJs8dS-Afy_7Ezba-EeVCJlIk4DDso6wpAk4Wv4Log7-AyF05J9gB5f8KrZ7EA7fLHkGLwJwFT1JCgZIXvYNjl5WQkKNeCjPYVOCfk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCtnkBiP70n1bKKUb1JannhaF-HveuDQpXXjdMGpqI1TFGih8eWg5jVtVQLUBvGjWqJNZJSbemyfHufZ72cuGPgPhOmemmJYCG296Y4nAIiy17_0y20PNVDgnUEk7YGF2vyaJFAhvHZGeIUzftmd8BN6YtnUiPfm97ZV69DFaJLphQugcsFyrx7NbNhVEwfkYdqntSOzFTzEa1QJVlsL2F_VVB65gOBzd9LJy24IVjjIsOCAQCj6jkWEd2uwpbAsms2D_2-MnChmoY',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDJRNexpU8T_5e7OBZLtnzf-PuZlIo0uvGdUKy2v9uhdP4DZxQGSK3DE_kpzM_ymf3bGUzY6vjOj_EQDCNyAYT-8YgkGGyLet7KBgKeOYDMSln5szXPPjBpxo7OPfd32NFT0dgeLfvvR8Wbty6Aaoo7iE2aghcbWLKRJZNURmEZeWU6MwTb3KNR5Lksz-u8u2t1OQ8SRIbikwtXW-X7PA2zAg3ObR6OwcGPJP9G8NUt4jQCRP8AGFDMO8ekmyyiM9UuBUYqEUYy-XI',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBN7JkxP5n_jm0BkzLT0jUpCePm24L_JMRHSsznMmR_967OHYwn9D-Ia05RtH4xuVb6hiavWvip9PGSrIvXxGpC2zPWarlKx2AuY-eDguYbiK4uZu_9vqEoDHlxsDVRytif2OaY1BjPw0EoXIWSdQtPiSVXpSFAbAm8BBkyHgTRX2UlDYwjyrfhyU64goYTbYw7agjqZxPWoNdRAUlSFKkJSW_nHYFahdHd1mNcyZpgWNSwrAb0IeTTMdfL5pj37aj8qYLX_W8_exk',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB_rtGk3Esq_rHxICy_QFSrosol5vc5UkrQHTJLhf8OhaXKHIRzL2MseJbl9lVSemeOztXpvj1jkzVxnIgeH0jFnRLl7YugJDpHUCnEcHFtKqg5CH26xABGri2Z9OeP18QoRzDQfcwSxz285zprFlo8SymmpOf1Q0vOTReank9XqibAIWUce9sOndTekmrH32CfmhehUSpqyKOaEOMYvEP87nXlKkokXUMjIgEXRwdLqSiduj3Jr1H2EOGNHWAYuV2FT6BS-Qo127g',
];

export default function InstagramGallery() {
  return (
    <section className="py-24 border-t border-primary/10">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-center justify-between">
        <h2 className="text-3xl font-bold">Follow @AZARAA_OFFICIAL</h2>
        <span className="material-symbols-outlined text-primary">camera_alt</span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 px-2">
        {galleryImages.map((image, idx) => (
          <div
            key={idx}
            className="aspect-square bg-cover bg-center group relative cursor-pointer"
            style={{ backgroundImage: `url('${image}')` }}
          >
            <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <span className="material-symbols-outlined">favorite</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
